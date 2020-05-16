import {src,dest,series} from 'gulp';
import sourceMapsPlugin from 'gulp-sourcemaps';
import nodemonDevPlugin from 'gulp-nodemon';
import babelPlugin from 'gulp-babel';
import del from 'del';
import path from 'path';
const allPaths = ['source/**/*.js'];

const serverPath = path.join('dist','index.js');
export function babel(){
    return src(allPaths).pipe(sourceMapsPlugin.init()).pipe(babelPlugin()).pipe(sourceMapsPlugin.mapSources(src => {
        return '../source/'+src;
    })).pipe(sourceMapsPlugin.write('.')).pipe(dest('dist'));
}

export function cleanDist(){
   return  del('dist');
}

export function nodemon(){
    nodemonDevPlugin({
        script : serverPath,
        ext: 'js',
        ignore: ['node_modules','/dist/**/*.js'],
        tasks: ['build']
    })
}

export const start = series(cleanDist,babel,nodemon);
export const build = series(cleanDist,babel);