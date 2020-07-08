const path = require('path')
const BROWSERS = ['last 2 versions', '>1%', 'IE 11']

const rules = (env = {}) => {
  const styleLoaders = require('./styleLoader.config.js')(env)
  const fileLoaders = require('./fileLoader.config.js')(env)
  const rules = []

  rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
  })

  rules.push({
    test: /\.(js)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: BROWSERS
              }
            }
          ]
        ]
      }
    }
  })

  rules.push({
    test: /\.(css|scss|sass)$/,
    use: styleLoaders
  })

  fileLoaders.forEach(fileLoader => {
    rules.push(fileLoader)
  })

  return rules
}

module.exports = (env = {}) => rules(env)
