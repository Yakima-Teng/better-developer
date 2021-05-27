import gulp from 'gulp'
import { join } from './utils.mjs'

gulp.src([join('/src/**/*.md')])
    .pipe(gulp.dest(join('/dist')))
