var gulp = require("gulp")
var connect = require("gulp-connect");

gulp.task("html",function(){
	return gulp.src("html/**/*").pipe(gulp.dest("dest/html")).pipe(connect.reload())
})

gulp.task("js",function(){
	return gulp.src("js/**/*").pipe(gulp.dest("dest/js"))
})

gulp.task("css",function(){
	return gulp.src("css/**/*").pipe(gulp.dest("dest/css"))
})

gulp.task("images",function(){
	return gulp.src("images/**/*").pipe(gulp.dest("dest/images"))
})

//gulp.task("default",["html","js","css"])

gulp.task("watch",function(){
	gulp.watch("html/**/*",["html"])
	gulp.watch("js/**/*",["js"])
	gulp.watch("css/**/*",["css"])
	gulp.watch("images/**/*",["images"])
})

gulp.task('server',function(){
	connect.server({
		root:"./",
		port:8888,
		livereload:true
	})
});

gulp.task("default",["html","js","css","watch","server"]);
