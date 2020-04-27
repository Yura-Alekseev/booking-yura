var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function css_style(done) {
    gulp.src('./source/scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}

function watchFiles() {
    gulp.watch("./source/scss/**/*", css_style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./source/js/**/*", browserReload);
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });

    done()
}

function browserReload(done) {
    browserSync.reload();
    done();
}

gulp.task('default', gulp.parallel(css_style, watchFiles, sync));
