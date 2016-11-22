//gulp
var gulp          = require('gulp');

// common
var runsequence   = require('run-sequence');
var rename        = require('gulp-rename');
var fs            = require('fs');

// css
var csscomb       = require('gulp-csscomb');  
var cssmin        = require('gulp-cssmin');
var csslint       = require('gulp-csslint');

gulp.task('comb', function(){
  return gulp.src('nanoreset.css')
    .pipe(csscomb())
    .pipe(gulp.dest(''))
});

gulp.task('lint', function(){
  return gulp.src('nanoreset.css')
    .pipe(csslint({
      //'box-sizing': false,
      //'universal-selector': false
    }))
    .pipe(csslint.reporter());
});

gulp.task('min', function(){
  return gulp.src('nanoreset.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(''))
});

gulp.task('default',function(callback){
  runsequence('css',callback);
});

gulp.task('css',function(callback){
  runsequence('comb','lint','min',callback);
});
