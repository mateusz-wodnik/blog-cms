var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['env'],
            plugins: ['transform-object-rest-spread']
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('nodemon', function () {
    nodemon({
        script: 'dist/server.js',
        ext: 'js html',
    });
});

gulp.task('default', gulp.series('server', 'nodemon', function () {
	gulp.watch('src/**/*.js', ['server'])
}));

// var server = gulp.task('server');
