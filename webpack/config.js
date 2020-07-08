const path = require('path')

const config = (env = {}) => {
  const publicPath = require('./publicPath.config.js')(env)

  const config = {
    context: __dirname,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, `./../dist/assets/`),
      publicPath: publicPath
    },
    target: 'web'
  }

  return config
}

module.exports = (env = {}) => config(env)