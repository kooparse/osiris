var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var rename = require('gulp-rename');

gulp.task("dev", function() {
	gulp.src("src/osiris.css")
	.pipe(cssnext({
		compress: false
	}))
	.pipe(gulp.dest("./dist"));
});

gulp.task("prod", function() {
	gulp.src("src/osiris.css")
		.pipe(cssnext({compress: false}))
		.pipe(gulp.dest("./dist"));

	gulp.src("src/osiris.css")
		.pipe(cssnext({compress: true}))
		.pipe(rename('osiris.min.css'))
		.pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.css'], ['dev']);
});

gulp.task('default', ['dev', 'watch']);
gulp.task('build', ['dev', 'prod']);
