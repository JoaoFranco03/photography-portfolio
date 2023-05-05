const gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src(['../node_modules/flowbite/dist/flowbite.min.js',
  '../node_modules/flowbite/dist/flowbite.min.js.map'])
    .pipe(gulp.dest('./'));
});