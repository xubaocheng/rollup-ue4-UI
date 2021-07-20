// rollup 配置文件采用ES模块标准编写
export default {
  input: './src/main.js', //入口文件
  output: [ // 出口文件
    {
      file: './dist/index-cjs.js', // 输出文件路径
      format:'cjs', // 输出文件格式
      banner: '//welcome',// 文件头部添加内容
      footer: '//powered by Bates' // 文件末尾添加内容
    },
    {
      file: './dist/index-es.js',
      format: 'es',
      banner: '//welcome',
      footer: '//powered by Bates'
    }
  ]
}
// rollup -c 指令 进行打包  rollup.js 会自动寻找rollup.config.js 的配置文件