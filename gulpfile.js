var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var tasks = requireDir('./gulptasks');

gulp.task('default', function(cb){
    runSequence('clean', 'sass', 'serve');
});