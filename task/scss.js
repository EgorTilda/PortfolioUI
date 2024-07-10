import gulp from'gulp';

// Плагины
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer'; 
import cssmin from 'gulp-csso';
import rename from 'gulp-rename';
import groupmedia from 'gulp-group-css-media-queries';
import gulpsass from 'gulp-sass';
import * as dartSass from 'sass';
import plumber from 'gulp-plumber';
import webpcss from 'gulp-webp-css';

const sass = gulpsass(dartSass);

// Конфигурация
import path from  '../config/path.js';
import app from '../config/app.js';

// Обработка SCSS 
const scss = () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'SCSS',
            message: err.message
        }))
    }))
    .pipe(sass())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(groupmedia())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
    .pipe(rename( {suffix: '.min'} ))
    .pipe(cssmin())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}));
}

export default scss;