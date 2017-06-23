/**
 * Created by keziyuan on 2016/1/5.
 *
 */
var gulp = require('gulp'),
    webpack = require('webpack');

/**
 *  启动watch监听
 */

const config = require("./webpack.config");
gulp.task('default', ['webpack', 'less'], function () {
    gulp.watch(['./common/**/*'], ['webpack']);
});

gulp.task("webpack", function (callback) {
    webpack(config, function (err, stats) {
        if (err) console.log(err);
        var jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0)
            console.log(jsonStats.errors.join("\n"));
        if (jsonStats.warnings.length > 0)
            console.log(jsonStats.warnings.join("\n"));
        callback();
    });
});

gulp.task("less", function () {
    var less = require("gulp-less");
    return gulp.src("./common*/css/bootstrap.less")
        .pipe(less())
        .on('error', function (err) {
            console.log(err.toString());
        })
        .pipe(gulp.dest("./"));
})
