var gulp = require('gulp');
var sass = require('gulp-sass');
var jsonSass = require('gulp-json-sass');
var concat = require('gulp-concat');

gulp.task('sass:json', function(){
    return gulp
        .src('./app/colors.json')
        .pipe(jsonSass())
        .pipe(concat('_colors.scss'))
        .pipe(gulp.dest('./app'));
});

gulp.task('sass', ['sass:json'], function(){
    return gulp
        .src('./app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});