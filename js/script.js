jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    // $(".js-drawer-open").toggleClass("open");
    $("#MenuButton").toggleClass("open");
    // $(".drawer-menu").toggleClass("open");
    // $("html").toggleClass("is-fixed");
  });
});
