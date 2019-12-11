var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('sass', function(){
//     return gulp.src('src/module/my/**/*.scss')
//       .pipe(sass()) // Converts Sass to CSS with gulp-sass
//       .pipe(gulp.dest('src/module/my/**/*.css'))
//   });

// gulp.task('sass', function () {
//   // gulp.watch('./sass/**/*.scss', ['sass']);
//   return gulp.src('src/modules/my/**/*.scss') // Gets all files ending with .scss in app/scss
//     .pipe(sass())
//     .pipe(gulp.dest('src/modules/my'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// gulp.task('watch', ['browserSync', 'sass'], function () {
//   gulp.watch('assets/styles/scss/**/*.scss', ['sass']);
// });

function style(){
  return gulp.src('src/modules/my/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('src/modules/my'))
    .pipe(browserSync.reload({
      stream: true
    }))
}
function watch(){
  // return gulp.src('src/modules/my/**/*.scss') // Gets all files ending with .scss in app/scss
  //   .pipe(sass())
  //   .pipe(gulp.dest('src/modules/my'))
  //   .pipe(browserSync.reload({
  //     stream: true
  //   }))
  browserSync.init({
    server:{
      baseDir:'./'
    }
  })
  gulp.watch('src/modules/my/**/*.scss',style)
}
exports.style =style;
exports.watch =watch;