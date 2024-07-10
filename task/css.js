import gulp from 'gulp';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer'
import cssmin from 'gulp-csso';
import rename from 'gulp-rename';
import groupmedia from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webp-css';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

// Обработка CSS 
const css = () => {
    return gulp.src(path.css.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'CSS',
            message: err.message
        }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(groupmedia())
    .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}))
    .pipe(rename( {suffix: '.min'} ))
    .pipe(cssmin())
    .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}));
}

export default css;