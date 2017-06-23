/**
 * Created by zeev on 2016/5/8 0008.
 */

let defaultOption = {

}

let TextRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    [].forEach(function() {

    })
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
};

TextRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let _this = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        _this.tick();
    }, delta);
}

export default TextRotate;

let $subheading = $(".subheading");
if ($subheading.length) {
    let textArray = $subheading.attr("data-text");
    if (textArray) {
        textArray = textArray.split("|");
    } else {
        textArray = [$subheading.html()] || [];
    }
    new TextRotate($subheading[0], textArray, 500);
}
