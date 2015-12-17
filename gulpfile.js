var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

var reload = browserSync.reload;
var bowerDir = './bower_components/';
var distDir = './dist/';

gulp.task('scripts', function() {
	return gulp.src([
         bowerDir+'jquery/dist/jquery.min.js',
         './assets/scripts/**/*.js'
      ])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(distDir));
});
gulp.task('compile-bootstrap', function () {
	return gulp.src(bowerDir+'bootstrap/less/bootstrap.less')
		.pipe(less())
		.pipe(gulp.dest(distDir))
		.pipe(reload({stream:true}));
});
gulp.task('compile-font-awesome-fonts', function () {
	return gulp.src(bowerDir+'font-awesome/fonts/*.*')
		.pipe(gulp.dest('fonts'));
});

gulp.task('compile-font-awesome-sass', function () {
	return gulp.src(bowerDir+'font-awesome/scss/font-awesome.scss')
		.pipe(sass())
		.pipe(gulp.dest(distDir))
		.pipe(reload({stream:true}));
});

gulp.task('sass', function (){
	return gulp.src('./assets/scss/**/*.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(distDir))
		.pipe(reload({stream:true}));
});

// build
gulp.task('build', ['scripts', 'compile-bootstrap', 'compile-font-awesome-fonts', 'compile-font-awesome-sass', 'sass']);

// watch & live reload
gulp.task('watch', function(){
	browserSync({
		server: {
			baseDir: './'
		}
	});

	gulp.watch(bowerDir+'bootstrap/less/**/*.less', ['compile-bootstrap']);
	gulp.watch(bowerDir+'font-awesome/fonts/*.*', ['compile-font-awesome-fonts']);
	gulp.watch(bowerDir+'font-awesome/scss/*.scss', ['compile-font-awesome-sass']);
	gulp.watch('./assets/scss/**/*', ['sass']);
	gulp.watch('./assets/scripts/**/*', ['scripts']);
	gulp.watch(['*.html', 'css/*.css', 'dist/*.js'], reload);
});
