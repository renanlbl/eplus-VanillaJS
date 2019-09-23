"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("scss", function() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
});
