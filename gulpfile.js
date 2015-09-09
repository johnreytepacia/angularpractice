var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('minify', function () {
	gulp.src([
		'src/libs/angular/angular.js',
		'src/libs/ui-router/release/angular-ui-router.js',
		'!src/libs/**/*.js',
		'src/app.js',
		'src/app/**/*.js'
	])

	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('dist/'));
});