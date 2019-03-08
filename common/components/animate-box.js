import "./animate-box.styl";
$(function() {
    var time = 0; //-- 累计时间值
    $('.animate-box').each(function() {
        var $el = $(this);
        $el.addClass('item-animate');
        var cl = $el.attr("data-animation") ? $el.attr("data-animation") + " animated" : "fadeIn animated";
        var delay = $el.attr("data-delay") ? Number($el.attr("data-delay")) : 0;
        var pause = $el.attr("data-pause") ? Number($el.attr("data-pause")) : 0;
        time = time + delay;
        setTimeout(function() {
            $el.addClass(cl);
            $el.removeClass('item-animate');
        }, time, 'easeInOutExpo');
        time += pause;
    });
});
