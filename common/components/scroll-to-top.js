import "./scroll-to-top.styl";
var scrollToTop = '<a id="scroll-to-top" href="#" class=""></a>';

$(function() {
    var $scroll = $(scrollToTop);
    $('body').append($scroll);
    var $window = $(window);

    function onScroll() {
        $window.scrollTop() > $window.height() * 0.5 ? $scroll.addClass("show") : $scroll.removeClass("show");
    }
    
    $window.scroll(onScroll);

    onScroll();

    $scroll.click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500, function() {
            $scroll.removeClass("show");
        });
        return false;
    });
});
