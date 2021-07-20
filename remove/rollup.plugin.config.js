
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import {uglify} from 'rollup-plugin-uglify'
export default {
  input: './src/plugin/main-json.js',
  output: [{
    file: './dist/index-plugin-cjs.js',
    format: 'cjs',
  }, {
    file: './dist/index-plugin-es.js',
    format: 'es',
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    json(),
    uglify()
  ],
}