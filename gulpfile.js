'use strict';

// Include gulp and tools we'll use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var mocha = require('gulp-mocha');

var paths = {
  js: [ '*.js' ]
};

// clear the console window
var clear = function () {
  process.stdout.write('\u001B[2J\u001B[0;0f');
};

/**
 * Lint task
 */
gulp.task('jshint', function () {
  clear();
  return gulp.src(paths.js)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});
// Watch for file changes
gulp.task('lint', function () {
  gulp.watch(paths.js, ['jshint']);
});

/**
 * Test task
 */
gulp.task('runSpec', function () {
 clear();
 return gulp.src('./spec.js', { read: true })
   .pipe(mocha({ reporter: 'nyan' } ));
});
// Watch for file changes
gulp.task('test', function () {
  gulp.watch(paths.js, ['runSpec']);
});

/**
 * Default task
 */
gulp.task('default', ['jshint', 'runSpec']);