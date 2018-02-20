 let gulp = require('gulp');
 let concat = require('gulp-concat');
 let uglify = require('gulp-uglify');
 let minifyCss = require('gulp-minify-css');
 let sass = require('gulp-sass');
 let rename = require("gulp-rename");
 let browserSync = require('browser-sync').create();
 let plumber = require('gulp-plumber');
 let merge = require('merge-stream');
 let imagemin = require('gulp-imagemin');
 let plugins = require('gulp-load-plugins')();
 const size = require('gulp-size');

 let config = require('./gulp.json');

 gulp.task('default', ['uglify', 'scss', 'watch', 'fonts', 'images']);

 gulp.task('uglify', () => {
   let jssStream;
   let jsStream;

   jssStream = gulp.src(config.app.javascripts.paths);
   jsStream = gulp.src(config.app.javascripts.pathJsApp);
   return merge(jsStream ,jssStream )
       .on('error', function (err){
       errorLogger('Javascript Error', err.message);
   })
   .pipe(concat('main.js'))
   .pipe(gulp.dest(config.app.javascripts.dest))
   .pipe(rename({ suffix: '.min' }))
   .pipe(plumber())
   .pipe(uglify())
   .pipe(gulp.dest(config.app.javascripts.dest))
 });

 gulp.task('scss', () => {
   let sassStrea;
   let cssStream;
   sassStream = gulp.src(config.app.stylesheets.pathCssApp)
   .pipe(sass({
       errLogToConsole: true,
       outputStyle: 'expanded'
   }).on('error', sass.logError));
   cssStream = gulp.src(config.app.stylesheets.path);
   return merge(sassStream, cssStream )
   .pipe(concat("styles.css"))
   .pipe(gulp.dest(config.app.stylesheets.dest))
   .pipe(rename({ suffix: '.min' }))
   .pipe(minifyCss())
   .pipe(gulp.dest(config.app.stylesheets.dest))
   .pipe(browserSync.stream())
   .pipe(sass())
   .pipe(plumber())
 });

 gulp.task('watch', () => {
     gulp.watch('js/**/*.js', ['uglify']);
     gulp.watch('scss/**/*.scss', ['scss']);
 });

 gulp.task('fonts', function() {
   let fontRoutea = gulp.src(config.app.fonts.paths);
   let fontRoute = gulp.src(config.app.fonts.pathFontsApp);
     return merge(fontRoutea, fontRoute)
     .pipe(gulp.dest(config.app.fonts.dest));
 });

 gulp.task('images', function () {
     return gulp.src(config.app.img.src)
         .pipe(imagemin())
         .pipe(gulp.dest(config.app.img.dest))
         .pipe(plugins.size({
             title: 'images'
         }));
 });

 gulp.task('serve', ['scss'], function() {
     browserSync.init({
       proxy: 'crea.test',
       files: [
           './resources/views/**/*.blade.php',
       ]
     });
     gulp.watch('./resources/assets/sass/**/*.scss', ['scss', 'browserSync:reload']);
     gulp.watch('./resources/assets/js/**/*.js', ['uglify', 'browserSync:reload']);
  });

 gulp.task('browserSync:reload', () => {
    browserSync.reload();
 });
