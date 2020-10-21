// 生产环境配置

// 作用: 在每次构建后清空dist目录, 构建过程中会产生带 hash 的文件, 随着构建次数过多就会产生很多无用文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}