'use strict';


var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');

gulp.task('compile', function() {
    var bundler = browserify({
        basedir: './src'
    })
        .add('./index.ts')
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('compiled'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['compile']);
});