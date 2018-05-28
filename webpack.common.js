const { join } = require('path')

module.exports = {
  entry: ['src/index.ts'],
  output: {
    filename: 'vibes.js',
    path: join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
}
