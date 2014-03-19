var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    watch = require('gulp-watch');


var paths = {
  scripts: ['.**/*.js', '!node_modules/', '!public/bower_components'],
  less: 'public/less/**/*.less'
};

gulp.task('default', function() {

  nodemon({ script: 'index.js', ext: 'jade js less' })
    .on('change', ['lint', 'less'])
    .on('restart', function() {
      console.log('restarted!')
    });


});

gulp.task('production', function() {
  console.log("you need to setup a gulp production task");
});

gulp.task('test', function() {
  console.log('you need to setup a gulp test task');
});


// Utilities
gulp.task('lint', function () {
  gulp.src(paths.scripts)
    .pipe(jshint())
});

gulp.task('less', function () {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('public/css/'))
})