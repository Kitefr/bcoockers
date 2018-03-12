const gulp = require("gulp");
const plumber = require("gulp-plumber");
const stylus = require("gulp-stylus");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const replace = require("gulp-html-replace");
const concat = require("gulp-concat");
const del = require("del");
const runSequence = require("run-sequence");
const browserSync = require("browser-sync").create();

gulp.task("html:build", () => {
    return gulp
        .src("./src/index.html")
        .pipe(plumber())
        .pipe(
            replace({
                css: "style.min.css",
                js: "main.min.js"
            })
        )
        .pipe(gulp.dest("./dist/"));
});

// Convert style.styl to style.css
gulp.task("css", () => {
    return gulp
        .src("./src/css/stylus/style.styl")
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest("./src/css/"))
        .pipe(browserSync.stream());
});

// Minifie, autoprefix et optimise le css
gulp.task("css:build", ["css"], () => {
    const plugins = [
        autoprefixer({
            browsers: ["last 1 version"]
        }),
        cssnano()
    ];

    return gulp
        .src("./src/css/style.css")
        .pipe(plumber())
        .pipe(postcss(plugins))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./dist/assets/css/"));
});

gulp.task("js", () => {
    return gulp
        .src(["./src/js/**/*.js", "!./src/js/main.js"])
        .pipe(plumber())
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./src/js/"));
});

gulp.task("js:build", ["js"], () => {
    return gulp
        .src("./src/js/main.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest("./dist/js/"));
});

// Optimise toutes les images jpeg, png, svg et gif
// A faire uniquement avant un build
gulp.task("images:build", () => {
    return gulp
        .src("./src/images/**/*.+(png|jpg|jpeg|svg)")
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("fonts", () => {
    return gulp.src("./src/fonts/*").pipe(gulp.dest("./dist/fonts/"));
});

// Realod the browser on change
gulp.task("server", function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

// Clean dist
gulp.task("clean:dist", function() {
    return del.sync("./dist");
});

gulp.task("watch", ["server"], () => {
    gulp.watch("./src/css/stylus/**/*.styl", ["css"]);
    gulp.watch("./src/js/**/*.js", ["js"]);
    gulp.watch("./src/index.html").on("change", browserSync.reload);
});

// What we will user

gulp.task("default", function() {
    runSequence("css", "watch", () => {});
});

gulp.task("build", () => {
    runSequence(
        "clean:dist",
        ["css:build", "js:build", "html:build"],
        "images:build",
        "fonts",
        () => {}
    );
});
