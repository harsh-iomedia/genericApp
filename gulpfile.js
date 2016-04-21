var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var request = require('request');
var remoteSrc = require('gulp-remote-src');
var jsonSass = require('json-sass');
var source = require('vinyl-source-stream');
var fs = require('fs');
var jScrambler = require('gulp-jscrambler');

var paths = {
  sass: ['./scss/**/*.scss'],
  js:['./www/js/**/**/*.js'],
  lib:['./www/lib/ionic/js/ionic.bundle.js']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('scripts', function() {
  gulp.src(paths.js)
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./www/builds'))
  .pipe(jScrambler({
    keys: {
      accessKey: '0EA6CE2E959C41A7458E69AD31E52631901D242C',
      secretKey: 'FE6D51004C2B0F0B99F87F3D73E6397977C61BCF'
    },
    params: {
      mode:"mobile",
      dot_notation_elimination: '%DEFAULT%',
      rename_local: '%DEFAULT%',
      whitespace: '%DEFAULT%',
      function_reorder: '%DEFAULT%',
      function_outlining:'%DEFAULT%',
      duplicate_literals: '%DEFAULT%'
    },
    deleteProject: false
  }))
  .pipe(gulp.dest('./'));
})


gulp.task('lib',function(){
  gulp.src(paths.lib)
  .pipe(concat('lib.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./www/builds'));
});


gulp.task('jsonToSass', function() {
  var getConfig = function(){
    return remoteSrc(['configs'], {
      base: 'http://stp-atlfalcons-v3-stg.io-research.com/api/'
    })
    .pipe(rename({ extname: '.json' }))
    .pipe(gulp.dest('./www/builds/'));
  }
  var jsonToSass = function(){
    return fs.createReadStream('./www/builds/configs.json')
    .pipe(jsonSass({
      prefix: '$config: ',
    }))
    .pipe(source('./www/builds/configs.json'))
    .pipe(rename('config.scss'))
    .pipe(gulp.dest('./scss/'));
  }
  return getConfig().on('end', jsonToSass);
});

gulp.task('jsonsass', function() {
  return fs.createReadStream('./www/builds/configs.json')
    .pipe(jsonSass({
      prefix: '$config: ',
    }))
    .pipe(source('./www/builds/configs.json'))
    .pipe(rename('config.scss'))
    .pipe(gulp.dest('./scss/'));
});