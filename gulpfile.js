var gulp = require('gulp');
var sass = require('gulp-sass');
//清空文件
var clean = require('gulp-clean');
var connect = require('gulp-connect');

var process = require('child_process');


// 或者之前的modern
var theme = '';

var path = {
    'sass': './theme/scss',
    'css': './theme/css',
    'js': './theme/js'
};

// 清空CSS
gulp.task('clean', function() {
    gulp.src([path.css + '/**/*.css'], {read: false})
        .pipe(clean());
});

// 默认任务
gulp.task('default', ['clean', 'sass:ui', 'sass:common', 'sass:comp'], function () {
    gulp.start('sass:watch');
    gulp.start('md:watch')
    connect.server({
      liverload: true,port:9000  //端口号
    });
    
});


gulp.task('sass:ui', function () {
    console.log('编译sass:ui');

    return gulp.src(path.sass + '/common/ui/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css + '/common/ui'));
});

gulp.task('sass:common', function () {
    console.log('编译sass:common');

    return gulp.src(path.sass + '/common/!(variable)*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css + '/common'));
});

gulp.task('sass:comp', function () {
    console.log('编译sass:comp');

    return gulp.src(path.sass + '/common/comp/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css + '/common/comp'));
});

gulp.task('md:doc', function () {
    console.log('build')
    process.exec('ydoc build',function (error, stdout, stderr) {
        console.log('builded')
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
})

gulp.task('sass:watch', function () {
    gulp.watch('./theme/sass/**/*.scss', ['sass:ui', 'sass:common', 'sass:comp']);
    
});

gulp.task('md:watch', function () {
    gulp.watch('./docs/**/*.md', ['md:doc'])
})
