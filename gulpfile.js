"use strict";

// dependencies 
const gulp = require("gulp"),
	sass = require("gulp-sass"),
	maps = require("gulp-sourcemaps"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),	
	livereload = require('gulp-livereload');

// Sass Tasks
gulp.task("compileSass", function(){
	return gulp.src([
		"scss/malga.min.scss",
	])
	.pipe(maps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(maps.write("./"))
	.pipe(gulp.dest("css"))
	.pipe(livereload()); 	
});

gulp.task("concatScripts", function(){
	return gulp.src([		
		"scripts/vendor/_jquery.mmenu.all.min.js",
		"scripts/vendor/_modernizr.3.6.0.custom-build.js",
		"scripts/vendor/_bootstrap.bundle.min.js",
		"scripts/vendor/_owl.carousel.min.v2.3.4.js",
		
		"scripts/_partials/_cookie.js",
		"scripts/_partials/_header.js",
		"scripts/_partials/_layout.js",
		"scripts/_partials/_feature-animate.js",
		"scripts/_partials/_collapse-list.js", 
		//"scripts/_partials/_slider.js", 
	])
	.pipe(concat("malga_gbl.js"))
	.pipe(gulp.dest("scripts/"))
	.pipe(uglify())
	.pipe(livereload());
});

gulp.task("watchFiles", function(){
	gulp.watch("scss/**/*.scss", ["compileSass"]);
	gulp.watch("scripts/**/*.js", ["concatScripts"]);
	livereload.listen();
});

gulp.task("default", ["watchFiles"]);