//热销榜
$(function() {
  let $bestSellers = $('.ebooks-bestseller > dl > dd');
  console.log($bestSellers);
  $bestSellers.mouseenter(function() {
    $(this)
      .addClass('current')
      .siblings('dd')
      .removeClass('current');
  });
});
