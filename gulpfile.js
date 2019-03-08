/**
 * Created by keziyuan on 2016/1/5.
 *
 */
let gulp = require('gulp'),
    webpack = require('webpack');

/**
 *  启动watch监听
 */

const config = require("./webpack.config");
gulp.task('default', ['webpack'], function () {
    gulp.watch(['./common/**/*'], ['webpack']);
});

gulp.task("webpack", function (callback) {
    webpack(config, function (err, stats) {
        if (err) console.log(err);
        let jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0)
            console.log(jsonStats.errors.join("\n"));
        if (jsonStats.warnings.length > 0)
            console.log(jsonStats.warnings.join("\n"));
        callback();
    });
});

gulp.task("less", function () {
    let less = require("gulp-less");
    let cleanCss = require("gulp-clean-css");
    return gulp.src("./common/css/bootstrap.less")
        .pipe(less())
        .on('error', function (err) {
            console.log(err.toString());
        })
        .pipe(cleanCss())
        .pipe(gulp.dest("./source/css"));
})

gulp.task("uglify", function () {
    let uglify   = require('gulp-uglify');
    return gulp.src("./common/js/birds.js")
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err.toString());
        })
        .pipe(gulp.dest("./source/js"));
})