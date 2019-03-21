//导入所需插件 
const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  img = require('gulp-imagemin'),
	  cssnano = require('gulp-cssnano'),
	  html = require('gulp-minify-html'),
	  sass = require('gulp-sass');
	  
	  
//任务1：编译sass压缩css
gulp.task('sass',function(){
	gulp.src('src/sass/*')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'))
});
//任务2：处理js任务
gulp.task('js',function(){
	gulp.src('src/js/*')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
})
//任务3：压缩html
gulp.task('html',function(){
	gulp.src('src/html/*')
	.pipe(html())
	.pipe(gulp.dest('dist/html'))
});
//任务4：压缩图片
gulp.task('image',function(){
	gulp.src('src/img/*')
	.pipe(img())
	.pipe(gulp.dest('dist/img'))
});
//发布自动监听任务
gulp.task('default',function(){
	gulp.watch('src/sass/*',['sass']);
	gulp.watch('src/js/*',['js']);
	gulp.watch('src/html/*',['html']);
	gulp.watch('src/image/*',['image']);
})