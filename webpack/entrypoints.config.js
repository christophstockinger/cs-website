const path = require('path')

const entrypoints = (env = {}) => {
  let entrypoints = null

  if (env.production) {
    entrypoints = {
      main: path.join(__dirname, '../src/index.js')
    }
  } else {
    entrypoints = {
      main: [
        // Add the actual application
        path.join(__dirname, '../src/index.js'),
        // and then the client which connects to our middleware
        'webpack-hot-middleware/client?reload=true'
      ],
      dev: path.join(__dirname, '../src/utilities/dev/index.js')
    }
  }
  return entrypoints
}

module.exports = (env = {}) => entrypoints(env)
