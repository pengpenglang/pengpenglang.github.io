/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bb7d41c37631a9a7fc4dfe79ca6ab499"],["/about/index.html","f18c62c6df80680d8034d19025a48eb4"],["/aboutme/index.html","ad9dc99f8bba843e3cf807859e48354c"],["/archives/2020/07/index.html","6292594b5d8177830ad6299c0cd96f12"],["/archives/2020/07/page/2/index.html","652e79411638e7c5ddc8a01cd9781f9f"],["/archives/2020/08/index.html","355ab4c9db9839aa5c09d4825be6c10a"],["/archives/2020/09/index.html","a50b23b160df543978366576631cfa1f"],["/archives/2020/10/index.html","8b12a958a238ebba2f5cc73a69a4c1fa"],["/archives/2020/index.html","53d633a5a55e04842fc490eabca9f685"],["/archives/2020/page/2/index.html","9bbc4964d68232e683f4143a36c98af2"],["/archives/2020/page/3/index.html","a6c2b7c1d11648461b8d9fd7d27b11a1"],["/archives/2020/page/4/index.html","a1c64ea5a1f8ad4e21ca8b06e01b736f"],["/archives/index.html","40e824f532dc7ca9b8dd1e56c8448cb9"],["/archives/page/2/index.html","4f3a071ae2cbfac47c1779903b9380dd"],["/archives/page/3/index.html","c64db32f398bdf4b030b89a4ae723341"],["/archives/page/4/index.html","c3221e266a39781aee98d9712222bbe9"],["/artitalk/index.html","b6c15ee6cdb0cb4669973936f89c80b3"],["/bangumis/index.html","559aea4886d4e9aabaaa983869004cee"],["/categories/ACM学习/index.html","ee4d651b3194f7e1b94681efb3641847"],["/categories/ACM学习/page/2/index.html","6bd04108faf0a91745e0ead9b64f0937"],["/categories/ACM学习/动态规划/index.html","cbb650f03a82a115570a779bcb4fd60f"],["/categories/ACM学习/图论/index.html","efc15f9abd90f07b4a528056c7d515d9"],["/categories/ACM学习/基础算法/index.html","164bcdb26cf087acefe5c9c3e0d45af1"],["/categories/ACM学习/字符串/index.html","159d2c9a07a3e9328d53a63f500c43ef"],["/categories/ACM学习/数学基础/index.html","effb84443e285689e5df2334fa4f02f0"],["/categories/ACM学习/数据结构/index.html","45aa2aaa2dd9fe2376c967cbd2eda6eb"],["/categories/ACM学习/网络流/index.html","b491a5eddfc2f571496516a5bffe9e05"],["/categories/OJ题库/Vjudge/index.html","55439911262b4e1958800935237935b2"],["/categories/OJ题库/index.html","d9857546365df1e5b84833bd441be498"],["/categories/Web学习/CSS3/index.html","0f8502459941d70309befec17d58af11"],["/categories/Web学习/HTML/index.html","40f11276b6b67d6d84c72eb7a4e5dd2b"],["/categories/Web学习/index.html","4de17d9b95999c107bed2136212fa0de"],["/categories/index.html","eff64dba994e6e05fef7078d88aedddd"],["/categories/大学计算机学习/C/index.html","841cc49640805ff0ecec63e78dffd7f9"],["/categories/大学计算机学习/C/程序设计课知识总结/index.html","f3256ada0984d2040bbdc0da744da528"],["/categories/大学计算机学习/index.html","2b51a3d5cd16a3ae57e69c3b556f936d"],["/categories/大学计算机学习/程序设计课知识总结/index.html","8fd183b1f00d3bab41e50c6447446a82"],["/categories/杂项/index.html","b0193c9477b7850f12c20ffb091b3aaf"],["/categories/画册/index.html","9fcfedc735339c1ca92b053eaa1115e2"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/custom.css","4047f7bf45e5d0b702870762a1faabd4"],["/css/index.css","2dfa598ddb4dae0394c8a86d471f132f"],["/css/mogaicss.css","9d3d7396dad5861933828f76fb87abe1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/download/index.html","4056df71089977c8fb3f2ccdac956816"],["/essay/2020-ACM.html","6bd3d17516886b92307855930eb281f3"],["/essay/anime.html","a6d955a73808b81db5d053ea184443d2"],["/essay/index.html","59442861699a716633916624eadd8a87"],["/essay/life.html","7d0feac3e9b709b03b0268afdf1f6954"],["/essay/soccer robot.html","c1612617b95df11cb63b5b40fab364c3"],["/gallery/index.html","2f77d8c692133bdbc56fea12bd4f7c5c"],["/graph/index.html","d891fbedc754f0d351155d0efeec7b11"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.png","86b599f6e370e46d78392d3b29263bab"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","7f2624703c9fc51756837579d099f355"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","3810415ef78a5c861f5661254b8a2fe9"],["/img/loading/1241151513.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/loading/1441607537270501.gif","446735ec930a82d1686e35f75cd3a324"],["/img/loading/1441607668646787.gif","1fe70ee34cfc19912bceb758c402be3a"],["/img/loading/2131312.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f84a5bb50edc407dfa3ccfa4ab7b8384"],["/journal/index.html","f329d52b443d6c3e0ddf946e4efddc24"],["/js/about.js","ce5ef375158ebbd3727fbf1124d295d1"],["/js/calendar.js","da76a4e1e9f0fe573eda087f678eaf4a"],["/js/iconfont.js","56bf1d4045b43101ab2ee2308f270089"],["/js/languages.js","f44cc882705a586231f80aee4c399460"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/mogaijs.js","5447697e1b8ccd0687da687f2156ca5c"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","0f0dbc1168faaeae4e490c1012417225"],["/movies/index.html","c0657fc7b29830c5e115a64e9e10bd30"],["/music/index.html","90d267e17b6e38063562da02d0317068"],["/page/2/index.html","4003e1b742af4614fd63ca34f882f607"],["/page/3/index.html","3485abc1a3dac77a03f0eba9a5d8e77b"],["/page/4/index.html","dbc775fb65b0b5459fdd44c56d0122d6"],["/posts/1214523148/index.html","59ae09aae6b181de8e4466e1159495aa"],["/posts/1214523148/tulun-1.png","78c82096e371ec25aedc80fe197f7ae9"],["/posts/1214523148/tulun-10.png","4f961b6ea605afb75bae1dcb15ba9b4f"],["/posts/1214523148/tulun-11.png","bbfa685311a05e0d768d27ccbb319c74"],["/posts/1214523148/tulun-12.png","524e76ad816b27f52f89bea60d0a7733"],["/posts/1214523148/tulun-2.png","319f0b11927a7d3d748cf76b3763bf2a"],["/posts/1214523148/tulun-3.png","f455c008b4ad55ba17bf0f445549f4ea"],["/posts/1214523148/tulun-4.png","f2ce2125a2cf6f2a761abf68079d1ff7"],["/posts/1214523148/tulun-5.png","fcf42dc219b3538037a18505cf9d56ab"],["/posts/1214523148/tulun-6.png","efbe64b24ac973351bf895bd2dcef7f1"],["/posts/1214523148/tulun-7.png","841c67f87f533e2ea375864f2983340e"],["/posts/1214523148/tulun-8.png","d93cd4f4eb04429e399ed0c2ca5097a5"],["/posts/1214523148/tulun-9.png","b787b47df3147b86641737e6c32bdac8"],["/posts/1243066710/index.html","326b19f82b1b4edbfe962eb63b43bb35"],["/posts/1249631616/index.html","79a65574f5d82cdbe878d54ff5574cf3"],["/posts/1249631616/tulian-1.png","8d881e97deafd99e6eb5fdf40132e880"],["/posts/1249631616/tulian-2.png","0924c48274dc1eb7062a97685c8f1217"],["/posts/1249631616/tulian-3.png","3011c2790a77721eb3807800d123bec3"],["/posts/1249631616/tulian-4.png","e57614e75ced0c958cd73debcd77e88e"],["/posts/1249631616/tulian-5.png","2b92936fac40ba177ad67459a686e391"],["/posts/1257890361/index.html","45833cfe91eb20f548ad727d0bea13c7"],["/posts/1257890361/search-1.png","20467262e9fe329254fa3a5d1b2297ae"],["/posts/1257890361/search-2.png","b3eb2bdcb1febaf6e14873dc027fb9ca"],["/posts/1257890361/search-3.png","bf8127a3f4990de0ae0a67cc5e2ac289"],["/posts/1257890361/search-4.png","7bc89812f79b120de7eb4a1e05c8c092"],["/posts/1257890361/search-5.png","564eda000633605d6bc11229ca879ffe"],["/posts/1257890361/search-6.png","3fd6cd730d59e3b0545a34a42708890f"],["/posts/1257890361/search-7.png","73283d5ac24e99a1564f16092ba291b7"],["/posts/1336151826/index.html","c32fe2377e5c140b0ab01d6f8685ab32"],["/posts/1336151826/vj-kmp-1.jpg","08e27a602803755a250bbe0a796c877d"],["/posts/1818717376/cdesign-2-1.png","81560ce524a9801e94b2c4194a640224"],["/posts/1818717376/cdesign-2-2.png","717a1958f7166fe57f0317653e0d6661"],["/posts/1818717376/cdesign-2-3.png","800a310f02d41a0717adb609b9b98b3f"],["/posts/1818717376/cdesign-2-4.png","dbbf8b1f1a0776ad1228dccaafa2ad48"],["/posts/1818717376/cdesign-2-5.png","edc77ddb0eceb7609c5e5b6185ff8cf8"],["/posts/1818717376/cdesign-2-6.png","6bc13b06cbb0321477776b18dee12c7a"],["/posts/1818717376/cdesign-2-7.png","1815b0e11f8abdc5c6f65bf78ed87fe7"],["/posts/1818717376/cdesign-2-8.png","6d68d141c224d8ed8677e95b36ba4143"],["/posts/1818717376/cdesign-2-9.png","d2f8ced6f5e73e6715dcdf0bd0681de5"],["/posts/1818717376/index.html","23b3ae0b44c4521e59fafebae22119c6"],["/posts/1865235796/cdesign-4-1.png","60ae48782a1cd6bf56a0be31dbb58d89"],["/posts/1865235796/cdesign-4-2.png","10224661ddac86fb8466b78c019cc6ee"],["/posts/1865235796/cdesign-4-3.png","04b36ef7dd889204b2232332e5489d3b"],["/posts/1865235796/cdesign-4-4.png","218924c3342800ce9301cecd2d8d01fd"],["/posts/1865235796/index.html","71fca31d1761243493c63055ed8f3030"],["/posts/1921523807/draw1.jpg","59d9202dccbce8117408e8d1234ed891"],["/posts/1921523807/draw10.jpg","e9446b1cdf27259052a1edb6f6ad2fd0"],["/posts/1921523807/draw11.jpg","e293052af0834c97a1268d1717cc2cad"],["/posts/1921523807/draw12.jpg","234af310d870e68a6bf81e39a8c91ae6"],["/posts/1921523807/draw13.jpg","5a386b48fa58bc465604b7628a371ae1"],["/posts/1921523807/draw14.jpg","78c8d3d9da60f0c781b747095319c212"],["/posts/1921523807/draw15.jpg","c479958ad4d9892f038b5e0d3230ecc3"],["/posts/1921523807/draw16.jpg","8b0b1c7623928801e5b24801f652ce0f"],["/posts/1921523807/draw17.jpg","0d48436e425363dba1076572ba10071a"],["/posts/1921523807/draw18.jpg","b7c3e4d1acdf007607494e649d57e504"],["/posts/1921523807/draw19.jpg","3dc4bfa14b5316ab19ed6563aefa044d"],["/posts/1921523807/draw2.jpg","e5d63c0aee207bc9dfa8ce54c974703e"],["/posts/1921523807/draw20.jpg","806dc5c57d412268f47d4e3929ffcbbd"],["/posts/1921523807/draw3.jpg","ffcaad62bee9391148004c744fead3c4"],["/posts/1921523807/draw4.jpg","d2b7a0e977bdd7e905a44750cd0d62ba"],["/posts/1921523807/draw5.jpg","6b771a4a7700a1ca9d2c8997f8b96c86"],["/posts/1921523807/draw6.jpg","a646189a6e7b4bf151a03d55a7a47916"],["/posts/1921523807/draw7.jpg","8401d5ca03df3ff5fc96db4e4259032b"],["/posts/1921523807/draw8.jpg","b95fb9b32d8ab7e79927eae7ec5be526"],["/posts/1921523807/draw9.jpg","cf7ea7c4e3cafe81cac30594169a6071"],["/posts/1921523807/index.html","32cd1bc3172a05f75f6ab2c1df478603"],["/posts/1992298316/index.html","2917b349fea0a2fde5313628c868c884"],["/posts/1992909055/index.html","62197f1018a15bad687d46da5362148c"],["/posts/1992909055/tree-1.png","aeccb1c198f404df02353d5b22b38ca0"],["/posts/1992909055/tree-2.png","f1336196a599ba50e11abc170c178019"],["/posts/1992909055/tree-3.png","bb2492d60cb1f06e1ab3cb87153b5045"],["/posts/1992909055/tree-4.png","b4caa7100d03396b3bacb4d3b81b6ee3"],["/posts/1992909055/tree-5.jpg","efea0a27582b5a54f55f2c9abda60905"],["/posts/1992909055/tree-6.jpg","97432406385dcb01d16edf4aa2410fe0"],["/posts/1992909055/tree-7.png","047d7287bb9ce707370a99d78b226597"],["/posts/1992909055/tree-8.png","46520d93a94bd9c5ea6d73386128da87"],["/posts/1999190247/index.html","ff9936d6d3f48a49979a48638e0c2258"],["/posts/2066641994/index.html","500aef07b5ff77b9ebeb91afd792947c"],["/posts/2066641994/name-1.jpg","a8764c3d19961ee0714cd0e11a71ea1a"],["/posts/2127665391/cdesign-5-1.png","8867fa7a5216179caf3af11634980cbf"],["/posts/2127665391/cdesign-5-10.png","17038c4788d19d4d25b78751631f1322"],["/posts/2127665391/cdesign-5-11.png","9e870f706c9bc71100e55d6c558881d3"],["/posts/2127665391/cdesign-5-12.png","e79d5ec3896043dbd9e63a9cd0ee8fa6"],["/posts/2127665391/cdesign-5-13.png","babd0841a7dbeae9b035c7453348596d"],["/posts/2127665391/cdesign-5-14.png","7a465c393449693e36c5763da7a682a9"],["/posts/2127665391/cdesign-5-2.png","6d0466f2a4e13aa923b8a53883bd7bd1"],["/posts/2127665391/cdesign-5-3.png","704e7edb91eec4d7ba0bccd3e148370f"],["/posts/2127665391/cdesign-5-4.png","728f43b2c4ee4be97002aa7112cb3201"],["/posts/2127665391/cdesign-5-5.png","6bbef608ebbd42ca5040a010a8437723"],["/posts/2127665391/cdesign-5-6.png","580825508da47c56459bbd4d15db9537"],["/posts/2127665391/cdesign-5-7.png","9cd8faa53c070ef194fb332c715109c8"],["/posts/2127665391/cdesign-5-8.png","661609d66e413804fc093ce15134fad1"],["/posts/2127665391/cdesign-5-9.png","71f23e8e4b6bfe3090a61810ab45140a"],["/posts/2127665391/index.html","2a0b075a05ae87965b44201b74fe31ea"],["/posts/2141260407/index.html","5ccced5e4a03df162e1bf56e7224f421"],["/posts/2291390787/index.html","c396b81c586aed9522670fefd9f75f41"],["/posts/2291390787/segtree-1.png","b142d62fbfbb954ff7436434371c72f1"],["/posts/2291390787/segtree-10.png","a465a577eddc60b1760520ba71e56a6c"],["/posts/2291390787/segtree-11.png","bf38a314c059fcb819f2136f5fcd4cbc"],["/posts/2291390787/segtree-12.png","740fa31a931102e8a244d41edd3f7643"],["/posts/2291390787/segtree-13.png","558e378077c9bd27779e5c05a0275b77"],["/posts/2291390787/segtree-2.png","a0df94a931826567d36d0af48adfff58"],["/posts/2291390787/segtree-3.png","4c44afec5f3293e07c45186ccaed7b2e"],["/posts/2291390787/segtree-4.png","26741ee5ead3469f30a1ab326d1abdd3"],["/posts/2291390787/segtree-5.png","3d4b70eb37b981523a14327046160cf7"],["/posts/2291390787/segtree-6.png","1f6c622f2e99c45de6e2a271360a5303"],["/posts/2291390787/segtree-7.png","31ce5c689d39dbd662c6f4c30b6f248e"],["/posts/2291390787/segtree-8.png","b534d5c3e54b3175750cf15eebf594ed"],["/posts/2291390787/segtree-9.png","31e9e42d474c7ab421cf7ca8bcffdacf"],["/posts/2310033160/index.html","0a2d56680b405516995509e6825dd9d7"],["/posts/2310033160/liu-1.png","84eedf73ec9ffffacf2d17413a5dca43"],["/posts/2310033160/liu-2.png","aa8fa1bea1080d98bfb25e9eec4fe66f"],["/posts/2310033160/liu-3.png","a0bd2c1758963a5a0a7b90f249181e6c"],["/posts/2310033160/liu-4.png","47163d1be3974386e3b4216466612740"],["/posts/2310033160/liu-5.png","e260a321b728eba2957218364e815b1a"],["/posts/2310033160/liu-6.png","91dc3ad73d836e0da4c826b7dac0d472"],["/posts/2310033160/liu-7.png","2637f7ced11c9bf9cbb4da5ab2725277"],["/posts/2310033160/liu-8.png","0cdc4fffe4c326b8add6a0cd30e9a7f4"],["/posts/2310033160/liu-9.png","f23740c20d440cd58fbf856c9d1d75d7"],["/posts/2456212399/index.html","5c626839ace211a929e289e0ffc7698a"],["/posts/2473961166/index.html","6cb8f875116c2effc476d8efe8189cf6"],["/posts/2473961166/sort-1.png","caa5942b4255b2fccbfaa3bdf23811b1"],["/posts/2473961166/sort-12.png","519970e854c90f9b901947963316dd64"],["/posts/2473961166/sort-13.png","839422a30a824720938d3e4a35f2f5d1"],["/posts/2473961166/sort-2.png","acf7bbd2a6bc65325f6af1d7a19a3d02"],["/posts/2473961166/sort-3.png","36d5d5d696abbf5562b95a67ee122633"],["/posts/2473961166/sort-4.png","1c4291f66d3badeecf8da5db0fa7f258"],["/posts/2473961166/sort-5.png","9dd09eee984f8c7cc06470fe6bc9cbc3"],["/posts/2597018803/MST-1.png","b8b54d0bd5b97a3420bd2f422c02aee7"],["/posts/2597018803/MST-2.png","5293dfc10763c9a5a57e81a0554ed7e2"],["/posts/2597018803/MST-3.png","dde612cf563d6c2cdb7883e26f411866"],["/posts/2597018803/MST-4.png","1be43900dcefe5f88b31f6bcd3833c1c"],["/posts/2597018803/MST-5.png","023bda2a1252707dd7c9d0f0a4f2b193"],["/posts/2597018803/MST-6.png","028be5cd72431593ab376424be36dfa9"],["/posts/2597018803/index.html","da96a158ce96c60fcff8a26495cdd3e9"],["/posts/2852476022/bsearch-1.png","8b603c58b46aaabdddbe3b38c868fbb5"],["/posts/2852476022/index.html","9a7a232317f929827489a7e1c6524da8"],["/posts/2867974581/index.html","70b3ab04d0d368d333873cb9080266fe"],["/posts/3256266088/cdesign-1-1.png","501e6b86cb118824175ab1494e7bd186"],["/posts/3256266088/cdesign-1-2.png","b4bfa05923fdbadde1d5d0f9804b04fa"],["/posts/3256266088/index.html","d7c64ec12aec4ad7d7a493b4b3f79dbc"],["/posts/335160020/HTML-1.png","b56d5527d8b5f7b008343a20ba1f6acb"],["/posts/335160020/HTML-2.png","a2c3649240a7f939fb516071f57fe58a"],["/posts/335160020/index.html","c8c4f60bd4703dff2c3e079f0f61f93c"],["/posts/3355618782/index.html","99bf1967f6c7609e923cb361c712d6ae"],["/posts/3355618782/vj-2020ccpc-1.jpg","b1d66b85a0c2aa43e65548b1e637168c"],["/posts/3355618782/vj-2020ccpc-2.png","f92c910df83db002366c1f28843088a0"],["/posts/3381327147/index.html","e94762e0a283a81516cf24b742ce9ec2"],["/posts/3381327147/math-1.png","00051be557ae68b9fad3c4b046e9eae8"],["/posts/3381327147/math-10.png","2e55951390518f0ff610e016aa94c922"],["/posts/3381327147/math-11.png","f46d03129fcb1fc2c887e7fb4d8c0f2e"],["/posts/3381327147/math-12.png","9172dd239a683397e07afb6f45946653"],["/posts/3381327147/math-2.png","6b706109f3c91366688cdacc87a62849"],["/posts/3381327147/math-3.png","c62d978f69de49a3b1e7a5cfb1500249"],["/posts/3381327147/math-4.png","834108004c4a656eb061e0b72e11ae23"],["/posts/3381327147/math-5.png","60fe8631d1296772f0f5ee0c0b201209"],["/posts/3381327147/math-6.png","b3783b2f2fe407226e3fc6e68a5000c8"],["/posts/3381327147/math-7.png","5dcd6b27477f8b81cf7f910977818eb5"],["/posts/3381327147/math-8.png","24bba6dfaeeb47c72ebf973805acb5e0"],["/posts/3381327147/math-9.png","a0137bb65fb69a34f7c5a37d90e9e87d"],["/posts/3448406853/index.html","54e0a013906352b29923bbc4fd87aea4"],["/posts/3800942126/CSS3-1.png","2a5dcc8e7c54ae5488c270490f854856"],["/posts/3800942126/index.html","d172ff4590b65c2de3786c367be1d921"],["/posts/3935974569/cpp-1.png","990c06af314b887f89f5eb9046f7c483"],["/posts/3935974569/cpp-10.png","b6d8b07a225e6e1014352e5d2b93fe1b"],["/posts/3935974569/cpp-11.png","c3205217aeed4b6e06bdfed5c330ed24"],["/posts/3935974569/cpp-12.png","eedf6198825a434ff77b0bd9b02c0708"],["/posts/3935974569/cpp-13.png","5933be01578597ca5529d109aa8740f4"],["/posts/3935974569/cpp-14.png","767fca62cb1ff8034458858c65f115c2"],["/posts/3935974569/cpp-15.png","7a7f8fd09ada01ba1da5087015b3bac5"],["/posts/3935974569/cpp-16.png","8f832e326c2805e2d6d3b0db5deee76c"],["/posts/3935974569/cpp-17.png","bd97edea2efb72f161a281c7154c58a6"],["/posts/3935974569/cpp-18.png","1167b8550bc903225f80909be4980885"],["/posts/3935974569/cpp-19.png","994a3f9f95169dd216b774501e0b9449"],["/posts/3935974569/cpp-2.png","4c191370542757c137bdba6ff1d878c0"],["/posts/3935974569/cpp-3.png","ad503eea61fcb2e353f22103db7deec0"],["/posts/3935974569/cpp-4.png","d2ba905938b604f46e7085428a5f609e"],["/posts/3935974569/cpp-5.png","8a1b9b8b52e9645f5ab63ce0158d474e"],["/posts/3935974569/cpp-6.png","8d199bbb185d705855bd9fd4d7d00ec6"],["/posts/3935974569/cpp-7.png","aa62d481ac9803cc28945b004e5c5c46"],["/posts/3935974569/cpp-8.png","90bab268d09c2ec32c6a50fb8a5f89c8"],["/posts/3935974569/cpp-9.png","596cb268b789ae88ea205549cf5a3735"],["/posts/3935974569/index.html","a60c147cbf04a65f6faa3fd00dce85c4"],["/posts/3951849340/index.html","65976c3cf386acd1b1f5065c3d39865a"],["/posts/4080893375/bing-1.png","0fd3a3dd2702e8871cbfba0cf8e9d2b4"],["/posts/4080893375/bing-2.png","b83f7591fc096381c79b847d1bcedb20"],["/posts/4080893375/bing-3.png","ca4c426c6618e3e83773ae93d8b7b4b9"],["/posts/4080893375/index.html","95089198ac709231c72f93770989b081"],["/posts/4080893375/treezu-1.png","58bcebc5ba72a05800b6154c50a5e52e"],["/posts/4080893375/treezu-2.png","c438b01dc5aeacc1ee4edd0191f0db74"],["/posts/4080893375/treezu-3.png","ce8c0d3eefe44db37e7a4677e5db8db9"],["/posts/4080893375/treezu-4.png","30ed7d10c36cc66c0021a627285e64e0"],["/posts/4080893375/treezu-5.png","0dc8273771616b12b53d179e1b64c6c7"],["/posts/4080893375/treezu-6.png","9be6090c5132244dd9737f764da10916"],["/posts/4197694647/cdesign-3-1.png","c27e61021a554ad5471ced4288677401"],["/posts/4197694647/cdesign-3-10.png","b97b4239ddbe5028a14a904877e8d366"],["/posts/4197694647/cdesign-3-11.png","29ceb7ec88ca1bae0217b1360ba810b2"],["/posts/4197694647/cdesign-3-12.png","376bb65799b9bd951576fcccde950b5b"],["/posts/4197694647/cdesign-3-13.png","4799533054c945cecf8f8f5448ecc902"],["/posts/4197694647/cdesign-3-14.png","917b952966db1c8e2c00f874db3e04cb"],["/posts/4197694647/cdesign-3-15.png","f8e3405463e5f89a0390ff5aa80d09ca"],["/posts/4197694647/cdesign-3-2.png","4bf5614d30fb52eb291fede030826475"],["/posts/4197694647/cdesign-3-3.png","13ab1365a583a8ff418752c6448fac27"],["/posts/4197694647/cdesign-3-4.png","96bcd2cc85c9f55f3f218a7c4ee293c8"],["/posts/4197694647/cdesign-3-5.png","c6c62fa8a03dd6dbfc59fa549f524899"],["/posts/4197694647/cdesign-3-6.png","fa97c5142d72c420c79ce4249395628c"],["/posts/4197694647/cdesign-3-7.png","e1a122f2f975852fe57f8775668c30b2"],["/posts/4197694647/cdesign-3-8.png","e1b819644f11d8037b6ece00537edc22"],["/posts/4197694647/cdesign-3-9.png","de709662ed50e5c8c8de0a2f94b46123"],["/posts/4197694647/index.html","4cffd295e8ac7b729922000a3cdf9d70"],["/posts/4226656532/ZXS-1.png","314530aa33730f98f2cacaafa7217a7e"],["/posts/4226656532/ZXS-2.png","ba84f642ead4ca93e7a24171a8b01dde"],["/posts/4226656532/ZXS-3.png","53ee3429b2a152dad3469fde2fab8288"],["/posts/4226656532/ZXS-4.png","75102389416aa8081a48bf6cbc4c8ef1"],["/posts/4226656532/ZXS-5.png","4d5fcb7a77c76c5da877668233b39ae5"],["/posts/4226656532/ZXS-6.png","38c9172199d90198ef97f6ce72eed177"],["/posts/4226656532/index.html","8bd12f8a0e47ce2e534f5e1b3aaec7c2"],["/posts/623518402/index.html","6f3b32f998e9219fe6505968372173dd"],["/posts/623518402/kmp-1.png","395658c3aae9d76a3722e27371cee9be"],["/posts/623518402/kmp-2.png","013754d99b45c0aa9e3cd9c7aaf77ccc"],["/posts/623518402/kmp-3.png","1139a8f0205921b9aea5ff0316d408b9"],["/posts/623518402/kmp-4.png","9881070ae982caf57fcf9163e4bf19ca"],["/posts/623518402/kmp-5.png","f1ea5f69848ce4ab27398746fa6e13c6"],["/posts/623518402/kmp-6.png","79817eda446c9e31a7ab5bad32e660c2"],["/posts/623518402/kmp-7.png","e89712b94930a0114e48892f4e4ab1ab"],["/posts/623518402/kmp-8.png","bb737cdfed455239e7035d6b44f056a7"],["/posts/623518402/trie-1.png","ef73ea65f63fbbd9aa10645e334d2c22"],["/posts/623518402/trie-2.png","701d451f5cceedfd8212c84a8a8a221e"],["/posts/790315035/index.html","9cbbef299cf1364d6d2f2c1cddc48035"],["/posts/917121829/index.html","77fc7ddda9d638af98327f65b4b5aaa6"],["/posts/917121829/vj-search-1.png","a962c6447d8c8cbd54d3c8164075fdee"],["/posts/917121829/vj-search-2.jpg","cbce117ce3369b8a5ec776c015e45004"],["/sw-register.js","9e28a7cd907bfccd533089caec162d60"],["/tags/AC自动机/index.html","f3e212cbda1049e7be114be3dd444ed2"],["/tags/BFS/index.html","128521023a6f3b21ce92f46edc93e4c4"],["/tags/C/index.html","9dfa28d5dbb18bbb6357ce6b02970ccf"],["/tags/C/page/2/index.html","5745743fdd86403848691b4aa13ead5f"],["/tags/C/page/3/index.html","9275ae41db26a37ab9a3b9de17d459af"],["/tags/CSS3/index.html","2fc06bf3d2e40687f83718232772b7ae"],["/tags/DFS/index.html","fa93d0650757b568c0b79b6e505d7799"],["/tags/DFS序/index.html","5f3fbd444a0bbc5068dd7ff05e9767af"],["/tags/HTML/index.html","5810b6f855ccb28c74ad452260ca4dbb"],["/tags/KMP/index.html","02c0c4a08eeeea2033000a8e093a6f7e"],["/tags/LCA/index.html","2027d93aa57974c44b6c8a47bb5f443c"],["/tags/ST/index.html","20f7a65bdd1dd96825ed8f02f24774ec"],["/tags/STL模板库/index.html","646f7e8c231e0093c89fcd07d71e05f4"],["/tags/Web前端/index.html","049ff37705dd892b05874ccf2bf47e94"],["/tags/index.html","9bfef326d949a9a2c750c0e2357d6e6b"],["/tags/三分/index.html","6ea59351578a4dab77ec84b481cab061"],["/tags/二分/index.html","ef4da44348264191cfe3068ad22f62ff"],["/tags/二叉树/index.html","ac275084477478c801dc4fb68db2e158"],["/tags/伸展树/index.html","162f18e1fffb8569ddbbcca3053c4adf"],["/tags/分块/index.html","d3626afdf86a0f2d82b59e49bfa602db"],["/tags/可持久化线段树/index.html","8398c0f0f08caeca2a04c960912f70c8"],["/tags/图论/index.html","a6471ad40cba9c8039f72a0ae5a5a71b"],["/tags/字典树/index.html","5b8f1f7def33967bf50395307a83f2e6"],["/tags/并查集/index.html","401a8bf31fbdee8b4e698818faa96b77"],["/tags/拓展KMP/index.html","87ba4a51aa466bdbd03397c51cee4f69"],["/tags/排序/index.html","44043fd334c18e49849f4654482b0934"],["/tags/数论/index.html","95abb5e4eb70098a52422cb326d5dfdf"],["/tags/最小生成树/index.html","98afa610c450d6bcc097b5c6260894ba"],["/tags/最短路/index.html","96e8fb9c84d2f6dca54228b1fefff32b"],["/tags/权值线段树/index.html","6750d6bcc9832dfa6207b462ba26f3ff"],["/tags/查找/index.html","02c4a76a34d12da05c9329ee03919fcb"],["/tags/树状数组/index.html","2e3c7bdd50a0a41a7842c59e87747e5c"],["/tags/树的重心和直径/index.html","8ca3b5396b26f61af69d18646e6c5e80"],["/tags/树链剖分/index.html","17d61d8d20021d9a3c063ef87e670e4f"],["/tags/欧拉序/index.html","d5139459f78db46f19d21ed2d9c02500"],["/tags/离散化/index.html","4e49ed78ece772fc38a22cba4e499c34"],["/tags/程序设计/index.html","0dadbd0bf41bbae37cf990c8997dbf19"],["/tags/算法与数据结构/index.html","19a83b09abb73774ba8a305b8d0d81f5"],["/tags/算法与数据结构/page/2/index.html","78e59ade5eeb3a99fcc3809417a9b8d9"],["/tags/算法与数据结构/page/3/index.html","eed17bb43ac2d48e9f2474bf709bece2"],["/tags/类和对象/index.html","64b4f82a5c7ed62e0f9b53a1d8ac55b2"],["/tags/线段树/index.html","9bf29440aeb51a2db17fb70cc457d1d6"],["/tags/继承与多态/index.html","b5cc45acf69fe38e7d140864a382ee22"],["/tags/网络流/index.html","de0e3c49dfb6614fc444f82c6df6940d"],["/tags/运算符重载/index.html","a714cdf5a96cd939b5d5800362363ca4"],["/tags/连通性/index.html","5a22c1eda7587ecbc92c5176c0e5f4c4"],["/tags/逆序对/index.html","df7647482cd4ba26b9f047e6ae4bb16d"]];
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
