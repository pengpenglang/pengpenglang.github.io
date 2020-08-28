var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}

//创建对象
var xiaokang = new xkTool();
//手机默认栏不打开
xiaokang.mobileSidebar();
//Mac代码框绿色按钮放大
xiaokang.codeFull();
//点击目录输出锚点
xiaokang.consoleAnchor();
//页脚养鱼
xiaokang.footFish();