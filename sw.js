/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e4bcd19cf5e9865c704b605ac4ede780"],["/about/index.html","2505e1f728f68eee4d1924e56eb6f81c"],["/aboutme/index.html","4e2c656304039366da7c6bbffcbb92c4"],["/archives/2020/07/index.html","115b82ab9dafa14ca3fcaec1927e9d7a"],["/archives/2020/07/page/2/index.html","0fa9098ca79bdc0ecf86b4c3ec8f909f"],["/archives/2020/08/index.html","6b22001dc909d03bef90ff2ba8f71a55"],["/archives/2020/09/index.html","4c52396f4b26fc97d98041f0bfc59d94"],["/archives/2020/10/index.html","15225cc606fb005cf5602ef59a64194b"],["/archives/2020/11/index.html","deb603bb0b2927e9b8fba3fb5eb69d9f"],["/archives/2020/index.html","ed115e464273077f0742056758875b7e"],["/archives/2020/page/2/index.html","5e4ced252862e75b9c550256be5b8881"],["/archives/2020/page/3/index.html","08437b1e2a0595118585aab95cd738e5"],["/archives/2020/page/4/index.html","f483edb201211e4ba4580b9d3bff09c3"],["/archives/2020/page/5/index.html","b7ee8cf4d7eb82e3215dbb859e99ea50"],["/archives/index.html","6b700f474a81438e76e22c5e2832e5a8"],["/archives/page/2/index.html","f753c9e5f8b7d6453dd865e574ccdfbe"],["/archives/page/3/index.html","dc7a50a56fd23e0a37b53bf0a6bd1eab"],["/archives/page/4/index.html","becad03468391c0b5a1fdb1864353a40"],["/archives/page/5/index.html","512510eee9352b633e4c116a0cd6a2af"],["/artitalk/index.html","9b1e973c0db8438187fbae316c39ba04"],["/bangumis/index.html","89b72fa9f22c406563072251493450c2"],["/categories/ACM学习/index.html","bedba92bfd68573f6541f70c292faf6f"],["/categories/ACM学习/page/2/index.html","13cf527082a0db51c37835b773a824ab"],["/categories/ACM学习/动态规划/index.html","0308ad364a5006005df0c30037e722d7"],["/categories/ACM学习/图论/index.html","37d463928b86b85e1a36d643b047c465"],["/categories/ACM学习/基础算法/index.html","6fa01ced08519a75bffa7a1879b4d3d4"],["/categories/ACM学习/字符串/index.html","85723820308ec24bcbf0368906be5ea1"],["/categories/ACM学习/数学基础/index.html","d734c0c9ea9580086b7e7db94de5af0f"],["/categories/ACM学习/数据结构/index.html","bfad10d45c3a6aaeb7bf0090be432556"],["/categories/ACM学习/网络流/index.html","2ea851a3b4c8cf1db827d1dbd19dda29"],["/categories/OJ题库/PTA/index.html","2d15e8569e980b7d905cedc799d4a2fc"],["/categories/OJ题库/Vjudge/index.html","1b8ea8ff799d974c346f45db62ccca9a"],["/categories/OJ题库/index.html","666deaee66790e811f562ea0654371fb"],["/categories/OJ题库/nowcoder/index.html","2ef72904dbfe0a916d37a0540ed244e5"],["/categories/Web学习/CSS3/index.html","834ed8788b114857e17223764a435517"],["/categories/Web学习/HTML/index.html","8af68a4688524c09aa8b0f43e3825e89"],["/categories/Web学习/index.html","3d960125128230a78f12e1815f0cc206"],["/categories/index.html","aec1ba560ceca579f2a3830b618aa7c4"],["/categories/大学计算机学习/C/index.html","8a3da893755467ec71a4e6f71a2051ff"],["/categories/大学计算机学习/C/page/2/index.html","c3dcf4fe3699229286d8a5930b948878"],["/categories/大学计算机学习/C/程序设计课知识总结/index.html","18bd0b35682d40bcffc4b62291a8bc52"],["/categories/大学计算机学习/index.html","4938f6222072cdd91b45e3e0af15b5d7"],["/categories/大学计算机学习/page/2/index.html","5efdc2365561b9b4ba3fcb2ae2d5ec08"],["/categories/大学计算机学习/汇编语言/index.html","6aa7cb95c45aaaafa907a628fec90545"],["/categories/杂项/index.html","cb4d801dad4ae54eb2fb24ecf56dede3"],["/categories/画册/index.html","f0734b9c5ae125c9dff81a2f86a8dfa7"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["/css/index.css","d8c16b6b5445f1491b7780fd8211b3ad"],["/css/mogaicss.css","7f6f7df86fc6fb6725769453ddc23778"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/download/index.html","ad9c0253a03f4a0ba639cb1ae792a4fa"],["/essay/2020-ACM.html","5df0294c4410ac6d6957244b7d44a307"],["/essay/anime.html","589f8610e8c68f8906d9dc0059f42c8b"],["/essay/index.html","f347bc3b3807519a1f51cd704ced8ec8"],["/essay/life.html","de1e2fe0684d3965fdc4fb22d83ae6df"],["/essay/soccer robot.html","af14c7f57df2b5550477c7c2d9c6875c"],["/gallery/index.html","311185d5d086177c8dd5a66574b3ce77"],["/graph/index.html","9713a8892160eb7737e4ee2849288d50"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.png","86b599f6e370e46d78392d3b29263bab"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","7f2624703c9fc51756837579d099f355"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/loading/1241151513.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/loading/1441607537270501.gif","446735ec930a82d1686e35f75cd3a324"],["/img/loading/1441607668646787.gif","1fe70ee34cfc19912bceb758c402be3a"],["/img/loading/2131312.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading/loading.gif","3810415ef78a5c861f5661254b8a2fe9"],["/index.html","44bbea86605ca564d89bcd498a60e022"],["/journal/index.html","dda35cd34ab4ff848d0294210f31a29f"],["/js/about.js","b4406b6c0ed338d625d5ebd971b8c07a"],["/js/calendar.js","da76a4e1e9f0fe573eda087f678eaf4a"],["/js/iconfont.js","56bf1d4045b43101ab2ee2308f270089"],["/js/languages.js","f44cc882705a586231f80aee4c399460"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/mogaijs.js","ae132419fcd10c636016f2326754259e"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","e22c9458e6ed196d6914d579588708a9"],["/movies/index.html","4527db23c5e9d8606625aad566f85fdb"],["/music/index.html","29238570ce9edc4a6da3a4e5a4695596"],["/page/2/index.html","192606ffb2ee6e48604c86574b5b963c"],["/page/3/index.html","2a5c39b0cc514068dc3f0a694794ebfc"],["/page/4/index.html","79d7d800c5a0a1fb68ad47d840dae700"],["/page/5/index.html","0eb5b0f91981c2783acc79aa343ff120"],["/posts/1066650417/huibianti-1.png","99721159203a0ccfc9811938760a09e2"],["/posts/1066650417/huibianti-2.png","d42fa3a28aa6fa5396c9a74510e58a10"],["/posts/1066650417/huibianti-3.png","f91546148c205f14220b862f92db7ac2"],["/posts/1066650417/huibianti-4.png","ecd4d38919e5440d0976d582eda612a5"],["/posts/1066650417/huibianti-5.png","9198a7f4b1cd839f8aaf349fde58280b"],["/posts/1066650417/huibianti-6.png","c9259cd38b2217b6145d6d9dd241a833"],["/posts/1066650417/huibianti-7.png","a9397b99fbc33489a322e0a0f31550aa"],["/posts/1066650417/huibianti-8.png","7de16e63cd2fa0cc3da4f76102688ff3"],["/posts/1066650417/huibianti-9.png","1baea20eec2b143e5731385d7de6074a"],["/posts/1066650417/index.html","c68d89a659a47bef91fab2c17346209c"],["/posts/1214523148/index.html","103514ba18abe7016b29aff8e2a21d2c"],["/posts/1214523148/tulun-1.png","78c82096e371ec25aedc80fe197f7ae9"],["/posts/1214523148/tulun-10.png","4f961b6ea605afb75bae1dcb15ba9b4f"],["/posts/1214523148/tulun-11.png","bbfa685311a05e0d768d27ccbb319c74"],["/posts/1214523148/tulun-12.png","524e76ad816b27f52f89bea60d0a7733"],["/posts/1214523148/tulun-2.png","319f0b11927a7d3d748cf76b3763bf2a"],["/posts/1214523148/tulun-3.png","f455c008b4ad55ba17bf0f445549f4ea"],["/posts/1214523148/tulun-4.png","f2ce2125a2cf6f2a761abf68079d1ff7"],["/posts/1214523148/tulun-5.png","fcf42dc219b3538037a18505cf9d56ab"],["/posts/1214523148/tulun-6.png","efbe64b24ac973351bf895bd2dcef7f1"],["/posts/1214523148/tulun-7.png","841c67f87f533e2ea375864f2983340e"],["/posts/1214523148/tulun-8.png","d93cd4f4eb04429e399ed0c2ca5097a5"],["/posts/1214523148/tulun-9.png","b787b47df3147b86641737e6c32bdac8"],["/posts/1243066710/index.html","81a4797ede9f439502d030f97d1c9fec"],["/posts/1249631616/index.html","66584ac9ed95fc46830515dddb643d62"],["/posts/1249631616/tulian-1.png","8d881e97deafd99e6eb5fdf40132e880"],["/posts/1249631616/tulian-2.png","0924c48274dc1eb7062a97685c8f1217"],["/posts/1249631616/tulian-3.png","3011c2790a77721eb3807800d123bec3"],["/posts/1249631616/tulian-4.png","e57614e75ced0c958cd73debcd77e88e"],["/posts/1249631616/tulian-5.png","2b92936fac40ba177ad67459a686e391"],["/posts/1257195588/index.html","4979e7b8283a83c39da4a3cb94ae7d25"],["/posts/1257890361/index.html","3e5df95c78db1ae573b0eccee2d5b193"],["/posts/1257890361/search-1.png","20467262e9fe329254fa3a5d1b2297ae"],["/posts/1257890361/search-2.png","b3eb2bdcb1febaf6e14873dc027fb9ca"],["/posts/1257890361/search-3.png","bf8127a3f4990de0ae0a67cc5e2ac289"],["/posts/1257890361/search-4.png","7bc89812f79b120de7eb4a1e05c8c092"],["/posts/1257890361/search-5.png","564eda000633605d6bc11229ca879ffe"],["/posts/1257890361/search-6.png","3fd6cd730d59e3b0545a34a42708890f"],["/posts/1257890361/search-7.png","73283d5ac24e99a1564f16092ba291b7"],["/posts/1336151826/index.html","3e5d1e24d3e019384e0089c30d76dd30"],["/posts/1336151826/vj-kmp-1.jpg","08e27a602803755a250bbe0a796c877d"],["/posts/1450050819/index.html","cf80975ab1e261ac5446123d08b8a56d"],["/posts/1450050819/nowcoder-2020ccpc-xaiomi.jpg","c6e01e1111029d566d45d6293e285bab"],["/posts/1673697526/index.html","28d7d3747cd43470688a0fd98b3d54af"],["/posts/1818717376/cdesign-2-1.png","81560ce524a9801e94b2c4194a640224"],["/posts/1818717376/cdesign-2-2.png","717a1958f7166fe57f0317653e0d6661"],["/posts/1818717376/cdesign-2-3.png","800a310f02d41a0717adb609b9b98b3f"],["/posts/1818717376/cdesign-2-4.png","dbbf8b1f1a0776ad1228dccaafa2ad48"],["/posts/1818717376/cdesign-2-5.png","edc77ddb0eceb7609c5e5b6185ff8cf8"],["/posts/1818717376/cdesign-2-6.png","6bc13b06cbb0321477776b18dee12c7a"],["/posts/1818717376/cdesign-2-7.png","1815b0e11f8abdc5c6f65bf78ed87fe7"],["/posts/1818717376/cdesign-2-8.png","6d68d141c224d8ed8677e95b36ba4143"],["/posts/1818717376/cdesign-2-9.png","d2f8ced6f5e73e6715dcdf0bd0681de5"],["/posts/1818717376/index.html","fe253dcd5c299fc4e730b297d119f01d"],["/posts/1865235796/cdesign-4-1.png","60ae48782a1cd6bf56a0be31dbb58d89"],["/posts/1865235796/cdesign-4-2.png","10224661ddac86fb8466b78c019cc6ee"],["/posts/1865235796/cdesign-4-3.png","04b36ef7dd889204b2232332e5489d3b"],["/posts/1865235796/cdesign-4-4.png","218924c3342800ce9301cecd2d8d01fd"],["/posts/1865235796/index.html","503d6066b1efc2a75b57baa9c8144bbe"],["/posts/1921523807/draw1.jpg","59d9202dccbce8117408e8d1234ed891"],["/posts/1921523807/draw10.jpg","e9446b1cdf27259052a1edb6f6ad2fd0"],["/posts/1921523807/draw11.jpg","e293052af0834c97a1268d1717cc2cad"],["/posts/1921523807/draw12.jpg","234af310d870e68a6bf81e39a8c91ae6"],["/posts/1921523807/draw13.jpg","8c0926bb48bbd2cb96f7cb60b988f696"],["/posts/1921523807/draw14.jpg","78c8d3d9da60f0c781b747095319c212"],["/posts/1921523807/draw15.jpg","c479958ad4d9892f038b5e0d3230ecc3"],["/posts/1921523807/draw16.jpg","8b0b1c7623928801e5b24801f652ce0f"],["/posts/1921523807/draw17.png","217891da860666dcb44b5413667e3018"],["/posts/1921523807/draw18.jpg","b7c3e4d1acdf007607494e649d57e504"],["/posts/1921523807/draw19.jpg","3dc4bfa14b5316ab19ed6563aefa044d"],["/posts/1921523807/draw2.jpg","e5d63c0aee207bc9dfa8ce54c974703e"],["/posts/1921523807/draw20.jpg","806dc5c57d412268f47d4e3929ffcbbd"],["/posts/1921523807/draw3.jpg","ffcaad62bee9391148004c744fead3c4"],["/posts/1921523807/draw4.jpg","d2b7a0e977bdd7e905a44750cd0d62ba"],["/posts/1921523807/draw5.jpg","6b771a4a7700a1ca9d2c8997f8b96c86"],["/posts/1921523807/draw6.jpg","a646189a6e7b4bf151a03d55a7a47916"],["/posts/1921523807/draw7.jpg","8401d5ca03df3ff5fc96db4e4259032b"],["/posts/1921523807/draw8.jpg","b95fb9b32d8ab7e79927eae7ec5be526"],["/posts/1921523807/draw9.jpg","cf7ea7c4e3cafe81cac30594169a6071"],["/posts/1921523807/index.html","ac48b0d97c6042ad1377c226700f4527"],["/posts/1992298316/index.html","3cff658612a71a8a5a4e9005e39adb6e"],["/posts/1992909055/index.html","ae60db055a3e8ea46e5a7f66cba51b6c"],["/posts/1992909055/tree-1.png","aeccb1c198f404df02353d5b22b38ca0"],["/posts/1992909055/tree-2.png","f1336196a599ba50e11abc170c178019"],["/posts/1992909055/tree-3.png","bb2492d60cb1f06e1ab3cb87153b5045"],["/posts/1992909055/tree-4.png","b4caa7100d03396b3bacb4d3b81b6ee3"],["/posts/1992909055/tree-5.jpg","efea0a27582b5a54f55f2c9abda60905"],["/posts/1992909055/tree-6.jpg","97432406385dcb01d16edf4aa2410fe0"],["/posts/1992909055/tree-7.png","047d7287bb9ce707370a99d78b226597"],["/posts/1992909055/tree-8.png","46520d93a94bd9c5ea6d73386128da87"],["/posts/1999190247/index.html","5ca435bbc2092f46ad0fe04c746eca74"],["/posts/2066641994/index.html","235e9bc9fa9ace7d708f3b41b2418d16"],["/posts/2066641994/name-1.jpg","a8764c3d19961ee0714cd0e11a71ea1a"],["/posts/2127665391/cdesign-5-1.png","8867fa7a5216179caf3af11634980cbf"],["/posts/2127665391/cdesign-5-10.png","17038c4788d19d4d25b78751631f1322"],["/posts/2127665391/cdesign-5-11.png","9e870f706c9bc71100e55d6c558881d3"],["/posts/2127665391/cdesign-5-12.png","e79d5ec3896043dbd9e63a9cd0ee8fa6"],["/posts/2127665391/cdesign-5-13.png","babd0841a7dbeae9b035c7453348596d"],["/posts/2127665391/cdesign-5-14.png","7a465c393449693e36c5763da7a682a9"],["/posts/2127665391/cdesign-5-15.png","25e30c2931ae653754cf0b77c531223f"],["/posts/2127665391/cdesign-5-16.png","d561aee03fe87e98ba483e3ef8d3d2e2"],["/posts/2127665391/cdesign-5-17.png","339f83d7bd8f4134bed3e74ed13aacea"],["/posts/2127665391/cdesign-5-18.png","44a984cd6e0ff0da52c0273a9fea562c"],["/posts/2127665391/cdesign-5-19.png","c724fe651c182a233d135da983f21ea7"],["/posts/2127665391/cdesign-5-2.png","6d0466f2a4e13aa923b8a53883bd7bd1"],["/posts/2127665391/cdesign-5-20.png","8c77ec1d385f3ce939668bb9362719b6"],["/posts/2127665391/cdesign-5-21.png","babf1247c32383b812db34c0837ac50d"],["/posts/2127665391/cdesign-5-22.png","13df8181641dfd62b4468f52e8a1fdea"],["/posts/2127665391/cdesign-5-3.png","704e7edb91eec4d7ba0bccd3e148370f"],["/posts/2127665391/cdesign-5-4.png","728f43b2c4ee4be97002aa7112cb3201"],["/posts/2127665391/cdesign-5-5.png","6bbef608ebbd42ca5040a010a8437723"],["/posts/2127665391/cdesign-5-6.png","580825508da47c56459bbd4d15db9537"],["/posts/2127665391/cdesign-5-7.png","9cd8faa53c070ef194fb332c715109c8"],["/posts/2127665391/cdesign-5-8.png","661609d66e413804fc093ce15134fad1"],["/posts/2127665391/cdesign-5-9.png","71f23e8e4b6bfe3090a61810ab45140a"],["/posts/2127665391/index.html","eaae39f1d3dd47bb975231e60e283812"],["/posts/2141260407/index.html","a36d67fff28707fad47fd0b2cdc0752e"],["/posts/2291390787/index.html","42942e7ece5c269e78b2efcc4ffdfeff"],["/posts/2291390787/segtree-1.png","b142d62fbfbb954ff7436434371c72f1"],["/posts/2291390787/segtree-10.png","a465a577eddc60b1760520ba71e56a6c"],["/posts/2291390787/segtree-11.png","bf38a314c059fcb819f2136f5fcd4cbc"],["/posts/2291390787/segtree-12.png","740fa31a931102e8a244d41edd3f7643"],["/posts/2291390787/segtree-13.png","558e378077c9bd27779e5c05a0275b77"],["/posts/2291390787/segtree-2.png","a0df94a931826567d36d0af48adfff58"],["/posts/2291390787/segtree-3.png","4c44afec5f3293e07c45186ccaed7b2e"],["/posts/2291390787/segtree-4.png","26741ee5ead3469f30a1ab326d1abdd3"],["/posts/2291390787/segtree-5.png","3d4b70eb37b981523a14327046160cf7"],["/posts/2291390787/segtree-6.png","1f6c622f2e99c45de6e2a271360a5303"],["/posts/2291390787/segtree-7.png","31ce5c689d39dbd662c6f4c30b6f248e"],["/posts/2291390787/segtree-8.png","b534d5c3e54b3175750cf15eebf594ed"],["/posts/2291390787/segtree-9.png","31e9e42d474c7ab421cf7ca8bcffdacf"],["/posts/2310033160/index.html","bb8c351a962cd5c236d7caa702a4d8ae"],["/posts/2310033160/liu-1.png","84eedf73ec9ffffacf2d17413a5dca43"],["/posts/2310033160/liu-2.png","aa8fa1bea1080d98bfb25e9eec4fe66f"],["/posts/2310033160/liu-3.png","a0bd2c1758963a5a0a7b90f249181e6c"],["/posts/2310033160/liu-4.png","47163d1be3974386e3b4216466612740"],["/posts/2310033160/liu-5.png","e260a321b728eba2957218364e815b1a"],["/posts/2310033160/liu-6.png","91dc3ad73d836e0da4c826b7dac0d472"],["/posts/2310033160/liu-7.png","2637f7ced11c9bf9cbb4da5ab2725277"],["/posts/2310033160/liu-8.png","0cdc4fffe4c326b8add6a0cd30e9a7f4"],["/posts/2310033160/liu-9.png","f23740c20d440cd58fbf856c9d1d75d7"],["/posts/2456212399/index.html","8cde1159ac5ffcabe5a0fca219b42fa1"],["/posts/2473961166/index.html","0379d7e407a6c477da059654ddb4cde6"],["/posts/2473961166/sort-1.png","caa5942b4255b2fccbfaa3bdf23811b1"],["/posts/2473961166/sort-12.png","519970e854c90f9b901947963316dd64"],["/posts/2473961166/sort-13.png","839422a30a824720938d3e4a35f2f5d1"],["/posts/2473961166/sort-2.png","acf7bbd2a6bc65325f6af1d7a19a3d02"],["/posts/2473961166/sort-3.png","36d5d5d696abbf5562b95a67ee122633"],["/posts/2473961166/sort-4.png","1c4291f66d3badeecf8da5db0fa7f258"],["/posts/2473961166/sort-5.png","9dd09eee984f8c7cc06470fe6bc9cbc3"],["/posts/2597018803/MST-1.png","b8b54d0bd5b97a3420bd2f422c02aee7"],["/posts/2597018803/MST-2.png","5293dfc10763c9a5a57e81a0554ed7e2"],["/posts/2597018803/MST-3.png","dde612cf563d6c2cdb7883e26f411866"],["/posts/2597018803/MST-4.png","1be43900dcefe5f88b31f6bcd3833c1c"],["/posts/2597018803/MST-5.png","023bda2a1252707dd7c9d0f0a4f2b193"],["/posts/2597018803/MST-6.png","028be5cd72431593ab376424be36dfa9"],["/posts/2597018803/index.html","fb283e488601b64c5b84f3bfb26f3217"],["/posts/2695935933/chafen-1.jpg","8d22027fbd7078efafb020270ecc5a47"],["/posts/2695935933/chafen-2.jpg","16f85518993b900d6a22407515f23e0e"],["/posts/2695935933/chafen-3.png","024830ec4be935a29f73ddc37e94ae42"],["/posts/2695935933/chafen-4.jpg","3c1b329f57eee73ff4a8a17d0f662ded"],["/posts/2695935933/chafen-5.jpg","88fb26f8730c52b371e9a954bf8edecb"],["/posts/2695935933/chafen-6.png","0055a359bdbd2acb3ac0ec2a8a0b1237"],["/posts/2695935933/chafen-7.jpg","109db05082f92beac6ac955b49eb9e8b"],["/posts/2695935933/chafen-8.jpg","ce11cea25fbcc7f6b8f5c3436755ed8b"],["/posts/2695935933/chafen-9.png","9aefd6d4f78264c467e73e6a554e40ab"],["/posts/2695935933/index.html","61070dfe8c0be7355c8f994fa6bf162b"],["/posts/2852476022/bsearch-1.png","8b603c58b46aaabdddbe3b38c868fbb5"],["/posts/2852476022/index.html","501acb78a0be8cce36122bf7b4d18b3f"],["/posts/2867974581/index.html","8139461baa6084697212644b73025dc7"],["/posts/3256266088/cdesign-1-1.png","501e6b86cb118824175ab1494e7bd186"],["/posts/3256266088/cdesign-1-2.png","b4bfa05923fdbadde1d5d0f9804b04fa"],["/posts/3256266088/index.html","111cf28ed6a01af6dc2ba1adfb244c8f"],["/posts/335160020/HTML-1.png","b56d5527d8b5f7b008343a20ba1f6acb"],["/posts/335160020/HTML-2.png","a2c3649240a7f939fb516071f57fe58a"],["/posts/335160020/index.html","ce1afb056f4a6eefb8326c52218c0a8c"],["/posts/3355618782/index.html","fa60885869327f6c82969b0c1aeddc1a"],["/posts/3355618782/vj-2020ccpc-1.jpg","b1d66b85a0c2aa43e65548b1e637168c"],["/posts/3355618782/vj-2020ccpc-2.png","f92c910df83db002366c1f28843088a0"],["/posts/3381327147/index.html","0cb8e30a4a832359db190bbaa27205a3"],["/posts/3381327147/math-1.png","00051be557ae68b9fad3c4b046e9eae8"],["/posts/3381327147/math-10.png","2e55951390518f0ff610e016aa94c922"],["/posts/3381327147/math-11.png","f46d03129fcb1fc2c887e7fb4d8c0f2e"],["/posts/3381327147/math-12.png","9172dd239a683397e07afb6f45946653"],["/posts/3381327147/math-2.png","6b706109f3c91366688cdacc87a62849"],["/posts/3381327147/math-3.png","c62d978f69de49a3b1e7a5cfb1500249"],["/posts/3381327147/math-4.png","834108004c4a656eb061e0b72e11ae23"],["/posts/3381327147/math-5.png","60fe8631d1296772f0f5ee0c0b201209"],["/posts/3381327147/math-6.png","b3783b2f2fe407226e3fc6e68a5000c8"],["/posts/3381327147/math-7.png","5dcd6b27477f8b81cf7f910977818eb5"],["/posts/3381327147/math-8.png","24bba6dfaeeb47c72ebf973805acb5e0"],["/posts/3381327147/math-9.png","a0137bb65fb69a34f7c5a37d90e9e87d"],["/posts/3448406853/index.html","694d2cc30801a26167ae2bc2e7dd3750"],["/posts/3629818838/2020-cugbsuanfa-1.png","b34d36253c42a533625fa4def14410d4"],["/posts/3629818838/2020-cugbsuanfa-10.png","1afbaa25f548d3216d54e886cbea30ab"],["/posts/3629818838/2020-cugbsuanfa-11.png","f5f4a4c959b39558b2a4f980036e061b"],["/posts/3629818838/2020-cugbsuanfa-12.png","5946e59eb78e46fe281a4e0b278dedb2"],["/posts/3629818838/2020-cugbsuanfa-13.png","4da5e8bf655a5c4bd815b31a8ba7009c"],["/posts/3629818838/2020-cugbsuanfa-2.png","1f97915f7b263661a416d9b0a8f521f5"],["/posts/3629818838/2020-cugbsuanfa-3.png","917348ae35501ac3bebd9d49e3f6be6e"],["/posts/3629818838/2020-cugbsuanfa-4.png","9dba2ef3716298a2d9bc294897506d95"],["/posts/3629818838/2020-cugbsuanfa-5.png","6e4cfcf274ce7739bb27abccc61915e2"],["/posts/3629818838/2020-cugbsuanfa-6.png","52c7af0ed3a7fa88517aed1456886dce"],["/posts/3629818838/2020-cugbsuanfa-7.png","cd3121e395131eb1182b1dbd28529cf0"],["/posts/3629818838/2020-cugbsuanfa-8.png","11d758b43ca4b729e38d0fdad4ac5d66"],["/posts/3629818838/2020-cugbsuanfa-9.png","5606068414ad875f534c79edc1353346"],["/posts/3629818838/index.html","5a86d272de18cf850df7b0d786bb1dc8"],["/posts/3712360875/index.html","3d96f3d7b4c8b3ca554e5031cf072024"],["/posts/3800942126/CSS3-1.png","2a5dcc8e7c54ae5488c270490f854856"],["/posts/3800942126/index.html","5d7c4bab260dfdfd952b7225fcb68610"],["/posts/3935974569/cpp-1.png","990c06af314b887f89f5eb9046f7c483"],["/posts/3935974569/cpp-10.png","b6d8b07a225e6e1014352e5d2b93fe1b"],["/posts/3935974569/cpp-11.png","c3205217aeed4b6e06bdfed5c330ed24"],["/posts/3935974569/cpp-12.png","eedf6198825a434ff77b0bd9b02c0708"],["/posts/3935974569/cpp-13.png","5933be01578597ca5529d109aa8740f4"],["/posts/3935974569/cpp-14.png","767fca62cb1ff8034458858c65f115c2"],["/posts/3935974569/cpp-15.png","7a7f8fd09ada01ba1da5087015b3bac5"],["/posts/3935974569/cpp-16.png","8f832e326c2805e2d6d3b0db5deee76c"],["/posts/3935974569/cpp-17.png","bd97edea2efb72f161a281c7154c58a6"],["/posts/3935974569/cpp-18.png","1167b8550bc903225f80909be4980885"],["/posts/3935974569/cpp-19.png","994a3f9f95169dd216b774501e0b9449"],["/posts/3935974569/cpp-2.png","4c191370542757c137bdba6ff1d878c0"],["/posts/3935974569/cpp-3.png","ad503eea61fcb2e353f22103db7deec0"],["/posts/3935974569/cpp-4.png","d2ba905938b604f46e7085428a5f609e"],["/posts/3935974569/cpp-5.png","8a1b9b8b52e9645f5ab63ce0158d474e"],["/posts/3935974569/cpp-6.png","8d199bbb185d705855bd9fd4d7d00ec6"],["/posts/3935974569/cpp-7.png","aa62d481ac9803cc28945b004e5c5c46"],["/posts/3935974569/cpp-8.png","90bab268d09c2ec32c6a50fb8a5f89c8"],["/posts/3935974569/cpp-9.png","596cb268b789ae88ea205549cf5a3735"],["/posts/3935974569/index.html","a311ebcf0cfcc75d75c548b0255015cd"],["/posts/3951849340/index.html","d55556f4ef4f333b3041b6baab934f59"],["/posts/4080893375/bing-1.png","0fd3a3dd2702e8871cbfba0cf8e9d2b4"],["/posts/4080893375/bing-2.png","b83f7591fc096381c79b847d1bcedb20"],["/posts/4080893375/bing-3.png","ca4c426c6618e3e83773ae93d8b7b4b9"],["/posts/4080893375/index.html","88d135b03d95adcc4cd24c721c5f775c"],["/posts/4080893375/treezu-1.png","58bcebc5ba72a05800b6154c50a5e52e"],["/posts/4080893375/treezu-2.png","c438b01dc5aeacc1ee4edd0191f0db74"],["/posts/4080893375/treezu-3.png","ce8c0d3eefe44db37e7a4677e5db8db9"],["/posts/4080893375/treezu-4.png","30ed7d10c36cc66c0021a627285e64e0"],["/posts/4080893375/treezu-5.png","0dc8273771616b12b53d179e1b64c6c7"],["/posts/4080893375/treezu-6.png","9be6090c5132244dd9737f764da10916"],["/posts/4197694647/cdesign-3-1.png","c27e61021a554ad5471ced4288677401"],["/posts/4197694647/cdesign-3-10.png","b97b4239ddbe5028a14a904877e8d366"],["/posts/4197694647/cdesign-3-11.png","29ceb7ec88ca1bae0217b1360ba810b2"],["/posts/4197694647/cdesign-3-12.png","376bb65799b9bd951576fcccde950b5b"],["/posts/4197694647/cdesign-3-13.png","4799533054c945cecf8f8f5448ecc902"],["/posts/4197694647/cdesign-3-14.png","917b952966db1c8e2c00f874db3e04cb"],["/posts/4197694647/cdesign-3-15.png","f8e3405463e5f89a0390ff5aa80d09ca"],["/posts/4197694647/cdesign-3-2.png","4bf5614d30fb52eb291fede030826475"],["/posts/4197694647/cdesign-3-3.png","13ab1365a583a8ff418752c6448fac27"],["/posts/4197694647/cdesign-3-4.png","96bcd2cc85c9f55f3f218a7c4ee293c8"],["/posts/4197694647/cdesign-3-5.png","c6c62fa8a03dd6dbfc59fa549f524899"],["/posts/4197694647/cdesign-3-6.png","fa97c5142d72c420c79ce4249395628c"],["/posts/4197694647/cdesign-3-7.png","e1a122f2f975852fe57f8775668c30b2"],["/posts/4197694647/cdesign-3-8.png","e1b819644f11d8037b6ece00537edc22"],["/posts/4197694647/cdesign-3-9.png","de709662ed50e5c8c8de0a2f94b46123"],["/posts/4197694647/index.html","abe719dba392ff8eca39f51e5788ff89"],["/posts/4226656532/ZXS-1.png","314530aa33730f98f2cacaafa7217a7e"],["/posts/4226656532/ZXS-2.png","ba84f642ead4ca93e7a24171a8b01dde"],["/posts/4226656532/ZXS-3.png","53ee3429b2a152dad3469fde2fab8288"],["/posts/4226656532/ZXS-4.png","75102389416aa8081a48bf6cbc4c8ef1"],["/posts/4226656532/ZXS-5.png","4d5fcb7a77c76c5da877668233b39ae5"],["/posts/4226656532/ZXS-6.png","38c9172199d90198ef97f6ce72eed177"],["/posts/4226656532/index.html","408010c632955946c3719843860db1eb"],["/posts/491064300/index.html","9d30f449c054db8eb5eb4cc0091758b3"],["/posts/623518402/index.html","807ca487867a1fc625431218d99d7d89"],["/posts/623518402/kmp-1.png","395658c3aae9d76a3722e27371cee9be"],["/posts/623518402/kmp-2.png","013754d99b45c0aa9e3cd9c7aaf77ccc"],["/posts/623518402/kmp-3.png","1139a8f0205921b9aea5ff0316d408b9"],["/posts/623518402/kmp-4.png","9881070ae982caf57fcf9163e4bf19ca"],["/posts/623518402/kmp-5.png","f1ea5f69848ce4ab27398746fa6e13c6"],["/posts/623518402/kmp-6.png","79817eda446c9e31a7ab5bad32e660c2"],["/posts/623518402/kmp-7.png","e89712b94930a0114e48892f4e4ab1ab"],["/posts/623518402/kmp-8.png","bb737cdfed455239e7035d6b44f056a7"],["/posts/623518402/trie-1.png","ef73ea65f63fbbd9aa10645e334d2c22"],["/posts/623518402/trie-2.png","701d451f5cceedfd8212c84a8a8a221e"],["/posts/635767573/huibian-1.png","ed702de963e1fd2a9835d3c344f9439a"],["/posts/635767573/huibian-10.png","2ec7ce9bb7059a045159098dfe2f04c5"],["/posts/635767573/huibian-11.jpg","9607865632aeec03db81a50135c588ef"],["/posts/635767573/huibian-12.png","c1ab31c22cec23beace9de2ea6142f14"],["/posts/635767573/huibian-13.png","c54d1da7ed72be31e6fc5e3333bb246a"],["/posts/635767573/huibian-14.png","65a8274cb88922b846684dfe256f30bb"],["/posts/635767573/huibian-15.png","35d108c10a96b75bf3ee347fee28df48"],["/posts/635767573/huibian-16.png","097d8f892860a4adaf36a15b3d64d8a0"],["/posts/635767573/huibian-17.png","c0aed45737ba3990f59e045344e285eb"],["/posts/635767573/huibian-18.png","93d5c5f7063ea67016ffb80120d0a04d"],["/posts/635767573/huibian-19.png","c734732b670ba7c49e79b44f7a74ef2b"],["/posts/635767573/huibian-2.png","35e35b8411b93eb1beed24d37a828d20"],["/posts/635767573/huibian-20.png","fb2bc6845dc3c548dcdba6ae9e6f0b39"],["/posts/635767573/huibian-21.png","0c395f278540bf9c15ddf9c7a4053fe0"],["/posts/635767573/huibian-22.png","d55d95a955b787d788412ac772ff184a"],["/posts/635767573/huibian-23.png","3a8026291c8147587b32bf505e88c0cb"],["/posts/635767573/huibian-24.png","d488964ecb278ba832b136f356b90687"],["/posts/635767573/huibian-25.png","6d35a1dfaabb3c9dac44b0b28959767d"],["/posts/635767573/huibian-26.png","00bde6fd32b10db9705afd0d9d7800de"],["/posts/635767573/huibian-27.png","d5e3c3a5287ab646d1dd51758466efa4"],["/posts/635767573/huibian-28.png","f9efcf95d231e6f661163a3a7b668c65"],["/posts/635767573/huibian-29.png","72ecabf7e71d78132bc81e971427fc99"],["/posts/635767573/huibian-3.png","86ababbe8fe7fb07a4e1e43af82b7ac0"],["/posts/635767573/huibian-30.png","9f561e8c41a782d9778a4f1cccd52da1"],["/posts/635767573/huibian-31.png","c5cef5dee094f7f7a996803b76674e40"],["/posts/635767573/huibian-32.png","bbdb2eec7d2d0a70d32a24e49b34b595"],["/posts/635767573/huibian-33.png","4092628bde049d47cf9e25b570d735f4"],["/posts/635767573/huibian-34.png","159de112e9f1e27428bd7faae0329fb1"],["/posts/635767573/huibian-35.png","1212b49c58e6f6776bf7dfc180ced05b"],["/posts/635767573/huibian-36.png","f8236be3961ec12925db64393a48f372"],["/posts/635767573/huibian-37.png","e97431899af3194be16771f730dcebdb"],["/posts/635767573/huibian-38.png","56a1df331ea6b1d9cc44bcf0c33e1135"],["/posts/635767573/huibian-39.png","378a2b13b3e1a305cbaf040af6291985"],["/posts/635767573/huibian-4.png","38d7f5b8059c6eda194a3fa39b13453a"],["/posts/635767573/huibian-40.png","24be11a56f3e439d628174e87adc9b8a"],["/posts/635767573/huibian-41.png","b93a217f5bd9f6307836d45d1af04bd9"],["/posts/635767573/huibian-42.png","3ec3e7c3ae919ba3fdd1e8f7eb7c8e4e"],["/posts/635767573/huibian-43.png","bdd8f07963c4c04b2aae10dae7cfb535"],["/posts/635767573/huibian-44.png","30b7d1215a33faa071b274663fa18a6b"],["/posts/635767573/huibian-45.png","9ffa17660d9f5de2075c57fe422f1b72"],["/posts/635767573/huibian-46.png","4f84a1073c2cf95ed3b5d16c454826e6"],["/posts/635767573/huibian-47.png","1d1080db8243f160b8b99d756b0dd2f8"],["/posts/635767573/huibian-48.png","7aecc07ff4dd3b833922d4629b6b97fc"],["/posts/635767573/huibian-49.png","27048a7427e8b111a28236903fb013e6"],["/posts/635767573/huibian-5.png","059b435f8d9bffd1619baa9f9c4acc60"],["/posts/635767573/huibian-50.png","8ec4f3595c60f4e83dbfd173c542a0df"],["/posts/635767573/huibian-51.png","260dd42ab33c97fc0cac43fd0882b9a3"],["/posts/635767573/huibian-52.png","dd87c9754fed28cb57c57eb5d6d9f06f"],["/posts/635767573/huibian-53.png","19254c61eb1fe960c5ea3e7b3ee84030"],["/posts/635767573/huibian-54.png","2f225cdd91b971397b75bb8542eb842e"],["/posts/635767573/huibian-55.png","d49768e4afd8129e2627cf89b098cdd4"],["/posts/635767573/huibian-56.png","59a3db53c77d4c95e4358f9b72d64127"],["/posts/635767573/huibian-57.png","62d8d30e82ef455e1a41bc1e32cf659e"],["/posts/635767573/huibian-58.png","481491e1e9894b7894f3727b8db96e89"],["/posts/635767573/huibian-59.png","d54e77063e2bc4b56bc7c6a7ebb41435"],["/posts/635767573/huibian-6.jpg","43fe164c48c55abff048686f1db14294"],["/posts/635767573/huibian-60.png","a52b1513195a6981fba8b9b82759b3a7"],["/posts/635767573/huibian-61.png","c3c3f8e2d8342301701478a4afaa5638"],["/posts/635767573/huibian-62.png","e2b5ae5a0d27799bafbfe76d15841215"],["/posts/635767573/huibian-63.png","cd364a82068e91ac67cd45e0124a86a3"],["/posts/635767573/huibian-64.png","7232408da76fe35363a6a30b90c3d9bb"],["/posts/635767573/huibian-65.png","b1699ed7cfff8104e6429265c7d5e89a"],["/posts/635767573/huibian-66.png","e77c0a1f7218fa6a39e0ee1170606552"],["/posts/635767573/huibian-67.png","f28e0d86fcd541a7a87da20d6769ec0a"],["/posts/635767573/huibian-68.png","ff86f333349310f0e97caf121bdda956"],["/posts/635767573/huibian-69.png","19a4c2d3895cce69b04e6a9828c6d9f6"],["/posts/635767573/huibian-7.png","c26818a1e3165034c874f04813daf7b2"],["/posts/635767573/huibian-70.png","9a9b8ca2102aa212180483ea27ee9e68"],["/posts/635767573/huibian-71.png","cc7550bda9f1da80376335aaae65c6bb"],["/posts/635767573/huibian-72.png","0f7e9f2fb6206cc457f9104329dd1781"],["/posts/635767573/huibian-73.png","b52fefc9d28d28970419785170479ebe"],["/posts/635767573/huibian-8.jpg","475be76e6410747452b92aaa4f3e7363"],["/posts/635767573/huibian-9.jpg","ce4272f7af1aa41fae51eb0a7d63788b"],["/posts/635767573/index.html","fba074a9317e05e5f0dc66f1b3ce583f"],["/posts/790315035/index.html","34c8911ded5d14573ca9d8b62d927fdb"],["/posts/917121829/index.html","d84588b1314a27e360a9ae63d0ef617d"],["/posts/917121829/vj-search-1.png","a962c6447d8c8cbd54d3c8164075fdee"],["/posts/917121829/vj-search-2.jpg","cbce117ce3369b8a5ec776c015e45004"],["/sw-register.js","d35ce03a0e190e026ecd6ec954c9e9a6"],["/tags/80x86/index.html","23af3bc91f45f5c1852e7b93eb59a957"],["/tags/AC自动机/index.html","ab26d19b6c36c8418d30f520749ac1f8"],["/tags/BFS/index.html","627782c211f9ecea0e553311aeca1ba7"],["/tags/C/index.html","b3a1677ebab16e757a205b26b200e84d"],["/tags/C/page/2/index.html","71d5efcb2205baaefac8425777e1a14b"],["/tags/C/page/3/index.html","cb613d45f1b54062c9449d0e371ef66c"],["/tags/C/page/4/index.html","d46f824644a19304759481eb4a87e275"],["/tags/CSS3/index.html","225491a012581766f068d9ba44884e84"],["/tags/DFS/index.html","adf69dffafb4a0bc07e19c28d364fff1"],["/tags/DFS序/index.html","718f90dca8cd35b6b3815e683e60e383"],["/tags/HTML/index.html","0b4665d1e7a03caa19a0089d17060f26"],["/tags/KMP/index.html","17836cd3ae43f540a58ea4704c517cdd"],["/tags/LCA/index.html","201eae4f2fcf98bd3a750ecfe86dbeda"],["/tags/ST/index.html","5878dd9a82fb1c482b85f041a5951512"],["/tags/STL模板库/index.html","d92e8c54c3f9d8c851d4fa80bebd7e08"],["/tags/Web前端/index.html","a803b17cb4a99067988cb8938754ed26"],["/tags/index.html","4e30c3dc90ed7a9c4a29d4511f1de654"],["/tags/三分/index.html","d36b93348bf144f0a3688431ed4e7593"],["/tags/二分/index.html","1fc21b7accfd960d16eb61c4414b487b"],["/tags/二叉树/index.html","a9d83dba45d1d419dfc050e5de79a189"],["/tags/伸展树/index.html","d933704408b8609b4670782f903e80b5"],["/tags/分块/index.html","0712a2ed296790c18cfd10ba46384439"],["/tags/可持久化线段树/index.html","8584b9aeb038b071bd63dc13c1d78a2c"],["/tags/图论/index.html","a0398c19b4b63f756c0b4b5a489f4736"],["/tags/基础算法/index.html","ad2a1209273ffe25030889b276b85a62"],["/tags/字典树/index.html","5916f97e052bbedfcb1ab4449aab1e4f"],["/tags/差分/index.html","23bce3d178ca246ca7688bbd38c867f9"],["/tags/并查集/index.html","114e77e73bf9e34c2f510f2c3ada3f29"],["/tags/拓展KMP/index.html","20c8f0f57b7a2f95b9bb4c8646b2c4e9"],["/tags/排序/index.html","c9dd91da54b06fabc543500146c87469"],["/tags/数论/index.html","36e23fe72d4d9e113a7c2c9da543d606"],["/tags/最小生成树/index.html","757406a6d38d82c124282e36ecf13244"],["/tags/最短路/index.html","2b111a4ddcdca612c0f3395e84ab3860"],["/tags/权值线段树/index.html","81843f70e9a1110170768dedf93987a4"],["/tags/查找/index.html","2118dac0c69b216cfd7160d582bb1d6e"],["/tags/树状数组/index.html","d2acff154d6b4cf784f01827ace4eb30"],["/tags/树的重心和直径/index.html","1115ca4b27228e45a9f5c8dcfa4df8ef"],["/tags/树链剖分/index.html","ae538e25d62362cb8296511e4fbddfe9"],["/tags/模板泛型编程/index.html","70d2146cfeea86f3f26117ec7fc03920"],["/tags/欧拉序/index.html","4ed25be28c0a62d480597fdc8b5d9b7f"],["/tags/汇编语言/index.html","6126a6c67f5a82a565adc002ee117e36"],["/tags/离散化/index.html","99f7054fbdce1b23b8f6dea904d3803d"],["/tags/程序设计/index.html","6e77c8928f401fec68385a3aa483774c"],["/tags/算法与数据结构/index.html","849032fe749829226150416206df092b"],["/tags/算法与数据结构/page/2/index.html","05b84952880d3b4a215555bef3a905a0"],["/tags/算法与数据结构/page/3/index.html","c1219d9c2b738d118be75299d0035ad3"],["/tags/类和对象/index.html","5539884b8b132b5260af7b53618f4a9c"],["/tags/线段树/index.html","2f7e87138ca996b48f1114a1bbd02483"],["/tags/组合数与排列数/index.html","a5e3e4d3bc05621b5652075e223291f9"],["/tags/继承与多态/index.html","4898cd56e156fcf75cf65f5b52e5cd37"],["/tags/网络流/index.html","1438d5c04b61f23f8b23e8862728b69a"],["/tags/运算符重载/index.html","74bf5944dc77d2ba7c340326544a5aea"],["/tags/连通性/index.html","db161d24e452716562a891dd42a8c8ad"],["/tags/逆序对/index.html","6c79e9cc65a8b32174e96d1a0d7e5c8f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
