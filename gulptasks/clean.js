var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
    return del([
        './app.css',
        './app/_colors.scss'
    ]);
});