const optimization = (env = {}) => {
  const minimizer = require('./minimizer.config')(env)

  return {
    minimizer: minimizer
  }
}

module.exports = (env = {}) => optimization(env)
