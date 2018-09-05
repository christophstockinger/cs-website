const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const minimizer = (env = {}) => {
  const minimizer = []

  if (env.production) {
    minimizer.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    )

    minimizer.push(new OptimizeCSSAssetsPlugin({}))
  }
  return minimizer
}

module.exports = (env = {}) => minimizer(env)
