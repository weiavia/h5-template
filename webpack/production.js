const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { smart } = require('webpack-merge')
const { absoluteDir } = require('./tool')
const base = require('./base')

module.exports = smart(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader']
        }) 
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: absoluteDir('../')}),
    new ExtractTextPlugin('[name]-[hash].css'),
    new optimizeCssPlugin(),
  ]
})