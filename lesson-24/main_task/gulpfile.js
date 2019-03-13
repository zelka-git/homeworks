var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
// var jshint = require('gulp-jshint');


gulp.task('minify-css', function(done){
  // return gulp.src('css/*.css')
  gulp.src('css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('../dist/css/'))

  done();
});

gulp.task('move-js', function(done){
  // return gulp.src('css/*.css')
  gulp.src('js/*.js')

  .pipe(gulp.dest('../dist/js/'))

  done();
});


gulp.task('htmlmin', function(done){
  // return gulp.src('*.html')
  gulp.src('*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('../dist/'))

  done();
});


gulp.task('fonts', function(done){
  // return gulp.src('*.html')
  gulp.src('fonts/**/*')
  .pipe(gulp.dest('../dist/fonts'))

  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('img/**/*.{png,jpg,jpeg}')
      .pipe(tinyPNG({
          key: 'Tw6cDsYV2B5Sgqh3QvVswq6nMH3zQDlb'
      }))
      .pipe(gulp.dest('../dist/img/'));
      done();
});


// gulp.task('minjs', function (done) {
//   gulp.src('js/*.js', '!js/*.min.js')
//       .pipe(uglify())
//       // .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest('../dist/js/'));
//       done();
// });

gulp.task('minjs', function(done){
  gulp.src('js/*.js', 'js/*.min.js')
      // .pipe(jshint())
      // .pipe(jshint.reporter('default'))
      .pipe(concat('file.js'))
      .pipe(rename('file.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('../dist/js/'));
      done();
});



gulp.task('default', gulp.parallel('minify-css', 'minjs', 'htmlmin', 'fonts', 'tinypng', function (done) {
  // place code for your default task here
  // console.log('Задача выполнена');
  done();
}));