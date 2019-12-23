//主轮播图
jQuery(function() {
  $('#product-book').tyslide({
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
  $('.supply-area').tyslide({
    boxh: 530, //盒子的高度
    w: 1200, //盒子的宽度
    h: 500, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14, //控制按钮宽度
    controlsH: 14, //控制按钮高度
    radius: 7, //控制按钮圆角度数
    controlsColor: '#d7d7d7', //普通控制按钮的颜色
    controlsCurrentColor: '#ff6600', //当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });
  /**
   * 选项卡与轮播
   */
  let $supplyTabs = $('.supply .product-list-title .tabs>li');
  $supplyTabs.on('mouseenter', function() {
    let $index = $(this).index();
    $(this)
      .addClass('active')
      .siblings('li')
      .removeClass('active');
    let $tabsItems = $('.supply .supply-content .supply-area');
    $tabsItems
      .eq($index)
      .addClass('current')
      .siblings('.supply-area')
      .removeClass('current');
  });
  /**
   *猜你喜欢换一批
   */
  let $guessInner = $('.guess-favorite .guess-content .guess-inner-container');
  let $guessListItems = $('.guess-favorite .guess-content .guess-inner-container .favorite-list');
  let $itemsHeight = $guessListItems.height();
  let $itemsLen = $guessListItems.length;
  let $num = 0;
  $guessInner.css({ height: $itemsHeight * $itemsLen + 'px' });
  $('.guess-favorite .product-list-title > .change').on('click', function() {
    if ($num >= $itemsLen) {
      $num = 0;
    }
    console.log($num, $itemsHeight * -$num);
    $guessInner.animate({ top: $itemsHeight * -$num }, 200);
    $num++;
  });
});
