var gulp   = require('gulp');
var scss   = require('gulp-sass');
var less   = require('gulp-less');
var uglify = require('gulp-uglifycss');
var rename = require('gulp-rename');
var copy = require('gulp-copy');


gulp.task('scss', function() {
    return gulp.src('bootstrap-collapse-sidebar.scss')
      .pipe(scss())
      .pipe(gulp.dest('.'));
});

gulp.task('less', function() {
    return gulp.src('bootstrap-collapse-sidebar.less')
      .pipe(less())
      .pipe(gulp.dest('.'));
});

gulp.task('minify',['scss'], function() {
    gulp.src('bootstrap-collapse-sidebar.css')
    .pipe(uglify())
    .pipe(rename('bootstrap-collapse-sidebar.min.css'))
    .pipe(gulp.dest('.'))
    .pipe(gulp.dest('demo/css'));
});

gulp.task('watch', function() {
    gulp.watch('*.scss', ['minify']);
});
