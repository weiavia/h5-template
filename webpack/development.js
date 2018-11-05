const base = require('./base')
const { absoluteDir } = require('./tool')
const { smart } = require('webpack-merge')
const webpack = require('webpack')

module.exports = smart(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', 
          'css-loader', 
          'sass-loader',
          { 
            loader: 'sass-resources-loader',
            options: {
              resources: [
                absoluteDir('../src/resource/style/common.scss'),
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: absoluteDir('../dist'),
    host: '0.0.0.0',
    port: 9100,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})