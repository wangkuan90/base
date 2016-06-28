var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('watch', function() {

	gulp.watch(['./markDown/src/*.md'], ['markdown']);
});

gulp.task('markdown', function() {

	return gulp.src('./markDown/src/*.md')
		.pipe(markdown())
		.pipe(gulp.dest('./markDown/dist'));
});