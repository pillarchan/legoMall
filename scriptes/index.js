//主轮播图
jQuery(function() {
  $('#banner').tyslide({
    boxh: 430, //盒子的高度
    w: 1000, //盒子的宽度
    h: 400, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20, //控制按钮宽度
    controlsH: 20, //控制按钮高度
    radius: 10, //控制按钮圆角度数
    controlsColor: '#d7d7d7', //普通控制按钮的颜色
    controlsCurrentColor: '#ff6600', //当前控制按钮的颜色
    isShowNum: true //是否显示数字
  });
  //版块轮播图
  $('.area-advertise').tyslide({
    boxh: 216, //盒子的高度
    w: 330, //盒子的宽度
    h: 216, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 1, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14, //控制按钮宽度
    controlsH: 2, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: '#fff', //普通控制按钮的颜色
    controlsCurrentColor: '#7f7f7f', //当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });
  //版块轮播图
  $('.product-advertise').tyslide({
    boxh: 338, //盒子的高度
    w: 424, //盒子的宽度
    h: 338, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 1, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14, //控制按钮宽度
    controlsH: 2, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: '#fff', //普通控制按钮的颜色
    controlsCurrentColor: '#7f7f7f', //当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });
  //版块选项卡
  let $tabs = $('.tabs>li');
  let $items = $('.ebooks-left-container-right');
  $tabs.mouseenter(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    let $index = $(this).index();
    $items
      .eq($index)
      .show()
      .siblings('ul')
      .hide();
  });
  //热销榜
  let $bestSellers = $('.ebooks-bestseller > dl > dd');
  $bestSellers.mouseenter(function() {
    $(this)
      .addClass('current')
      .siblings('dd')
      .removeClass('current');
  });
  //推广商品版块移动
  let $proSelector = $('#promotion .area-title > ul > li');
  let $proShowItem = $('#promotion .cargoes-item');
  let $proShowItems = $('#promotion .cargoes-item>li');
  let $proSingleWidth = $proShowItems.width();
  let $proItemsWidth = $proSingleWidth * $proShowItems['length'];
  $proShowItem.css({ width: $proItemsWidth + 'px' });
  $proSelector.on('mouseenter', function() {
    $proSelector.removeClass('active');
    $(this).addClass('active');
    let $index = $(this).index();
    $proShowItem.animate({ left: $proSingleWidth * -$index }, 1000);
  });
  // 调用返回顶部对象
  scrollTop.appendToBody();
  scrollTop.scrollToTop();
});
