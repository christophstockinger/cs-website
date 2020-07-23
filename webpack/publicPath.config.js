const publicPath = (env = {}) => {
  let path = '/assets/'
  if (env.production) {
    path = '/assets/'
  }
  return path
}

module.exports = (env = {}) => publicPath(env)
