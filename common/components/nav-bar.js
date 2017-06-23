import "./nav-bar.scss";
import {loadSrc} from "../js/utils.js";
$(function ($) {
    var MQL = 1170;
    var $window = $(window);
    if ($window.width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $window.on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $window.scrollTop();
                if (currentTop < this.previousTop) {
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});

$(function () {

    var $NavBar = $(".navbar-custom");

    $(".navbar-toggle", $NavBar).on("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        $("#navbar-wrap", $NavBar).css({
            "transform": "translate(0,0)"
        });
        $(document).on("click", closeNav);
        $(window).on('scroll', closeNav)
    });

    function closeNav(event) {
        var $et = $(event.target);
        if ($et.attr("id") !== "navbar-wrap" && !$et.hasClass("navbar-toggle")) {
            $("#navbar-wrap", $NavBar).removeAttr("style");
            $(document).off("click", closeNav);
            $(window).off('scroll', closeNav)
        }
    }

    loadSrc("https://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js", function () {
        var $nav = document.querySelector("nav");
        if ($nav) {
            FastClick.attach($nav);
        }
    })
});
