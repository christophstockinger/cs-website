module.exports = (env = {}) => {
  // Aliase
  const aliase = require('./webpack/aliase.config')(env)

  // Standard Config
  const config = require('./webpack/config')(env)

  // Entrypoints
  const entrypoints = require('./webpack/entrypoints.config')(env)

  // Exetensions
  const extensions = require('./webpack/extension.config')(env)

  // Plugins
  const plugins = require('./webpack/plugins.config')(env)

  // Rules
  const rules = require('./webpack/rules.config')(env)

  // Mode
  const mode = env.production ? 'production' : 'development'

  // Optimization
  const optimization = require('./webpack/optimization.config')(env)

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
    }
  })
}
