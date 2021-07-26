let gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin');
const gulpCssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const GulpUglify = require('gulp-uglify');




gulp.task('deleteDocsFolder', ()=>
{
    return del('./docs')
})


gulp.task('optimizeImages', ()=>
{
    return gulp.src('./app/images/**/*')
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./docs/images'))

});


gulp.task('otherFolderLoader', ()=>
{
    return gulp.src(['./app/resume/**/*', './app/Ceritificates/**/*'], {base: './app/'})
    .pipe(gulp.dest('./docs'))
});


gulp.task('usemin', ()=>
{
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function(){ return rev()}, function(){ return gulpCssnano()}],
        js: [function(){ return rev()}, function(){ return GulpUglify()}]
    }))
    .pipe(gulp.dest('./docs'))
});


gulp.task('build', gulp.series('deleteDocsFolder', 'otherFolderLoader', 'optimizeImages', 'usemin'));