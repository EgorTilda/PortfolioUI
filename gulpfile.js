// Gulp Base
import gulp from 'gulp';
import browserSync from 'browser-sync';

// Конфигурация
import path from './config/path.js';
import app from './config/app.js';

// Задачи
import clear from './task/clear.js';
import html from './task/html.js';
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import font from './task/font.js';

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}
// Наблюдение
const watcher = () => {
    gulp.watch(path.html.watch, html).on('all', browserSync.reload);
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
    gulp.watch(path.font.watch, font).on('all', browserSync.reload);
}

// Экспорт задач в Gulp
export {html};
export {scss};
export {js};
export {img};
export {font};
export {watcher};
export {clear};

const build = gulp.series(
    clear,
    gulp.parallel(html, scss, js, img, font),
    html
);
const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

// Сборка
export default app.isProd
    ? build 
    : dev;



/* 
    Основы EDU: src() - поток чтения, dest() - поток записи, pipe() - связь потоков чтения и записи
        Плагины выполняют различные манипуляции над файлами (сжатие, минификация, группировка медиа и т.д).
        Маски: * - все имена и расширения (*.*), *.{html, css} выборка расширений или папок, ** - папка ! - исключения из выборки
        Наблюдатель: gulp watch - существует для автоматического обнаружения изменений файлов для запуска тасков
*/