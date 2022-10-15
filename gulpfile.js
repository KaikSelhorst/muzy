const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");

function mincss() {
  return gulp
    .src("./style/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./"));
}

function developmentJS() {
  return gulp
    .src("./script/script.js")
    .pipe(webpack({ mode: "development" }))
    .pipe(gulp.dest("./"));
}

function productionJS() {
  return gulp
    .src("./script/script.js")
    .pipe(webpack({ mode: "production" }))
    .pipe(gulp.dest("./"));
}

function watch() {
  gulp.watch("./style/*.css", mincss);
  gulp.watch("./script/*.js", developmentJS);
}

gulp.task("devjs", developmentJS);
gulp.task("buildjs", productionJS);
gulp.task("mincss", mincss);
gulp.task("watch", watch);

// Mode Development --watch
gulp.task("default", gulp.parallel("watch", "devjs", "mincss"));
// Mode Build
gulp.task("build", gulp.parallel("mincss", "buildjs"));
