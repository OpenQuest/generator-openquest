var gulp = require('gulp');
var strip = require('gulp-strip-comments');
var rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.src('./index_comment.js')
        .pipe(strip())
        .pipe(rename('index.js'))
        .pipe(gulp.dest('./'));
});