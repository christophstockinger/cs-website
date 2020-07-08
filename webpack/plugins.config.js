const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const plugins = (env = {}) => {
  const plugins = []

  plugins.push(new webpack.NoEmitOnErrorsPlugin())

  if (env.development) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODEENV': JSON.stringify('production')
      })
    )
  } else {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODEENV': JSON.stringify('development')
      })
    )
  }

  plugins.push(
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: env.development,
      filename: '../index.html',
      template: path.join(
        __dirname,
        `../build/templates/index-${
          env.production ? 'production' : 'development'
        }.html`
      ),
      minify: env.production
        ? {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
        : false,
      inject: env.production ? false : true,
      hash: env.production ? false : true,
      title: '🚀 Welcome @ Christoph Stockinger ✌🏻 | Christoph Stockinger | cloud.christophstockinger.de'
    })
  )

  if (env.development) {
    plugins.push(new HtmlWebpackHarddiskPlugin())
  }

  if (env.production) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css'
      })
    )
  }

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
  }

  plugins.push(new VueLoaderPlugin())

  plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/shared/images/favicon'),
          to: path.join(__dirname, '../dist/assets/images/favicon')
        }
      ]
    })
  )

  return plugins
}

module.exports = (env = {}) => plugins(env)
