module.exports = [{
  file: './dist/index-cjs.js',
  format: 'cjs',
  banner: '// welcome',
  footer: '// powered by Bates'
}, {
  file: './dist/index-es.js',
  format: 'es',
  banner: '// welcome',
  footer: '// powered by Bates',
}, {
  file: './dist/index-amd.js',
  format: 'amd',
  banner: '// welcome',
  footer: '// powered by Bates',
}, {
  file: './dist/index-umd.js',
  format: 'umd',
  name: 'Bates-umd', // 指定文件名称
  banner: '// welcome',
  footer: '// powered by Bates',
}]