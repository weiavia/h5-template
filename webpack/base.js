const { absoluteDir } = require('./tool')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const vuxLoader = require('vux-loader')

const webpackConfig = {
  entry: {
    main:  absoluteDir('../src/main.js')
  },
  output: {
    path: absoluteDir('../dist'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        include: absoluteDir('../src'),
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'images/',
              limit: 7777
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new TransformModulesPlugin(),
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: absoluteDir('../src/resource/index-template.html'),
      favicon: absoluteDir('../src/resource/images/icon.png')
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.sass', '.css', '.json'],
    alias: {
      '@': absoluteDir('../src'),
      'pages': absoluteDir('../src/pages'),
      'components': absoluteDir('../src/components')
    } 
  }
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
