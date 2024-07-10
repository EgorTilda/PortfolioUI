import gulp from 'gulp';
import del from 'gulp-clean';
import fs from 'fs';

// Конфигурация
import path from '../config/path.js';

// Удаление директории
const clear = (done) => {
    if (fs.existsSync(path.root))
        return gulp.src(path.root).pipe(del());
    done();

}

export default clear;