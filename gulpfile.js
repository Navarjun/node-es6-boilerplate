const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const exec = require('child_process').exec;
//
const srcFolder = "src/";
const files = ["index.js"];
const tasks = [];


for (let i = 0; i < files.length; i++) {
  const webpackConfig = {
      module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query:{
     					presets:['es2015']
     				}
         }]
      }
  };
  gulp.task(files[i], function() {
    return watch(srcFolder+"*", function() {
      gulp.src(srcFolder+files[i])
        .pipe(webpackStream(webpackConfig))
        .pipe(rename(files[i], { extension: ".js" }))
        .pipe(gulp.dest('build'))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify()) // minifies and uglifies the file
        .pipe(gulp.dest('build'));
    });
  });
  tasks.push(files[i]);
}

gulp.task('server', function (cb) {
  exec('npm run start-server', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
tasks.push("server");


gulp.task("default", tasks);
