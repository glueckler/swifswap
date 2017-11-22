var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
  }
}