'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    options = {
      port: 9007,
      root: ['src'],
      devBase: 'http://localhost:',
      browser: 'chrome'
    };

gulp.task('connect', function () {
  connect.server({
    root: options.root,
    port: options.port
  });
});

gulp.task('open', function () {
  var openOptions = {
      uri: options.devBase + options.port,
      app: options.browser
  };
  gulp.src(__filename).pipe(open(openOptions));
});

gulp.task('default', ['connect', 'open']);
