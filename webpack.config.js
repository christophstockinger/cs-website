module.exports = (env = {}) => {
  const config = require('./webpack/config')(env)
  const aliase = require('./webpack/aliase.config')
  const entrypoints = require('./webpack/entrypoints.config')(env)
  const extensions = require('./webpack/extensions.config')
  const plugins = require('./webpack/plugins.config')(env)
  const rules = require('./webpack/rules.config')(env)
  const mode = env.production ? 'production' : 'development'
  const optimization = require('./webpack/optimization.config')(env)
  const devServer = require('./webpack/devServer.config')


  return Object.assign({}, config, {
    entry: entrypoints,
    mode: mode,
    module: {
      rules: rules
    },
    optimization: optimization,
    plugins: plugins,
    resolve: {
      extensions: extensions,
      alias: aliase
    },
    devServer: devServer
  })
}
