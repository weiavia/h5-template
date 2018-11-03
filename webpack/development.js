const base = require('./base')
const { absoluteDir } = require('./tool')
const { smart } = require('webpack-merge')
const webpack = require('webpack')

module.exports = smart(base, {
  mode: 'development',
  devServer: {
    contentBase: absoluteDir('../dist'),
    host: '0.0.0.0',
    port: 9100,
    hot: true
  },
  optimization: {
    namedModules: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})