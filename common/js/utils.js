export var loadSrc = function(src, callback) {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.src = src;
    if (callback) {
        script.addEventListener('load', function(e) {
            callback(null, e);
        }, false);
    }
    head.appendChild(script);
}
