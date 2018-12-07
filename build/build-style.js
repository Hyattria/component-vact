'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
  return gulp.src('../theme-default/src/*/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: [
        "defaults",
        "ios >= 6",
        "Android >=4.0",
        "not ie <= 100",
        "not ExplorerMobile <= 100",
        "not Opera <=100",
        "not OperaMini <= 100",
        "not OperaMini all",
        "not OperaMobile <= 100",
        "not BlackBerry <= 100"
      ],
      cascade: false
    }))
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('../theme-default/lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('../theme-default/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../theme-default/lib/fonts'))
})

gulp.task('default', ['compile', 'copyfont'])