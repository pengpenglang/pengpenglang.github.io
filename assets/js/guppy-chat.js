(function () {
  const root = document.getElementById("guppy-chat-root");
  if (!root) return;

  const modelBase = root.dataset.modelBase;
  const toggle = document.getElementById("guppy-chat-toggle");
  const panel = document.getElementById("guppy-chat-panel");
  const closeBtn = document.getElementById("guppy-chat-close");
  const samplesEl = document.getElementById("guppy-chat-samples");
  const logEl = document.getElementById("guppy-chat-log");
  const formEl = document.getElementById("guppy-chat-form");
  const inputEl = document.getElementById("guppy-chat-input");
  const sendBtn = document.getElementById("guppy-chat-send");

  const CONFIG = {
    vocab_size: 4096,
    max_seq_len: 128,
    d_model: 384,
    n_layers: 6,
    n_heads: 6,
    ffn_hidden: 768,
    pad_id: 0,
    bos_id: 1,
    eos_id: 2,
  };
  const GEN = { temperature: 0.7, top_k: 50, max_tokens: 32 };

  let ortModule = null;
  let session = null;
  let tokenizer = null;
  let loadingPromise = null;
  let isGenerating = false;

  toggle.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);
  formEl.addEventListener("submit", onSubmit);

  root.querySelectorAll(".guppy-chat__pill").forEach((pill) => {
    pill.addEventListener("click", function () {
      openPanel();
      inputEl.value = pill.dataset.msg || "";
      inputEl.focus();
    });
  });

  function openPanel() {
    if (!panel.hidden) {
      inputEl.focus();
      return;
    }
    panel.hidden = false;
    root.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    ensureLoaded().then(() => inputEl.focus());
  }

  function closePanel() {
    panel.hidden = true;
    root.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  async function ensureLoaded() {
    if (session && tokenizer) return;
    if (loadingPromise) return loadingPromise;

    loadingPromise = (async function () {
      try {
        ortModule = await import("https://cdn.jsdelivr.net/npm/onnxruntime-web@1.21.0/dist/ort.min.mjs");
        ortModule.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.21.0/dist/";

        const tokenizerResponse = await fetch(modelBase + "/tokenizer.json");
        tokenizer = buildTokenizer(await tokenizerResponse.json());

        const modelResponse = await fetch(modelBase + "/model.onnx");
        const modelBuffer = await modelResponse.arrayBuffer();
        session = await ortModule.InferenceSession.create(modelBuffer, {
          executionProviders: ["wasm"],
        });
      } catch (error) {
        console.error(error);
        addMessage("fish", "blub... Peng's Guppy is still waking up.");
      }
    })();

    return loadingPromise;
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (isGenerating) return;
    const text = inputEl.value.trim();
    if (!text) return;

    await ensureLoaded();
    if (!session || !tokenizer) return;

    isGenerating = true;
    inputEl.value = "";
    inputEl.disabled = true;
    sendBtn.disabled = true;
    samplesEl.hidden = true;

    addMessage("user", text);
    const typingNode = addTyping();

    try {
      const prompt = "<|im_start|>user\n" + text + "<|im_end|>\n<|im_start|>assistant\n";
      const inputIds = tokenizer.encode(prompt);
      const outputIds = await generate(inputIds);

      let reply = tokenizer.decode(outputIds).trim();
      if (reply.includes("<|im_end|>")) reply = reply.split("<|im_end|>")[0];
      if (reply.includes("<|im_start|>")) reply = reply.split("<|im_start|>")[0];
      reply = reply.trim() || "blub.";

      typingNode.remove();
      addMessage("fish", reply);
    } catch (error) {
      console.error(error);
      typingNode.remove();
      addMessage("fish", "blub... something went wrong in the water.");
    } finally {
      isGenerating = false;
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  async function generate(inputIds) {
    let ids = inputIds.slice();

    for (let i = 0; i < GEN.max_tokens; i++) {
      const seq = ids.slice(-CONFIG.max_seq_len);
      const tensor = new ortModule.Tensor(
        "int64",
        BigInt64Array.from(seq.map(BigInt)),
        [1, seq.length]
      );
      const out = await session.run({ input_ids: tensor });
      const logits = out.logits.data;

      const offset = (seq.length - 1) * CONFIG.vocab_size;
      const lastLogits = new Float32Array(CONFIG.vocab_size);
      for (let v = 0; v < CONFIG.vocab_size; v++) {
        lastLogits[v] = logits[offset + v];
      }

      if (GEN.temperature !== 1.0) {
        for (let v = 0; v < CONFIG.vocab_size; v++) {
          lastLogits[v] /= GEN.temperature;
        }
      }

      if (GEN.top_k > 0) {
        const sorted = Array.from(lastLogits).sort(function (a, b) { return b - a; });
        const cutoff = sorted[Math.min(GEN.top_k, sorted.length) - 1];
        for (let v = 0; v < CONFIG.vocab_size; v++) {
          if (lastLogits[v] < cutoff) lastLogits[v] = -Infinity;
        }
      }

      let maxVal = -Infinity;
      for (let v = 0; v < CONFIG.vocab_size; v++) {
        if (lastLogits[v] > maxVal) maxVal = lastLogits[v];
      }

      let sumExp = 0;
      const probs = new Float32Array(CONFIG.vocab_size);
      for (let v = 0; v < CONFIG.vocab_size; v++) {
        probs[v] = Math.exp(lastLogits[v] - maxVal);
        sumExp += probs[v];
      }
      for (let v = 0; v < CONFIG.vocab_size; v++) probs[v] /= sumExp;

      let random = Math.random();
      let acc = 0;
      let nextId = 0;
      for (let v = 0; v < CONFIG.vocab_size; v++) {
        acc += probs[v];
        if (acc >= random) {
          nextId = v;
          break;
        }
      }

      ids.push(nextId);
      if (nextId === CONFIG.eos_id) break;
    }

    return ids.slice(inputIds.length);
  }

  function addMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = "guppy-chat__msg guppy-chat__msg--" + role;

    const body = document.createElement("div");
    body.className = "guppy-chat__msg-body";
    body.textContent = text;

    bubble.appendChild(body);
    logEl.appendChild(bubble);
    logEl.scrollTop = logEl.scrollHeight;
    return bubble;
  }

  function addTyping() {
    const typing = document.createElement("div");
    typing.className = "guppy-chat__typing";
    typing.textContent = "making bubbles...";
    logEl.appendChild(typing);
    logEl.scrollTop = logEl.scrollHeight;
    return typing;
  }

  function buildTokenizer(json) {
    const vocab = json.model.vocab;
    const merges = json.model.merges;
    const added = {};

    json.added_tokens.forEach(function (token) {
      added[token.content] = token.id;
    });

    const id2token = {};
    Object.keys(vocab).forEach(function (token) {
      id2token[vocab[token]] = token;
    });
    Object.keys(added).forEach(function (token) {
      id2token[added[token]] = token;
    });

    const byte2char = {};
    const char2byte = {};
    const ranges = [
      [33, 126],
      [161, 172],
      [174, 255],
    ];
    const direct = new Set();

    ranges.forEach(function (range) {
      for (let b = range[0]; b <= range[1]; b++) direct.add(b);
    });

    let n = 0;
    for (let b = 0; b < 256; b++) {
      if (direct.has(b)) {
        byte2char[b] = String.fromCharCode(b);
      } else {
        byte2char[b] = String.fromCharCode(256 + n);
        n += 1;
      }
    }

    Object.keys(byte2char).forEach(function (key) {
      char2byte[byte2char[key]] = parseInt(key, 10);
    });

    const mergeRank = {};
    merges.forEach(function (merge, index) {
      const key = Array.isArray(merge) ? merge.join(" ") : merge;
      mergeRank[key] = index;
    });

    function bytesToTokenString(bytes) {
      return Array.from(bytes).map(function (b) {
        return byte2char[b];
      }).join("");
    }

    function tokenStringToBytes(text) {
      return Uint8Array.from(Array.from(text).map(function (char) {
        return char2byte[char] !== undefined ? char2byte[char] : char.charCodeAt(0);
      }));
    }

    function bpe(word) {
      if (word.length <= 1) return word;

      let pieces = word.slice();
      while (pieces.length > 1) {
        let bestRank = Infinity;
        let bestIndex = -1;

        for (let i = 0; i < pieces.length - 1; i++) {
          const pair = pieces[i] + " " + pieces[i + 1];
          const rank = mergeRank[pair];
          if (rank !== undefined && rank < bestRank) {
            bestRank = rank;
            bestIndex = i;
          }
        }

        if (bestIndex === -1) break;

        const merged = pieces[bestIndex] + pieces[bestIndex + 1];
        pieces = pieces.slice(0, bestIndex).concat([merged], pieces.slice(bestIndex + 2));
      }

      return pieces;
    }

    const pattern = /'(?:[sdmt]|ll|ve|re)| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu;

    function encode(text) {
      const specialPattern = Object.keys(added)
        .map(function (item) {
          return item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        })
        .join("|");
      const specialRegex = new RegExp("(" + specialPattern + ")");
      const segments = text.split(specialRegex);
      const ids = [];

      segments.forEach(function (segment) {
        if (!segment) return;
        if (added[segment] !== undefined) {
          ids.push(added[segment]);
          return;
        }

        const words = segment.match(pattern) || [segment];
        words.forEach(function (word) {
          const bytes = new TextEncoder().encode(word);
          const byteChars = Array.from(bytesToTokenString(bytes));
          const tokens = bpe(byteChars);
          tokens.forEach(function (token) {
            const id = vocab[token];
            if (id !== undefined) ids.push(id);
          });
        });
      });

      return ids;
    }

    function decode(ids) {
      const parts = [];
      ids.forEach(function (id) {
        const token = id2token[id];
        if (!token || added[token] !== undefined) return;
        parts.push(token);
      });
      const allBytes = tokenStringToBytes(parts.join(""));
      return new TextDecoder("utf-8", { fatal: false }).decode(allBytes);
    }

    return { encode: encode, decode: decode };
  }
})();
