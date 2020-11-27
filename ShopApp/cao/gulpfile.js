var gulp = require('gulp');
var sass = require('gulp-sass');//容易出错 plus
var webserver = require("gulp-webserver");

gulp.task("style",function(){
  gulp.src("./src/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/css/"))
});

gulp.task("copyHtml",function(){
    gulp.src("./home.html")
        .pipe(gulp.dest("./"))
});

gulp.task("webserver",function(){
    gulp.src("./")
        .pipe(webserver({
            livereload: true, /*修改文件自动刷新*/
            directoryListing: {  /*要不要显示目录，开发环境下可以显示*/
                enable:true,
                path: './'  /*有哪个目录下开始访问*/
            },
            port: 81, /*端口号*/
            host: 'localhost'
        }))
});


gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['style']);
  gulp.watch("./home.html",['copyHtml'])
});

gulp.task('default',['style','webserver','sass:watch','copyHtml'])
