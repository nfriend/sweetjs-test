'use strict';

var gulp = require('gulp');
var sweetjs = require('gulp-sweetjs');
var glob = require('glob');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function (done) {
    glob('./src/scripts/macros/**/*.macro.js', function (er, files) {
        var sweetjsOptions = {
            modules: files
        };

        gulp.src(['./src/**/*.js', '!./src/**/*.macro.js'])
            .pipe(sourcemaps.init())
            .pipe(sweetjs(sweetjsOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./build'))
            .on('end', done);
    });
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);