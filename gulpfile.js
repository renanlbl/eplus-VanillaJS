"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("scss", function() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
});
