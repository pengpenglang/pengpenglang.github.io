//创建对象
var xiaokang = new xkTool();
//随机背景
// 添加图片，背景图片会在这里随机选取一个设置为banner
xiaokang.bannerList = [
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/60.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/74.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/76.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/77.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/78.jpg"
];
//页面背景
xiaokang.bgPage();
xiaokang.randomBanner(false); // true为使用滤镜，不写或者false为不使用滤镜
//Mac代码框绿色按钮放大
xiaokang.codeFull();
//点击目录输出锚点
xiaokang.consoleAnchor();
//欺诈标题
//xiaokang.cheatTitle("网页3秒后即将关闭。。","骗你的啦");
//魔幻圆圈
xiaokang.magicCirle("8","0.05","random","0.5");
//页脚养鱼
xiaokang.footFish();