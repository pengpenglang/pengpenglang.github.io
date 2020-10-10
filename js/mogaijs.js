//创建对象
var xiaokang = new xkTool();
//随机背景
// 添加图片，背景图片会在这里随机选取一个设置为banner
xiaokang.bannerList = [
    //"https://gitee.com/pengpenglang/blogimg/raw/master/img/60.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/74.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/76.jpg",
    //"https://gitee.com/pengpenglang/blogimg/raw/master/img/77.jpg",
    //"https://gitee.com/pengpenglang/blogimg/raw/master/img/78.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/86.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/87.jpg",
    "https://gitee.com/pengpenglang/blogimg/raw/master/img/97.png"
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

$(document).ready(function(e){
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> pengpenglang');
})

//轮播图
(function () {
  function Slider(option) {
    this.wrap = option.wrap;
    this.imgList = option.imgList;
    this.imgNum = this.imgList.length;
    this.width = option.width || $(this.wrap).width();
    this.height = option.height || $(this.wrap).height();
    this.isAuto = option.isAuto || true;
    this.moveTime = option.moveTime;
    this.direction = option.direction || "right";
    this.btnWidth = option.btnWidth;
    this.btnHeight = option.btnHeight;
    this.spanWidth = option.spanWidth;
    this.spanHeight = option.spanHeight;
    this.spanColor = option.spanColor;
    this.activeSpanColor = option.activeSpanColor;
    this.btnBackgroundColor = option.btnBackgroundColor;
    this.spanRadius = option.spanRadius;
    this.spanMargin = option.spanMargin;
    this.flag = false;
    this.nowIndex = 0;
    this.createDom();
    this.initStyle();
    this.bindEvent();
    if (this.isAuto === true) {
      this.autoMove();
    }
  }

  Slider.prototype.createDom = function () {
    var oUl = $('<ul class="imgList"></ul>');
    var Spot = $('<div class="spot"></div>');
    this.imgList.forEach(function (item) {
      var oLi =
        '<li><a  href=" ' +
        item.a +
        'target="_blank" "><img src=" ' +
        item.img +
        ' "></a></li>';
      oUl.append(oLi);
      var span = "<span></span>";
      Spot.append(span);
    });
    var leftBtn = $(
      '<div class="left-btn"><i class="fas fa-angle-left"></i></div>'
    );
    var rightBtn = $(
      '<div class="right-btn"><i class="fas fa-angle-right"></i></div>'
    );
    this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
  };
  Slider.prototype.initStyle = function () {
    $("*", this.wrap).css({ margin: 0, padding: 0, listStyle: "none" });
    $(this.wrap).css({ overflow: "hidden", position: "relative" });
    $(".imgList", this.wrap).css({
      width: this.width,
      height: this.height,
      position: "relative",
    });
    $(".imgList li", this.wrap)
      .css({
        width: this.width,
        height: this.height,
        position: "absolute",
        left: 0,
        top: 0,
        display: "none",
      })
      .eq(this.nowIndex)
      .css({ display: "block" });
    $(".imgList li a, .imgList li a img", this.wrap).css({
      display: "inline-block",
      width: this.width,
      height: this.height,
    });
    $(".left-btn, .right-btn", this.wrap).css({
      width: this.btnWidth,
      height: this.btnHeight,
      backgroundColor: this.btnBackgroundColor,
      color: "#fff",
      textAlign: "center",
      lineHeight: this.btnHeight + "px",
      position: "absolute",
      top: "50%",
      marginTop: -this.btnHeight / 2,
      cursor: "pointer",
    });
    $(".right-btn", this.wrap).css({ right: 0 });
    $(".spot", this.wrap).css({
      height: this.spanHeight + this.spanMargin * 2,
      position: "absolute",
      left: "50%",
      marginLeft: (-this.imgNum * (this.spanWidth + this.spanMargin * 2)) / 2,
      bottom: 10,
    });
    $(".spot span", this.wrap)
      .css({
        display: "inline-block",
        width: this.spanWidth,
        height: this.spanHeight,
        margin: this.spanMargin,
        backgroundColor: this.spanColor,
        borderRadius: this.spanRadius,
        cursor: "pointer",
      })
      .eq(this.nowIndex)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.bindEvent = function () {
    var self = this;
    $(".left-btn", this.wrap).click(function () {
      self.move("prev");
    });
    $(".right-btn", this.wrap).click(function () {
      self.move("next");
    });
    $(".spot span").click(function (e) {
      self.move($(this).index());
    });
    $(this.wrap).mouseenter(function () {
      clearInterval(self.time);
    });
  };
  Slider.prototype.move = function (dir) {
    if (this.flag) {
      return false;
    }
    this.flag = true;
    switch (dir) {
      case "prev":
        if (this.nowIndex === 0) {
          this.nowIndex = this.imgNum - 1;
        } else {
          this.nowIndex--;
        }
        break;
      case "next":
        if (this.nowIndex === this.imgNum - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
        break;
      default:
        this.nowIndex = dir;
        break;
    }
    var self = this;
    $(".imgList li", this.wrap)
      .fadeOut()
      .eq(this.nowIndex)
      .fadeIn(function () {
        self.flag = false;
      });
    $(".spot  span", this.wrap)
      .css({ backgroundColor: this.spanColor })
      .eq(this.nowIndex % this.imgNum)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.autoMove = function () {
    var self = this;
    this.time = setInterval(function () {
      if (this.direction == "left") {
        $(".left-btn", this.wrap).trigger("click");
      } else {
        $(".right-btn", this.wrap).trigger("click");
      }
    }, self.moveTime);
  };
  $.fn.extend({
    slider: function (option) {
      option.wrap = this;
      new Slider(option);
    },
  });
})();