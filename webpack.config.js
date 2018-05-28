const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    contentBase: 'public',
    port: 3030,
    inline: true,
    historyApiFallback: {
      index: '/'
    }
  }
})
