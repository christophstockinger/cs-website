const extension = (env = {}) => {
  const extension = []

  extension.push('.scss')
  extension.push('.css')
  extension.push('.js')

  return extension
}

module.exports = (env = {}) => extension(env)
