// 公共环境的配置
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 配置入口文件
    entry: './src/index.ts',
    // 配置输出
    output: {
        filename: 'app.js',
    },
    // 拓展名
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                // ts-loader 的正则
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                }],
                // 排除 node_modules 下的文件
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        /**
         * 插件作用: 通过一个模版生成网站的首页, 并将输出文件自动嵌入到文件中
         */
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html',
        })
    ]
}