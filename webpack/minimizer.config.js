const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const minimizer = (env = {}) => {
  const minimizer = []

  if (env.production) {
    minimizer.push(
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
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
    minimizer.push(new OptimizeCSSAssetsPlugin({}))
  }

  return minimizer
}

module.exports = (env = {}) => minimizer(env)