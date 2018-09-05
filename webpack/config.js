const path = require('path')

const config = (env = {}) => {
  const config = {
    context: __dirname,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './../dist/assets/'),
      publicPath: path.resolve(__dirname, 'assets/')
    },
    target: 'web'
  }

  return config
}

module.exports = (env = {}) => config(env)
