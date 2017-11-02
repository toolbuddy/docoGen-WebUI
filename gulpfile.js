/* Gulp modules */
const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const compileJSX = require('gulp-compile-jsx');
const concat = require('gulp-concat');
const cssMin = require('gulp-cssmin');
const gulpIf = require('gulp-if');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const staticI18nHtml = require('gulp-static-i18n-html');
const srcMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const babelify = require('babelify');
const browserify = require('browserify');
const watchify = require('watchify');
const argv = require('yargs').argv;

/* Vinyl modules */
const buffer = require('vinyl-buffer');
const srcStream = require('vinyl-source-stream');

/* Create production and dependencies */
const production = process.env.NODE_ENV === 'production';
const dependencies = [
    'alt',
    'react',
    'react-dom',
    'react-router',
    'underscore'
];

/* Get dest parameter */
//const dest = argv.p[argv.p.length - 1] == '/' ? argv.p : argv.p + '/';
var dest;
if (argv.p === undefined) {
    dest = './test/dest/'
} else {
    dest = argv.p + '/';
}


/* Combine all JavaScript libraries into a single file for fewer HTTP requests */
gulp.task('vendor', function() {
    return gulp
        .src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/magnific-popup/dist/jquery.magnific-popup.js',
            './bower_components/semantic/dist/semantic.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(gulp.dest(dest + 'js/'));
});

/* Compile third-party dependencies separately for faster performance */
gulp.task('browserify-vendor', function() {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(srcStream('vendor.bundle.js'))
        .pipe(buffer())
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(gulp.dest(dest + 'js/'));
});

/* Compile only project files, excluding all third-party dependencies */
gulp.task('browserify', ['browserify-vendor'], function() {
    return browserify({
            entries: './lib/template/main.jsx',
            extensions: [
                '.js',
                '.json',
                '.es6',
                '.jsx'
            ],
            debug: false
        })
        .external(dependencies)
        .transform(babelify, {
            presets: [
                'es2015',
                'react'
            ]
        })
        .bundle()
        .pipe(srcStream('bundle.js'))
        .pipe(buffer())
        .pipe(srcMaps.init({
            loadMaps: true
        }))
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(srcMaps.write('.'))
        .pipe(gulp.dest(dest + 'js/'));
});

/* Same as browserify task, but will also watch for changes and re-compile */
gulp.task('browserify-watch', ['browserify-vendor'], function() {
    var bundler = watchify(browserify({
            entries: './lib/template/main.jsx',
            debug: true
        },
        watchify.args
    ));

    bundler.external(dependencies);
    bundler.transform(babelify, {
        presets: [
            'es2015',
            'react'
        ]
    });
    bundler.on('update', rebundle);
    return rebundle();

    function rebundle() {
        var start = Date.now();

        return bundler
            .bundle()
            .on('error', function(err) {
                util.log(util.colors.red(err.toString()));
            })
            .on('end', function() {
                util.log(util.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(srcStream('bundle.js'))
            .pipe(buffer())
            .pipe(srcMaps.init({
                loadMaps: true
            }))
            .pipe(srcMaps.write('.'))
            .pipe(gulp.dest(dest + 'js/'));
    }
});

/* Compile less stylesheets. */
gulp.task('styles', function() {
    return gulp
        .src('./lib/template/less/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoPrefixer())
        .pipe(gulpIf(production, cssMin()))
        .pipe(gulp.dest(dest + 'css/'));
});

/* Watch task */
gulp.task('watch', function() {
    return gulp.watch('./lib/template/less/**/*.less', ['styles']);
});

/* Duplicate themes */
gulp.task('themes', function() {
    return gulp
        .src('./lib/template/themes/*/*/*/*')
        .pipe(gulp.dest('./test/dest/js/themes/'))
        .pipe(gulp.dest('./test/dest/css/themes/'));
});

/* Initialize HTML */
gulp.task('setup', function() {
    return gulp
        .src('./lib/template/index.html')
        .pipe(gulp.dest(dest));
})

/* Publish HTML file */
gulp.task('i18n', function() {
    return gulp
        .src(dest + 'index.html')
        .pipe(staticI18nHtml({
            locale: ''
        }))
        .pipe(gulp.dest(dest));
});

/* Default task */
gulp.task('default', [
    'styles',
    'vendor',
    'browserify-watch',
    'watch',
    'i18n'
]);

/* Build task */
gulp.task('build', [
    'styles',
    'vendor',
    'browserify',
    'i18n'
]);

/* Initialize task */
gulp.task('initial', [
    'themes',
    'setup'
])