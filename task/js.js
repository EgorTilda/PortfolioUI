import gulp from 'gulp';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
//import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';

// Конфигурация
import path from  '../config/path.js';
import app from '../config/app.js';
import webpackconfig from '../webpack.config.js';

// Обработка JS
const js = () => {
    return gulp.src(path.js.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'JavaScript',
            message: err.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(webpackconfig))
    //.pipe(uglify())
    .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}));
}

export default js;