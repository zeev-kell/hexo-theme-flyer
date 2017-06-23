import "./loading.scss";
$(function () {
    setTimeout(function () {
        $(".loading-wrap").fadeOut(500, function () {
            setTimeout(function () {
                $(".loading-wrap").remove();
            }, 100)
        });
    }, 0);
});
