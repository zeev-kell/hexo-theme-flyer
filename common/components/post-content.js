import "./post-content.styl";
$(function () {
    var $postContent = $('#post-content');
    if ($postContent.length) {
        window.addEventListener("scroll", scrollcatelogHandler);
        var tocPosition = $postContent.offset().top;

        function scrollcatelogHandler() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > tocPosition - .1 * $(window).height() ) {
                $postContent.addClass("post-content-fixed");
            } else {
                $postContent.removeClass("post-content-fixed");
            }
        }

        scrollcatelogHandler();

        $(".connent-nav-link", $postContent).click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            var $id = $("#" + $(event.target).attr("href").replace("#", ""));
            if ($id.length) {
                $("html, body").animate({
                    scrollTop: $id.offset().top - 28
                }, 500);
            }
        })
    }
})
