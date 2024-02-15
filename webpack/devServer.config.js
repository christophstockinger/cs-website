const path = require('path')

const server = {
  watchFiles: [path.join(__dirname, './../dist')],
  hot: true,
  // liveReload: true,
  port: 3000,
  historyApiFallback: true
}

module.exports = server
