const { absoluteDir } = require('./tool')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
        test: /\.(png|svg|jpg|gif)$/,
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
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: absoluteDir('../src/resource/index-template.html'),
      favicon: absoluteDir('../src/resource/images/icon.png')
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.sass', '.css'],
    alias: {
      '@': absoluteDir('../src'),
      'pages': absoluteDir('../src/pages'),
      'components': absoluteDir('../src/components')
    } 
  }
}