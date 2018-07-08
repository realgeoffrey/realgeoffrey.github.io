const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const htmlclean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')

// 压缩html
gulp.task('minify-html', function () {
  return gulp.src(['./public/**/*.html'])
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }))
    .pipe(gulp.dest('./public'))
})

// 压缩css
gulp.task('minify-css', function () {
  return gulp.src(['./public/**/*.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'))
})

// 压缩js
gulp.task('minify-js', function () {
  return gulp.src(['./public/js/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
})

// 压缩图片
gulp.task('minify-images', function () {
  return gulp.src(['./public/**/*.png', './public/**/*.jpg', './public/**/*.gif', './public/**/*.svg'])
    .pipe(imagemin(
      [imagemin.gifsicle({ 'optimizationLevel': 3 }),
        imagemin.jpegtran({ 'progressive': true }),
        imagemin.optipng({ 'optimizationLevel': 7 }),
        imagemin.svgo()],
      { 'verbose': true }
    ))
    .pipe(gulp.dest('./public'))
})

// 默认任务
gulp.task('default', [
  'minify-html', 'minify-css', 'minify-js', 'minify-images'
])
