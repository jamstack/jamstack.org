var gulp        = require('gulp'),
    markdown    = require('gulp-markdown'),
    frontMatter = require('gulp-front-matter'),
    layout      = require('gulp-layout');

gulp.task('redirects', function() {
  return gulp.src('./src/_redirects')
    .pipe(gulp.dest('./dist'));
})

gulp.task('css', function() {
  return gulp.src('./css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('markdown', function() {
  return gulp.src('./src/index.md')
    .pipe(frontMatter())
    .pipe(markdown())
    .pipe(layout(function(file) {
      return file.frontMatter;
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['markdown', 'css', 'redirects'])
