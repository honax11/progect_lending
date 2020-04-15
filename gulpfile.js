const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug =require('gulp-pug');
const sass = require('gulp-sass');



/*--------Server-------*/
gulp.task('server', function(){
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "buld"
        }

    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});





/*------------Pug compile---------*/
gulp.task('templates:complite', function buildHTML(){
    return gulp.src('sourse/templates/index.pug')
    .pipe(pug ({
        pretty: true
    }))

    .pipe(gulp.dest('build')) 
});



/*---------styles compile-------*/ 
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('*./css'));
})