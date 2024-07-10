import gulp from 'gulp';

// Плагины
import notify from 'gulp-notify'; 
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';


// Обработка Font
const font = () => {
    return gulp.src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Font',
            message: err.message
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest));
}

export default font;