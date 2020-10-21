// 所有配置文件的入口

/**
 * webpack-merge: 将配置文件合并
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

let config = process.NODE_ENV === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config)