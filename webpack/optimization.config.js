const optimization = (env = {}) => {
  // Minimizer
  const minimizer = require('./minimizer.config')(env)

  let optimization = {
    minimizer: minimizer
  }

  // if (env.production) {
  //   optimization = Object.assign({}, optimization, {
  //     splitChunks: {
  //       chunks: 'all',
  //       cacheGroups: {
  //         styles: {
  //           name: 'styles',
  //           test: /\.css$/,
  //           chunks: 'all',
  //           enforce: true
  //         }
  //       }
  //     }
  //   })
  // }

  return optimization
}

module.exports = (env = {}) => optimization(env)
