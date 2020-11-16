/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","521d0ebc8216c1cdada6aa63ed15c839"],["/about/index.html","0a813a871e3d8050ba08d1581be41045"],["/aboutme/index.html","6c5488b64f4496f9150ddce0527205b5"],["/archives/2020/07/index.html","f9d3d362333981b648f8db34bfd30db2"],["/archives/2020/07/page/2/index.html","123054d1441160397c084f91a07beeeb"],["/archives/2020/08/index.html","ecb6c09a11cae2a1f0341eb00f44010a"],["/archives/2020/09/index.html","70ec3f9f393f48c100e49902ab1aab96"],["/archives/2020/10/index.html","18c4902b627cd3dcc37031707f1e93a2"],["/archives/2020/11/index.html","673fd9e8e9ac69116f167792eb170a8a"],["/archives/2020/index.html","c2da1c2b880ce542ac08749032967d26"],["/archives/2020/page/2/index.html","f7bc758aac3bb82aa72d64c5ed574ec7"],["/archives/2020/page/3/index.html","d93d4897ea678dc56c151002e8ce860c"],["/archives/2020/page/4/index.html","395cab637f75f0e98945ec4dcc23282e"],["/archives/2020/page/5/index.html","3adc55eae3f496389f9af0d5b86bd141"],["/archives/index.html","9f1c3f56809b92579017f01b77176383"],["/archives/page/2/index.html","3e6af3d22884b7d2a5eb00e9265b6884"],["/archives/page/3/index.html","d1691b70c52b70503c64a04d837b46cd"],["/archives/page/4/index.html","d74c5a5ddc31263eacb6066650184349"],["/archives/page/5/index.html","ed2a31addb807086b81e76ac047ddf78"],["/artitalk/index.html","12f5be2b872c9322f31cd2277ae35b8c"],["/bangumis/index.html","aca9fd6f64fe3b7cdaa849157a828d97"],["/categories/ACM学习/index.html","4894260c2f19039d602aff82a0c38ba1"],["/categories/ACM学习/page/2/index.html","e00089a57694a04bae938521b0cada8f"],["/categories/ACM学习/动态规划/index.html","690d750e1559a28f91974e37ea1b1199"],["/categories/ACM学习/图论/index.html","1e397e0ad43e10020713c5335c88d765"],["/categories/ACM学习/基础算法/index.html","6bb2ce9c1b3e04fd52cd804efa50f0c5"],["/categories/ACM学习/字符串/index.html","c44a716beff1cdedba71152ab1785c4f"],["/categories/ACM学习/数学基础/index.html","aa4bab165edbe0d586e77caac9c94ff7"],["/categories/ACM学习/数据结构/index.html","9bce0b005345847a03b537a74b51e167"],["/categories/ACM学习/网络流/index.html","f444cdbf59ec17efa94890ee9f50df6b"],["/categories/OJ题库/PTA/index.html","1733cfa5cc64cb81b7496030fb88af68"],["/categories/OJ题库/Vjudge/index.html","c692a6d678cb3f7ecc8aecec9a6bab79"],["/categories/OJ题库/index.html","5b9428db51030fcc8effa0cb59db50e9"],["/categories/OJ题库/nowcoder/index.html","baef3ac2daf6680cd9e666a0ce0c2dd2"],["/categories/Web学习/CSS3/index.html","f8ed1aa4ef8a3b09ede45c07a1578763"],["/categories/Web学习/HTML/index.html","f2247d97f76ce4b95113da53b41261be"],["/categories/Web学习/index.html","0639b84cf01f48f478e69c63860c7ba8"],["/categories/index.html","c6c593afd8691f6a35e7e0e71d6dcca8"],["/categories/大学计算机学习/C/index.html","ea217ee8fddb32d0851dd8f302c9e0f3"],["/categories/大学计算机学习/C/程序设计课知识总结/index.html","02f0090d2b2ea58b154884de43dc6376"],["/categories/大学计算机学习/index.html","0894783808ff61e6971c500bf5e46059"],["/categories/大学计算机学习/page/2/index.html","c2a1e20f4cca2751ad6e7852a240a970"],["/categories/大学计算机学习/汇编语言/index.html","885bf7f624a4e920b11aef2eeac64b07"],["/categories/杂项/index.html","b4c14c5fac9bc7600557cca118ee389b"],["/categories/画册/index.html","506af30ac75e41b8cc08c21496747658"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["/css/index.css","2dfa598ddb4dae0394c8a86d471f132f"],["/css/mogaicss.css","7f6f7df86fc6fb6725769453ddc23778"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/download/index.html","e13ef6c05d1a2c5cbd59f05af9028454"],["/essay/2020-ACM.html","b8751f105fe3347571e70ff91ffef58e"],["/essay/anime.html","6f25b7907bb735ee97af27dd58df5385"],["/essay/index.html","1d8aed01d3075ea7e113f1b7f19b7de6"],["/essay/life.html","4e3b4c85844377d813709e18943dbf9e"],["/essay/soccer robot.html","c42d961164ea7a4c6c717511a2899c14"],["/gallery/index.html","340a1ff8424e0d9ef95cf9ad40bdce0d"],["/graph/index.html","cb7fea9daacb6fe0ee865dff550a4394"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.png","86b599f6e370e46d78392d3b29263bab"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","7f2624703c9fc51756837579d099f355"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","3810415ef78a5c861f5661254b8a2fe9"],["/img/loading/1241151513.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/loading/1441607537270501.gif","446735ec930a82d1686e35f75cd3a324"],["/img/loading/1441607668646787.gif","1fe70ee34cfc19912bceb758c402be3a"],["/img/loading/2131312.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","617c2371df7ee18067ac1d1270eda9f7"],["/journal/index.html","075140a0aaa26ea10dfc933f3645aa68"],["/js/about.js","ce5ef375158ebbd3727fbf1124d295d1"],["/js/calendar.js","da76a4e1e9f0fe573eda087f678eaf4a"],["/js/iconfont.js","56bf1d4045b43101ab2ee2308f270089"],["/js/languages.js","f44cc882705a586231f80aee4c399460"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/mogaijs.js","ae132419fcd10c636016f2326754259e"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","bae7b1a577308a9ff73057d8c4ee8f32"],["/movies/index.html","27063ff27062b72ff31c4db9bbff46f7"],["/music/index.html","19f7bcd70190cc85909d3f73d87c40e9"],["/page/2/index.html","e2bdd66fd10fcaabe8022fe0a0f63213"],["/page/3/index.html","d588dcdd234d98017fbcf603f597cfb9"],["/page/4/index.html","bfa6e66e7676ce58ce9153361851ab46"],["/page/5/index.html","cdeee4d3f5ddbebd344a32dc09cd2556"],["/posts/1214523148/index.html","e21862974a44e6dd0af0f9fda13257b8"],["/posts/1214523148/tulun-1.png","78c82096e371ec25aedc80fe197f7ae9"],["/posts/1214523148/tulun-10.png","4f961b6ea605afb75bae1dcb15ba9b4f"],["/posts/1214523148/tulun-11.png","bbfa685311a05e0d768d27ccbb319c74"],["/posts/1214523148/tulun-12.png","524e76ad816b27f52f89bea60d0a7733"],["/posts/1214523148/tulun-2.png","319f0b11927a7d3d748cf76b3763bf2a"],["/posts/1214523148/tulun-3.png","f455c008b4ad55ba17bf0f445549f4ea"],["/posts/1214523148/tulun-4.png","f2ce2125a2cf6f2a761abf68079d1ff7"],["/posts/1214523148/tulun-5.png","fcf42dc219b3538037a18505cf9d56ab"],["/posts/1214523148/tulun-6.png","efbe64b24ac973351bf895bd2dcef7f1"],["/posts/1214523148/tulun-7.png","841c67f87f533e2ea375864f2983340e"],["/posts/1214523148/tulun-8.png","d93cd4f4eb04429e399ed0c2ca5097a5"],["/posts/1214523148/tulun-9.png","b787b47df3147b86641737e6c32bdac8"],["/posts/1243066710/index.html","b00264f7a7dea6746203d99a821e2a1e"],["/posts/1249631616/index.html","da861dc179c006fb242329eaf3f9b4d1"],["/posts/1249631616/tulian-1.png","8d881e97deafd99e6eb5fdf40132e880"],["/posts/1249631616/tulian-2.png","0924c48274dc1eb7062a97685c8f1217"],["/posts/1249631616/tulian-3.png","3011c2790a77721eb3807800d123bec3"],["/posts/1249631616/tulian-4.png","e57614e75ced0c958cd73debcd77e88e"],["/posts/1249631616/tulian-5.png","2b92936fac40ba177ad67459a686e391"],["/posts/1257195588/index.html","8c969c6a9016a79105af6f397f533994"],["/posts/1257890361/index.html","a6f610e7be6bcf7731c0a8703c564ecb"],["/posts/1257890361/search-1.png","20467262e9fe329254fa3a5d1b2297ae"],["/posts/1257890361/search-2.png","b3eb2bdcb1febaf6e14873dc027fb9ca"],["/posts/1257890361/search-3.png","bf8127a3f4990de0ae0a67cc5e2ac289"],["/posts/1257890361/search-4.png","7bc89812f79b120de7eb4a1e05c8c092"],["/posts/1257890361/search-5.png","564eda000633605d6bc11229ca879ffe"],["/posts/1257890361/search-6.png","3fd6cd730d59e3b0545a34a42708890f"],["/posts/1257890361/search-7.png","73283d5ac24e99a1564f16092ba291b7"],["/posts/1336151826/index.html","c7a685034c689338bf91ec91b393d3ee"],["/posts/1336151826/vj-kmp-1.jpg","08e27a602803755a250bbe0a796c877d"],["/posts/1450050819/index.html","fe6ac4dab8287fe8582da0e7f9c40cbe"],["/posts/1450050819/nowcoder-2020ccpc-xaiomi.jpg","c6e01e1111029d566d45d6293e285bab"],["/posts/1818717376/cdesign-2-1.png","81560ce524a9801e94b2c4194a640224"],["/posts/1818717376/cdesign-2-2.png","717a1958f7166fe57f0317653e0d6661"],["/posts/1818717376/cdesign-2-3.png","800a310f02d41a0717adb609b9b98b3f"],["/posts/1818717376/cdesign-2-4.png","dbbf8b1f1a0776ad1228dccaafa2ad48"],["/posts/1818717376/cdesign-2-5.png","edc77ddb0eceb7609c5e5b6185ff8cf8"],["/posts/1818717376/cdesign-2-6.png","6bc13b06cbb0321477776b18dee12c7a"],["/posts/1818717376/cdesign-2-7.png","1815b0e11f8abdc5c6f65bf78ed87fe7"],["/posts/1818717376/cdesign-2-8.png","6d68d141c224d8ed8677e95b36ba4143"],["/posts/1818717376/cdesign-2-9.png","d2f8ced6f5e73e6715dcdf0bd0681de5"],["/posts/1818717376/index.html","af0c44763febf36e63623dafc328ba47"],["/posts/1865235796/cdesign-4-1.png","60ae48782a1cd6bf56a0be31dbb58d89"],["/posts/1865235796/cdesign-4-2.png","10224661ddac86fb8466b78c019cc6ee"],["/posts/1865235796/cdesign-4-3.png","04b36ef7dd889204b2232332e5489d3b"],["/posts/1865235796/cdesign-4-4.png","218924c3342800ce9301cecd2d8d01fd"],["/posts/1865235796/index.html","1ae0a70d4c481d110a356cd36acd4963"],["/posts/1921523807/draw1.jpg","59d9202dccbce8117408e8d1234ed891"],["/posts/1921523807/draw10.jpg","e9446b1cdf27259052a1edb6f6ad2fd0"],["/posts/1921523807/draw11.jpg","e293052af0834c97a1268d1717cc2cad"],["/posts/1921523807/draw12.jpg","234af310d870e68a6bf81e39a8c91ae6"],["/posts/1921523807/draw13.jpg","5a386b48fa58bc465604b7628a371ae1"],["/posts/1921523807/draw14.jpg","78c8d3d9da60f0c781b747095319c212"],["/posts/1921523807/draw15.jpg","c479958ad4d9892f038b5e0d3230ecc3"],["/posts/1921523807/draw16.jpg","8b0b1c7623928801e5b24801f652ce0f"],["/posts/1921523807/draw17.jpg","0d48436e425363dba1076572ba10071a"],["/posts/1921523807/draw18.jpg","b7c3e4d1acdf007607494e649d57e504"],["/posts/1921523807/draw19.jpg","3dc4bfa14b5316ab19ed6563aefa044d"],["/posts/1921523807/draw2.jpg","e5d63c0aee207bc9dfa8ce54c974703e"],["/posts/1921523807/draw20.jpg","806dc5c57d412268f47d4e3929ffcbbd"],["/posts/1921523807/draw3.jpg","ffcaad62bee9391148004c744fead3c4"],["/posts/1921523807/draw4.jpg","d2b7a0e977bdd7e905a44750cd0d62ba"],["/posts/1921523807/draw5.jpg","6b771a4a7700a1ca9d2c8997f8b96c86"],["/posts/1921523807/draw6.jpg","a646189a6e7b4bf151a03d55a7a47916"],["/posts/1921523807/draw7.jpg","8401d5ca03df3ff5fc96db4e4259032b"],["/posts/1921523807/draw8.jpg","b95fb9b32d8ab7e79927eae7ec5be526"],["/posts/1921523807/draw9.jpg","cf7ea7c4e3cafe81cac30594169a6071"],["/posts/1921523807/index.html","e7a016555e732be54cfba89566b8d3c3"],["/posts/1992298316/index.html","7db43c44127d8626d097db7aae5b38e1"],["/posts/1992909055/index.html","fa8fe7922e9527cae0d3959b8c8b8ebd"],["/posts/1992909055/tree-1.png","aeccb1c198f404df02353d5b22b38ca0"],["/posts/1992909055/tree-2.png","f1336196a599ba50e11abc170c178019"],["/posts/1992909055/tree-3.png","bb2492d60cb1f06e1ab3cb87153b5045"],["/posts/1992909055/tree-4.png","b4caa7100d03396b3bacb4d3b81b6ee3"],["/posts/1992909055/tree-5.jpg","efea0a27582b5a54f55f2c9abda60905"],["/posts/1992909055/tree-6.jpg","97432406385dcb01d16edf4aa2410fe0"],["/posts/1992909055/tree-7.png","047d7287bb9ce707370a99d78b226597"],["/posts/1992909055/tree-8.png","46520d93a94bd9c5ea6d73386128da87"],["/posts/1999190247/index.html","9fdd91349d6aadc26503f89c5ea64161"],["/posts/2066641994/index.html","95cf0db735f62890815aceade02bd995"],["/posts/2066641994/name-1.jpg","a8764c3d19961ee0714cd0e11a71ea1a"],["/posts/2127665391/cdesign-5-1.png","8867fa7a5216179caf3af11634980cbf"],["/posts/2127665391/cdesign-5-10.png","17038c4788d19d4d25b78751631f1322"],["/posts/2127665391/cdesign-5-11.png","9e870f706c9bc71100e55d6c558881d3"],["/posts/2127665391/cdesign-5-12.png","e79d5ec3896043dbd9e63a9cd0ee8fa6"],["/posts/2127665391/cdesign-5-13.png","babd0841a7dbeae9b035c7453348596d"],["/posts/2127665391/cdesign-5-14.png","7a465c393449693e36c5763da7a682a9"],["/posts/2127665391/cdesign-5-15.png","25e30c2931ae653754cf0b77c531223f"],["/posts/2127665391/cdesign-5-16.png","d561aee03fe87e98ba483e3ef8d3d2e2"],["/posts/2127665391/cdesign-5-17.png","339f83d7bd8f4134bed3e74ed13aacea"],["/posts/2127665391/cdesign-5-18.png","44a984cd6e0ff0da52c0273a9fea562c"],["/posts/2127665391/cdesign-5-19.png","c724fe651c182a233d135da983f21ea7"],["/posts/2127665391/cdesign-5-2.png","6d0466f2a4e13aa923b8a53883bd7bd1"],["/posts/2127665391/cdesign-5-20.png","8c77ec1d385f3ce939668bb9362719b6"],["/posts/2127665391/cdesign-5-21.png","babf1247c32383b812db34c0837ac50d"],["/posts/2127665391/cdesign-5-22.png","13df8181641dfd62b4468f52e8a1fdea"],["/posts/2127665391/cdesign-5-3.png","704e7edb91eec4d7ba0bccd3e148370f"],["/posts/2127665391/cdesign-5-4.png","728f43b2c4ee4be97002aa7112cb3201"],["/posts/2127665391/cdesign-5-5.png","6bbef608ebbd42ca5040a010a8437723"],["/posts/2127665391/cdesign-5-6.png","580825508da47c56459bbd4d15db9537"],["/posts/2127665391/cdesign-5-7.png","9cd8faa53c070ef194fb332c715109c8"],["/posts/2127665391/cdesign-5-8.png","661609d66e413804fc093ce15134fad1"],["/posts/2127665391/cdesign-5-9.png","71f23e8e4b6bfe3090a61810ab45140a"],["/posts/2127665391/index.html","a9b1cd5f3fb09e1ad7cf71e4cb6c1367"],["/posts/2141260407/index.html","afbe73a9a871997fe94e3174f66792d9"],["/posts/2291390787/index.html","ec206f6e974677a99202287bed62a413"],["/posts/2291390787/segtree-1.png","b142d62fbfbb954ff7436434371c72f1"],["/posts/2291390787/segtree-10.png","a465a577eddc60b1760520ba71e56a6c"],["/posts/2291390787/segtree-11.png","bf38a314c059fcb819f2136f5fcd4cbc"],["/posts/2291390787/segtree-12.png","740fa31a931102e8a244d41edd3f7643"],["/posts/2291390787/segtree-13.png","558e378077c9bd27779e5c05a0275b77"],["/posts/2291390787/segtree-2.png","a0df94a931826567d36d0af48adfff58"],["/posts/2291390787/segtree-3.png","4c44afec5f3293e07c45186ccaed7b2e"],["/posts/2291390787/segtree-4.png","26741ee5ead3469f30a1ab326d1abdd3"],["/posts/2291390787/segtree-5.png","3d4b70eb37b981523a14327046160cf7"],["/posts/2291390787/segtree-6.png","1f6c622f2e99c45de6e2a271360a5303"],["/posts/2291390787/segtree-7.png","31ce5c689d39dbd662c6f4c30b6f248e"],["/posts/2291390787/segtree-8.png","b534d5c3e54b3175750cf15eebf594ed"],["/posts/2291390787/segtree-9.png","31e9e42d474c7ab421cf7ca8bcffdacf"],["/posts/2310033160/index.html","25bdd97ab113cfab52c0830fa3871c74"],["/posts/2310033160/liu-1.png","84eedf73ec9ffffacf2d17413a5dca43"],["/posts/2310033160/liu-2.png","aa8fa1bea1080d98bfb25e9eec4fe66f"],["/posts/2310033160/liu-3.png","a0bd2c1758963a5a0a7b90f249181e6c"],["/posts/2310033160/liu-4.png","47163d1be3974386e3b4216466612740"],["/posts/2310033160/liu-5.png","e260a321b728eba2957218364e815b1a"],["/posts/2310033160/liu-6.png","91dc3ad73d836e0da4c826b7dac0d472"],["/posts/2310033160/liu-7.png","2637f7ced11c9bf9cbb4da5ab2725277"],["/posts/2310033160/liu-8.png","0cdc4fffe4c326b8add6a0cd30e9a7f4"],["/posts/2310033160/liu-9.png","f23740c20d440cd58fbf856c9d1d75d7"],["/posts/2456212399/index.html","277bd8ae66629fb10fefd4e84bdbedd8"],["/posts/2473961166/index.html","1d8268af8f0b885044d984ce367f8d69"],["/posts/2473961166/sort-1.png","caa5942b4255b2fccbfaa3bdf23811b1"],["/posts/2473961166/sort-12.png","519970e854c90f9b901947963316dd64"],["/posts/2473961166/sort-13.png","839422a30a824720938d3e4a35f2f5d1"],["/posts/2473961166/sort-2.png","acf7bbd2a6bc65325f6af1d7a19a3d02"],["/posts/2473961166/sort-3.png","36d5d5d696abbf5562b95a67ee122633"],["/posts/2473961166/sort-4.png","1c4291f66d3badeecf8da5db0fa7f258"],["/posts/2473961166/sort-5.png","9dd09eee984f8c7cc06470fe6bc9cbc3"],["/posts/2597018803/MST-1.png","b8b54d0bd5b97a3420bd2f422c02aee7"],["/posts/2597018803/MST-2.png","5293dfc10763c9a5a57e81a0554ed7e2"],["/posts/2597018803/MST-3.png","dde612cf563d6c2cdb7883e26f411866"],["/posts/2597018803/MST-4.png","1be43900dcefe5f88b31f6bcd3833c1c"],["/posts/2597018803/MST-5.png","023bda2a1252707dd7c9d0f0a4f2b193"],["/posts/2597018803/MST-6.png","028be5cd72431593ab376424be36dfa9"],["/posts/2597018803/index.html","91ffa066c9796efcf667a9cfdecff534"],["/posts/2695935933/chafen-1.jpg","8d22027fbd7078efafb020270ecc5a47"],["/posts/2695935933/chafen-2.jpg","16f85518993b900d6a22407515f23e0e"],["/posts/2695935933/chafen-3.png","024830ec4be935a29f73ddc37e94ae42"],["/posts/2695935933/chafen-4.jpg","3c1b329f57eee73ff4a8a17d0f662ded"],["/posts/2695935933/chafen-5.jpg","88fb26f8730c52b371e9a954bf8edecb"],["/posts/2695935933/chafen-6.png","0055a359bdbd2acb3ac0ec2a8a0b1237"],["/posts/2695935933/chafen-7.jpg","109db05082f92beac6ac955b49eb9e8b"],["/posts/2695935933/chafen-8.jpg","ce11cea25fbcc7f6b8f5c3436755ed8b"],["/posts/2695935933/chafen-9.png","9aefd6d4f78264c467e73e6a554e40ab"],["/posts/2695935933/index.html","3893bafb0d5b3c26d9a36f7f55d56891"],["/posts/2852476022/bsearch-1.png","8b603c58b46aaabdddbe3b38c868fbb5"],["/posts/2852476022/index.html","2898812fddc5c365330448b71bec76c6"],["/posts/2867974581/index.html","bd0d7c1915323423dffe04aa180504e5"],["/posts/3256266088/cdesign-1-1.png","501e6b86cb118824175ab1494e7bd186"],["/posts/3256266088/cdesign-1-2.png","b4bfa05923fdbadde1d5d0f9804b04fa"],["/posts/3256266088/index.html","9f87f3136a3d64294e564d780d0fb322"],["/posts/335160020/HTML-1.png","b56d5527d8b5f7b008343a20ba1f6acb"],["/posts/335160020/HTML-2.png","a2c3649240a7f939fb516071f57fe58a"],["/posts/335160020/index.html","37f09c0ebd9d6e0d74fafaefb44ad27f"],["/posts/3355618782/index.html","ff138bed399e560d556027aeea09d1c4"],["/posts/3355618782/vj-2020ccpc-1.jpg","b1d66b85a0c2aa43e65548b1e637168c"],["/posts/3355618782/vj-2020ccpc-2.png","f92c910df83db002366c1f28843088a0"],["/posts/3381327147/index.html","8bd749e53cb5708310186ac88b2b892d"],["/posts/3381327147/math-1.png","00051be557ae68b9fad3c4b046e9eae8"],["/posts/3381327147/math-10.png","2e55951390518f0ff610e016aa94c922"],["/posts/3381327147/math-11.png","f46d03129fcb1fc2c887e7fb4d8c0f2e"],["/posts/3381327147/math-12.png","9172dd239a683397e07afb6f45946653"],["/posts/3381327147/math-2.png","6b706109f3c91366688cdacc87a62849"],["/posts/3381327147/math-3.png","c62d978f69de49a3b1e7a5cfb1500249"],["/posts/3381327147/math-4.png","834108004c4a656eb061e0b72e11ae23"],["/posts/3381327147/math-5.png","60fe8631d1296772f0f5ee0c0b201209"],["/posts/3381327147/math-6.png","b3783b2f2fe407226e3fc6e68a5000c8"],["/posts/3381327147/math-7.png","5dcd6b27477f8b81cf7f910977818eb5"],["/posts/3381327147/math-8.png","24bba6dfaeeb47c72ebf973805acb5e0"],["/posts/3381327147/math-9.png","a0137bb65fb69a34f7c5a37d90e9e87d"],["/posts/3448406853/index.html","b991a3a16c75b1e8a22c508592d14825"],["/posts/3629818838/2020-cugbsuanfa-1.png","b34d36253c42a533625fa4def14410d4"],["/posts/3629818838/2020-cugbsuanfa-10.png","1afbaa25f548d3216d54e886cbea30ab"],["/posts/3629818838/2020-cugbsuanfa-11.png","f5f4a4c959b39558b2a4f980036e061b"],["/posts/3629818838/2020-cugbsuanfa-12.png","5946e59eb78e46fe281a4e0b278dedb2"],["/posts/3629818838/2020-cugbsuanfa-13.png","4da5e8bf655a5c4bd815b31a8ba7009c"],["/posts/3629818838/2020-cugbsuanfa-2.png","1f97915f7b263661a416d9b0a8f521f5"],["/posts/3629818838/2020-cugbsuanfa-3.png","917348ae35501ac3bebd9d49e3f6be6e"],["/posts/3629818838/2020-cugbsuanfa-4.png","9dba2ef3716298a2d9bc294897506d95"],["/posts/3629818838/2020-cugbsuanfa-5.png","6e4cfcf274ce7739bb27abccc61915e2"],["/posts/3629818838/2020-cugbsuanfa-6.png","52c7af0ed3a7fa88517aed1456886dce"],["/posts/3629818838/2020-cugbsuanfa-7.png","cd3121e395131eb1182b1dbd28529cf0"],["/posts/3629818838/2020-cugbsuanfa-8.png","11d758b43ca4b729e38d0fdad4ac5d66"],["/posts/3629818838/2020-cugbsuanfa-9.png","5606068414ad875f534c79edc1353346"],["/posts/3629818838/index.html","93675e6fffb5c53afa2284d5db55555c"],["/posts/3712360875/index.html","0f2c23b6adbc75824c7c3daa7b33bf0d"],["/posts/3800942126/CSS3-1.png","2a5dcc8e7c54ae5488c270490f854856"],["/posts/3800942126/index.html","8ad52e111d7f1e6be20615608f810e63"],["/posts/3935974569/cpp-1.png","990c06af314b887f89f5eb9046f7c483"],["/posts/3935974569/cpp-10.png","b6d8b07a225e6e1014352e5d2b93fe1b"],["/posts/3935974569/cpp-11.png","c3205217aeed4b6e06bdfed5c330ed24"],["/posts/3935974569/cpp-12.png","eedf6198825a434ff77b0bd9b02c0708"],["/posts/3935974569/cpp-13.png","5933be01578597ca5529d109aa8740f4"],["/posts/3935974569/cpp-14.png","767fca62cb1ff8034458858c65f115c2"],["/posts/3935974569/cpp-15.png","7a7f8fd09ada01ba1da5087015b3bac5"],["/posts/3935974569/cpp-16.png","8f832e326c2805e2d6d3b0db5deee76c"],["/posts/3935974569/cpp-17.png","bd97edea2efb72f161a281c7154c58a6"],["/posts/3935974569/cpp-18.png","1167b8550bc903225f80909be4980885"],["/posts/3935974569/cpp-19.png","994a3f9f95169dd216b774501e0b9449"],["/posts/3935974569/cpp-2.png","4c191370542757c137bdba6ff1d878c0"],["/posts/3935974569/cpp-3.png","ad503eea61fcb2e353f22103db7deec0"],["/posts/3935974569/cpp-4.png","d2ba905938b604f46e7085428a5f609e"],["/posts/3935974569/cpp-5.png","8a1b9b8b52e9645f5ab63ce0158d474e"],["/posts/3935974569/cpp-6.png","8d199bbb185d705855bd9fd4d7d00ec6"],["/posts/3935974569/cpp-7.png","aa62d481ac9803cc28945b004e5c5c46"],["/posts/3935974569/cpp-8.png","90bab268d09c2ec32c6a50fb8a5f89c8"],["/posts/3935974569/cpp-9.png","596cb268b789ae88ea205549cf5a3735"],["/posts/3935974569/index.html","86e6cd0130589dff3d1737d315b7b903"],["/posts/3951849340/index.html","18269baca7fd8f747a4abd23d8ece2d7"],["/posts/4080893375/bing-1.png","0fd3a3dd2702e8871cbfba0cf8e9d2b4"],["/posts/4080893375/bing-2.png","b83f7591fc096381c79b847d1bcedb20"],["/posts/4080893375/bing-3.png","ca4c426c6618e3e83773ae93d8b7b4b9"],["/posts/4080893375/index.html","7025d3d6957ba869c6f9a974e7dabf48"],["/posts/4080893375/treezu-1.png","58bcebc5ba72a05800b6154c50a5e52e"],["/posts/4080893375/treezu-2.png","c438b01dc5aeacc1ee4edd0191f0db74"],["/posts/4080893375/treezu-3.png","ce8c0d3eefe44db37e7a4677e5db8db9"],["/posts/4080893375/treezu-4.png","30ed7d10c36cc66c0021a627285e64e0"],["/posts/4080893375/treezu-5.png","0dc8273771616b12b53d179e1b64c6c7"],["/posts/4080893375/treezu-6.png","9be6090c5132244dd9737f764da10916"],["/posts/4197694647/cdesign-3-1.png","c27e61021a554ad5471ced4288677401"],["/posts/4197694647/cdesign-3-10.png","b97b4239ddbe5028a14a904877e8d366"],["/posts/4197694647/cdesign-3-11.png","29ceb7ec88ca1bae0217b1360ba810b2"],["/posts/4197694647/cdesign-3-12.png","376bb65799b9bd951576fcccde950b5b"],["/posts/4197694647/cdesign-3-13.png","4799533054c945cecf8f8f5448ecc902"],["/posts/4197694647/cdesign-3-14.png","917b952966db1c8e2c00f874db3e04cb"],["/posts/4197694647/cdesign-3-15.png","f8e3405463e5f89a0390ff5aa80d09ca"],["/posts/4197694647/cdesign-3-2.png","4bf5614d30fb52eb291fede030826475"],["/posts/4197694647/cdesign-3-3.png","13ab1365a583a8ff418752c6448fac27"],["/posts/4197694647/cdesign-3-4.png","96bcd2cc85c9f55f3f218a7c4ee293c8"],["/posts/4197694647/cdesign-3-5.png","c6c62fa8a03dd6dbfc59fa549f524899"],["/posts/4197694647/cdesign-3-6.png","fa97c5142d72c420c79ce4249395628c"],["/posts/4197694647/cdesign-3-7.png","e1a122f2f975852fe57f8775668c30b2"],["/posts/4197694647/cdesign-3-8.png","e1b819644f11d8037b6ece00537edc22"],["/posts/4197694647/cdesign-3-9.png","de709662ed50e5c8c8de0a2f94b46123"],["/posts/4197694647/index.html","7909cc160ca48589e94741430a2b14da"],["/posts/4226656532/ZXS-1.png","314530aa33730f98f2cacaafa7217a7e"],["/posts/4226656532/ZXS-2.png","ba84f642ead4ca93e7a24171a8b01dde"],["/posts/4226656532/ZXS-3.png","53ee3429b2a152dad3469fde2fab8288"],["/posts/4226656532/ZXS-4.png","75102389416aa8081a48bf6cbc4c8ef1"],["/posts/4226656532/ZXS-5.png","4d5fcb7a77c76c5da877668233b39ae5"],["/posts/4226656532/ZXS-6.png","38c9172199d90198ef97f6ce72eed177"],["/posts/4226656532/index.html","f608531277a69233028e42e5d73e99a4"],["/posts/491064300/index.html","6a39af6dcd89ec5c5112712bdb445ad8"],["/posts/623518402/index.html","f139e6011a2438f0d4dd92777812fe6a"],["/posts/623518402/kmp-1.png","395658c3aae9d76a3722e27371cee9be"],["/posts/623518402/kmp-2.png","013754d99b45c0aa9e3cd9c7aaf77ccc"],["/posts/623518402/kmp-3.png","1139a8f0205921b9aea5ff0316d408b9"],["/posts/623518402/kmp-4.png","9881070ae982caf57fcf9163e4bf19ca"],["/posts/623518402/kmp-5.png","f1ea5f69848ce4ab27398746fa6e13c6"],["/posts/623518402/kmp-6.png","79817eda446c9e31a7ab5bad32e660c2"],["/posts/623518402/kmp-7.png","e89712b94930a0114e48892f4e4ab1ab"],["/posts/623518402/kmp-8.png","bb737cdfed455239e7035d6b44f056a7"],["/posts/623518402/trie-1.png","ef73ea65f63fbbd9aa10645e334d2c22"],["/posts/623518402/trie-2.png","701d451f5cceedfd8212c84a8a8a221e"],["/posts/635767573/huibian-1.png","ed702de963e1fd2a9835d3c344f9439a"],["/posts/635767573/huibian-10.png","2ec7ce9bb7059a045159098dfe2f04c5"],["/posts/635767573/huibian-11.jpg","eb3023fb5ca8e90f6fe4c85dc523d8a1"],["/posts/635767573/huibian-12.png","c1ab31c22cec23beace9de2ea6142f14"],["/posts/635767573/huibian-2.png","35e35b8411b93eb1beed24d37a828d20"],["/posts/635767573/huibian-3.png","86ababbe8fe7fb07a4e1e43af82b7ac0"],["/posts/635767573/huibian-4.png","38d7f5b8059c6eda194a3fa39b13453a"],["/posts/635767573/huibian-5.png","059b435f8d9bffd1619baa9f9c4acc60"],["/posts/635767573/huibian-6.jpg","43fe164c48c55abff048686f1db14294"],["/posts/635767573/huibian-7.png","c26818a1e3165034c874f04813daf7b2"],["/posts/635767573/huibian-8.jpg","475be76e6410747452b92aaa4f3e7363"],["/posts/635767573/huibian-9.jpg","ce4272f7af1aa41fae51eb0a7d63788b"],["/posts/635767573/index.html","7d4186b1392052392fe8921c63ff4f1b"],["/posts/790315035/index.html","42ec4cb5e07a02388f710393cef8aca0"],["/posts/917121829/index.html","d48580609a38367936018634ef14decb"],["/posts/917121829/vj-search-1.png","a962c6447d8c8cbd54d3c8164075fdee"],["/posts/917121829/vj-search-2.jpg","cbce117ce3369b8a5ec776c015e45004"],["/sw-register.js","b9b7bcfba072eeef0f20cdefd4e47899"],["/tags/80x86/index.html","2ac6711173863091587826113d7a5ac4"],["/tags/AC自动机/index.html","25db26d1d89a3ba78105049e659cc49d"],["/tags/BFS/index.html","a3d1f40a0957cb2fca6612df89a42dda"],["/tags/C/index.html","e2f72bb7db1ce9cb0034d3ba81affed3"],["/tags/C/page/2/index.html","6ef0d824b50c576abb0580cac63b089d"],["/tags/C/page/3/index.html","feb44321247f4d3e0010d23fd1d48bd6"],["/tags/C/page/4/index.html","299802790deac81a011d6a4358c1d055"],["/tags/CSS3/index.html","ad63966309db402bd62ca0456bbaae60"],["/tags/DFS/index.html","a758ebd3fb7ed8e63764f97b0cf461fc"],["/tags/DFS序/index.html","9bc8485881d818c8eb7b85fa69ef5989"],["/tags/HTML/index.html","ad726f6493b4bb72105ecea86c32f1ff"],["/tags/KMP/index.html","0a59d0b2049ea29c0233dd8325da964f"],["/tags/LCA/index.html","bfe231b6ced5595e64b8d8e79d9577e6"],["/tags/ST/index.html","88bb02c85179c87306f6cea9a8e7ef49"],["/tags/STL模板库/index.html","ba78eaf02bff66cd4e8b872c54073de9"],["/tags/Web前端/index.html","7c91d29fea74f9cb071c4ebdd60089fb"],["/tags/index.html","4d32a0006d2ab71895eef57853e5d6ff"],["/tags/三分/index.html","9e114b333cec09333585cf2650a8640f"],["/tags/二分/index.html","cdf827d09b047267625efa525806fa67"],["/tags/二叉树/index.html","d9023a082073a36e887bdf73c6302db1"],["/tags/伸展树/index.html","cabd187b802dbf908941a148f1488660"],["/tags/分块/index.html","c6ac5f0f45db0666811919ccaa1205c2"],["/tags/可持久化线段树/index.html","fd4e6c0a9c33bc4f50d7e1cd9e3fc27f"],["/tags/图论/index.html","fc0109beb52fad391bc871faf4b233ba"],["/tags/基础算法/index.html","b843f193f411a74152abc811f8e1c116"],["/tags/字典树/index.html","81266726f602268ea1a64bc0cd387054"],["/tags/差分/index.html","b6172ea7af0cf2f27dcb699645209074"],["/tags/并查集/index.html","f83f153ed42c93636ebc8b109e2bdaf0"],["/tags/拓展KMP/index.html","c0dfc475faa208acbc835cc31504865a"],["/tags/排序/index.html","f9f63149e98fc9f66a9e12d828550b54"],["/tags/数论/index.html","7e3ea2b03194958b94c792e5c52c06b3"],["/tags/最小生成树/index.html","5996122e6cae51a742707153617a9c81"],["/tags/最短路/index.html","d242704fdc83a77b896f4f5780cde5c9"],["/tags/权值线段树/index.html","a5cd4a8ec7105f096bf901ef32bb366b"],["/tags/查找/index.html","f5a50c1c96bbd3da0e5b183b4b16f51b"],["/tags/树状数组/index.html","8756ca737e5a92bb572a84ff04ccc45e"],["/tags/树的重心和直径/index.html","2cf91fec553e499dcefe6bf0610cfacb"],["/tags/树链剖分/index.html","8a16cb7fd3b64609c2b52410efcada22"],["/tags/模板泛型编程/index.html","7034c5f574f54e31ccb67a3417874f6f"],["/tags/欧拉序/index.html","d8da0b391362cb181f634f7f079a2c5c"],["/tags/汇编语言/index.html","f81c2bac6d15a0dfc566d84338f4721c"],["/tags/离散化/index.html","9d884d0d5ac1950a980ea3db30a4cc93"],["/tags/程序设计/index.html","078c7f46c075ed7fa0502eb84832e9cf"],["/tags/算法与数据结构/index.html","4e495e5618d37b4fdd398ffc0f506a13"],["/tags/算法与数据结构/page/2/index.html","1e4c68f2eb272e619369edc8242be758"],["/tags/算法与数据结构/page/3/index.html","e5ab5f37ec9fa0e622a43396da965b7f"],["/tags/类和对象/index.html","e52f6151ae9ee524f5e0ecee7a5b1ac6"],["/tags/线段树/index.html","674f21dd362f349acb8a1f479016575a"],["/tags/组合数与排列数/index.html","9c5c226f67da599231909383442d9935"],["/tags/继承与多态/index.html","2a3371ce53c610b4f2c431758504d7d0"],["/tags/网络流/index.html","274cc7e187786a759c3eeea3d2f4f944"],["/tags/运算符重载/index.html","bbdee45be73f89802f589c3635abc303"],["/tags/连通性/index.html","d371367ed62029c8e1405746e0dd7b0c"],["/tags/逆序对/index.html","34a44599a8dba0ef94532992950fac77"]];
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
