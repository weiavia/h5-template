const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        use: [MiniCssExtractPlugin.loader,"css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist', {root: absoluteDir('../')}),
    new MiniCssExtractPlugin({
      filename: 'style/[name]-[hash].css',
    }),
    new optimizeCssPlugin(),
  ]
})