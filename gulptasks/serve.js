var gulp = require('gulp');
var liveServer = require('gulp-live-server');

gulp.task('serve', function () {
    var server = liveServer.static('./', 8080);
    server.start();
    
    gulp.watch('app/**/*.scss', ['sass']);
    
    gulp.watch(['app.css', 'app/**/*.js', 'index.html', 'app/**/*.html'], function(file){
       server.notify.apply(server, [file]); 
    });
});