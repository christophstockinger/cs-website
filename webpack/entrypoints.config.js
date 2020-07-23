const path = require('path')

const entrypoints = (env = {}) => {
  let entrypoints = null

  if (env.production) {
    entrypoints = {
      main: path.join(__dirname, `../src/index.js`)
    }
  } else {
    entrypoints = {
      main: path.join(__dirname, `../src/index.js`)
    }
  }
  return entrypoints
}

module.exports = (env = {}) => entrypoints(env)