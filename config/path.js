const pathSrc = './src';
const pathDest = './public';

export default {
    root: pathDest,

    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },
    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },
    scss: {
        src: pathSrc + '/scss/*.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: pathDest + '/css'
    },
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },
    img: {
        src: pathSrc + '/img/*.*',
        watch: pathSrc + '/img/**/*.*',
        dest: pathDest + '/img'
    },
    font: {
        src: pathSrc + '/font/**/*.{ttf, otf, eot, ttc, otc, svg, woff, woff2}', // {ttf, otf, eot, ttc, otc, svg, woff, woff2}
        watch: pathSrc + '/font/**/*.*',
        dest: pathDest + '/font'
    }
}