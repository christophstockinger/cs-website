const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const minimizer = (env = {}) => {
  const minimizer = []

  if (env.production) {
    minimizer.push(
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        },
        extractComments: true
      })
    )
  }

  if (env.production) {
    minimizer.push(new CssMinimizerPlugin({}))
  }

  return minimizer
}

module.exports = (env = {}) => minimizer(env)
