import "./animate-box.scss";
import "waypoints/lib/jquery.waypoints";
$(function() {
    $('.animate-box').waypoint(function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
            $(this.element).addClass('item-animate');
            setTimeout(function() {
                let time = 0; //-- 累计时间值
                let times = 1; //-- 叠加系数
                let items = $('body .animate-box.item-animate');
                if (items.length >= 10) { //-- 超过10个，系数为10
                    times = 10;
                }
                items.each(function(k) {
                    let $el = $(this);
                    let cl = $el.attr("data-animation") ? $el.attr("data-animation") + " animated" : "fadeIn animated";
                    let delay = $el.attr("data-delay") ? Number($el.attr("data-delay")) : 0;
                    let pause = $el.attr("data-pause") ? Number($el.attr("data-pause")) : 0;
                    time = time + (80 + delay) / times;
                    setTimeout(function() {
                        $el.addClass(cl);
                        $el.removeClass('item-animate');
                    }, time, 'easeInOutExpo');
                    time += pause;
                });
            }, 50);
        }
    }, { offset: '85%' });
});
