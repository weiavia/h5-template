const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { smart } = require('webpack-merge')
const base = require('./base')

module.exports = smart(base, {
  mode: 'production',
  plugins: [
    new optimizeCssPlugin(),
  ]
})