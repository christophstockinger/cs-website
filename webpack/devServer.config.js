const path = require('path')

const server = {
  contentBase: path.join(__dirname, './../dist'),
  hot: true,
  // liveReload: true,
  port: 3000,
  watchContentBase: true,
  historyApiFallback: true
}

module.exports = server
