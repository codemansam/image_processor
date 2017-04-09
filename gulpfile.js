const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
 
gulp.task('default', () =>
    gulp.src('original/*')
        .pipe(imagemin([imageminGuetzli()]))
        .pipe(gulp.dest('processed'))
);

gulp.task('default', []);