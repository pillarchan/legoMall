//返回顶部
$(function() {
  let scrollTop = {
    appendToBody: function(opts) {
      let defaults = {
        position: 'fixed',
        top: '35.6%',
        right: '3%',
        width: 30 + 'px',
        height: 50 + 'px',
        backgroundImage: ' url("../images/gototop_05.jpg")',
        cursor: 'pointer',
        display: 'none'
      };
      let params = $.extend({}, defaults, opts);
      $(`<div id="scroll-top" class="scroll-top"></div>`)
        .appendTo($('body'))
        .css(params);
    },
    scrollToTop: function() {
      let $scrollTop = $('.scroll-top');
      let $topDistance = 0;
      $(window).on('scroll', function() {
        $topDistance = $('html,body').scrollTop();
        if ($topDistance >= 300) {
          $scrollTop.fadeIn();
        } else {
          $scrollTop.fadeOut();
        }
      });
      $scrollTop.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 150);
      });
    }
  };
  //把该对象添加到window中去便于调用
  window.scrollTop = scrollTop;
});
