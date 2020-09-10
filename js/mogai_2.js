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
//欺诈标题
//xiaokang.cheatTitle("网页3秒后即将关闭。。","骗你的啦");
//魔幻圆圈
xiaokang.magicCirle("8","0.05","random","0.5");
//页脚养鱼
//xiaokang.footFish();

//社交板块svg图标引用
$(".card-info-social-icons").append(
    '<a class="social-icon" href="https://github.com/pengpenglang" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-githubcolor"></use></svg></a>',
    '<a class="social-icon" href="https://gitee.com/pengpenglang" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-gitee"></use></svg></a>',
    '<a class="social-icon" href="https://gitee.com/pengpenglang/blogimg/raw/master/img/qq.jpg" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-qq"></use></svg></a>',
    '<a class="social-icon" href="https://gitee.com/pengpenglang/blogimg/raw/master/img/wechat.png" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>',
    '<a class="social-icon" href="https://gitee.com/pengpenglang/blogimg/raw/master/img/wangyi.jpg" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wangyiyunyinleclick"></use></svg></a>',
    '<a class="social-icon" href="mailto:2300546456@qq.com" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xin"></use></svg></a>',
    '<a class="social-icon" href="/atom.xml" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-rss"></use></svg></a>'
);
