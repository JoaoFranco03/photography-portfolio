const gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('../node_modules/flowbite/dist/flowbite.min.js')
    .pipe(gulp.dest('./'));
});