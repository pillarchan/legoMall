$(function() {
  let $kind = $('.kind>p:gt(0)');
  $kind.on('click', function() {
    $(this)
      .addClass('active')
      .siblings('p')
      .removeClass('active');
  });
  let $num = $('.add-cart .get-num .num');
  $num.on('blur', function() {
    let num = $(this).val();
    num = num <= 1 ? 1 : num;
    $(this).val(num);
  });
  $('.add-cart .get-num .add').on('click', function() {
    let num = $num.val();
    num++;
    $num.val(num);
  });
  $('.add-cart .get-num .reduce').on('click', function() {
    let num = $num.val();
    if (num <= 1) {
      $(this).css({ cursor: 'not-allowed' });
      num = 1;
    } else {
      $(this).css({ cursor: 'pointer' });
      num--;
    }
    $num.val(num);
  });

  // 调用插件函数
  magnifier({
    magnifier: '#magnifier1', //最外层的大容器
    width: 340, //承载容器宽
    height: 370, //承载容器高
    moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
    zoom: 3 //缩放比例
  });
});
