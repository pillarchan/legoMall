$(function() {
  let $allSelect = $('.all-select');
  $allSelect.on('change', function() {
    let selectStatus = $(this).prop('checked'); //选取状态一定是为当前对象的选取状态,所以要用this
    $('.shop-cart input[type=checkbox]').prop('checked', selectStatus);
    total();
  });
  let $singleSelects = $('.single-select');
  $singleSelects.on('change', function() {
    let flag = true;
    $singleSelects.each(function(index, dom) {
      let checkStatus = dom.checked;
      if (!checkStatus) {
        flag = false;
      }
      $allSelect.prop('checked', flag);
    });
    total();
  });
  //点击加
  $('.add').on('click', function() {
    let num = $(this)
      .next()
      .val();
    num++;
    $(this)
      .next()
      .val(num);
    subtotal($(this), num);
  });
  let $reduce = $('.reduce');
  $reduce.on('mouseenter', function() {
    let num = $(this)
      .prev()
      .val();
    if (num <= 1) {
      $(this).css({ cursor: 'not-allowed', disabled: true });
    } else {
      $(this).css({ cursor: 'pointer', disabled: false });
    }
  });
  //点击减
  $reduce.on('click', function() {
    let num = $(this)
      .prev()
      .val();
    if (num <= 1) {
      $(this).css({ cursor: 'not-allowed', disabled: true });
      num = 1;
    } else {
      $(this).css({ cursor: 'pointer', disabled: false });
      num--;
    }
    $(this)
      .prev()
      .val(num);
    subtotal($(this), num);
  });
  //输入数量
  $('.count').on('blur', function() {
    let num = $(this).val();
    $(this).val(num);
    subtotal($(this), num);
  });
  /**
   * 计算小计
   * @param {*} obj 当前对象
   * @param {*} num 数量
   */
  let subtotal = function(obj, num) {
    let price = parseFloat(
      obj
        .closest('tr')
        .find('.single-price')
        .text()
    );
    let subtotal = parseFloat(price * num);
    obj
      .closest('tr')
      .find('.subtotal')
      .text(subtotal.toFixed(2));
  };

  let total = function() {
    let allNum = 0,
      total = 0;
    $singleSelects.each(function(index, dom) {
      if (dom.checked) {
        allNum += parseInt(
          $(this)
            .closest('tr')
            .find('.count')
            .val()
        );
        total += parseFloat(
          $(this)
            .closest('tr')
            .find('.subtotal')
            .text()
        );
      }
    });
    $('.all-num').text(allNum);
    $('.total').text(total.toFixed(2));
  };
});
