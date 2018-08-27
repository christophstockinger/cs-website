const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const plugins = (env = {}) => {
  const plugins = []

  plugins.push(new webpack.HotModuleReplacementPlugin())

  plugins.push(new webpack.NoEmitOnErrorsPlugin())

  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    )
  } else {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    )
  }

  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })
  )

  if (env.production) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      })
    )

    plugins.push(new SpriteLoaderPlugin())
  }

  return plugins
}

module.exports = (env = {}) => plugins(env)
