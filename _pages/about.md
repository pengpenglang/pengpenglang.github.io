---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

👋 Hello, here is pengpenglang, a junior computer vision alchemist!

🍻 Feel free to reach out if you share similar interests — let's learn and grow together!

🙂 My research focuses on **Gait Recognition** and **Human Pose Estimation**. I'm also interested in **Multimodal LLM** and **3D Vision**. 

# 📖 Educations
- **M.Eng. in Computer Science and Technology, Beijing Normal University, [BNU-IVC](https://github.com/BNU-IVC)**

  *2023.09 - Present*, GPA: 3.60/4.0, Supervisor: [Prof. Yongzhen Huang](https://ai.bnu.edu.cn/xygk/szdw/zgj/bfed57e2f8fc4de2a6b370063517f801.htm) (Co-Advisor: [Prof. Saihui Hou](https://ai.bnu.edu.cn/xygk/szdw/fgj/170e0faaf01d4a0e8c50a6c889c786c3.htm))

- **B.Eng. in Computer Science and Technology, China University of Geosciences (Beijing)**

  *2019.09 - 2023.06*, GPA: 4.69/5.0, Supervisor: [Prof. Yuqing Zhang](https://www.cupk.edu.cn/gxy/c/2024-09-24/524112.shtml)


# 🔥 News
- *2026.01*: 🥳 One paper has been accepted by ICLR 2026 (CCF-A, 2nd Student Author).
- *2025.11*: 🥳 One paper has been accepted by AAAI 2026 (CCF-A, 1st Student Author).
- *2025.07*: 🥳 One paper has been accepted by ACM MM 2025 (CCF-A, Oral, 1st Author). 

# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/GaitSnippet.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

**GaitSnippet: Gait Recognition Beyond Unordered Sets and Ordered Sequences**

Saihui Hou, Chenye Wang, ***Wenpeng Lang***, Zhengxiang Lan, Yongzhen Huang<sup>†</sup>

[**[📜Paper]**]() [**[📝Arxiv]**](https://arxiv.org/pdf/2508.07782)<br/>
We propose GaitSnippet, a novel snippet-based paradigm for gait recognition, treating a gait sequence as a union of individualized actions to capture multi-scale temporal contexts. Based on the new modeling concept called snippet, we design speical sampling and modeling methods,  through extensive experiments shows SOTA performance using only with 2D CNN backbone.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='images/GaT.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

**Gait Transformer: End-to-End Transformer Backbone for Gait Recognition**

Saihui Hou, ***Wenpeng Lang***, Jilong Wang, Yan Huang, Liang Wang, Yongzhen Huang<sup>†</sup>

[**[📜Paper]**](https://ojs.aaai.org/index.php/AAAI/article/view/42479) [**[🖼️Poster]**](https://pengpenglang.github.io/images/GaT_poster.jpg)<br/>
We propose GaT, an end-to-end Transformer for gait recognition. It addresses spatial-temporal dynamics, fine-grained motion, and data scarcity via three modules: hybrid patch embedding with group-batch bormalization, decomposed token mixer for context dependencies, and hybrid positional encoding strategy. Without any pretraining, GaT achieves SOTA performance on popular datasets.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025 Oral</div><img src='images/DPGait.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

**Beyond Sparse Keypoints: Dense Pose Modeling for Robust Gait Recognition**

***Wenpeng Lang***, Saihui Hou, Yongzhen Huang<sup>†</sup>

[**[📜Paper]**](https://dl.acm.org/doi/10.1145/3746027.3755685) [**[🌐Website]**](https://dpgait.github.io/) [**[🎬Video]**](https://dpgait.github.io/static/videos/DPGait.mp4) [**[🧩Code]**](https://github.com/DPGait/DPGait) [**[🤗Model]**](https://huggingface.co/pengpenglang/DPGait-Models)<br/>
We propose DPGait, a dense pose-based method to solve the limitations of sparse keypoints. On the upstream, we extend estimation model to output human dense points. On the downstream, we design a divide-and-conquer modeling architecture. Our method achieves SOTA performance across three datasets, demonstrating the effectiveness of method in complex scenarios.
</div>
</div>

# 🏅 Awards
- [ACM ICPC Asia Regional Contest](https://icpc.global), 🥉Bronze Medal, 2022 & 2023.
- [China Group Programming Ladder Tournament](https://gplt.patest.cn), 🏆Champion, 2022.
- [American COMAP MCM/ICM Contest](https://www.comap.com/contests/mcm-icm), 🥇Finalist, 2022.  
- [China Collegiate Mathematical Modeling Contest](https://en.mcm.edu.cn), 🥈Second Prize, 2021.
- [CCPC Regional Contest](https://ccpc.io/), 🥉Bronze Medal, 2021.

# 🤠 Experience
- *2023.09 - 2024.06*, Teaching Assistant of BNU.
  - *Introduction to Computer Systems*, Fall 2023.
  - *Introduction to Data Science*, Spring 2024.

- *2021.09 - 2022.02*, Teaching Assistant of CUGB.
  - *Algorithm Analysis and Design*, Fall 2021.

- *2020.09 - 2022.09*, Captain of the [CUGB-ACM](https://sai.cugb.edu.cn/c/2018-11-01/656924.shtml).

# 🌱 Miscellaneous
- My creed is *“On the ship of life, be a happy pirate”*.
- Love to learn any interesting thing: 🏊️, 🏸, 🎸, 🎨, 🎮 and so on.
