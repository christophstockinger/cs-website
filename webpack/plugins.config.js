const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
      title:
        '🚀 Welcome @ Christoph Stockinger ✌🏻 | Christoph Stockinger | www.christophstockinger.de',
      base: '/',
      meta: {
        'Content-Security-Policy': {
          'http-equiv': 'cache-control',
          default: 'max-age=0'
        },
        'Content-Security-Policy': {
          'http-equiv': 'cache-control',
          default: 'no-cache'
        },
        viewport: 'width=device-width, initial-scale=1.0',
        description:
          'Christoph Stockinger is a full stack web developer with a focus on developing unique digital products. He is the founder of his label Coding77 by Christoph Stockinger. With his label he is open for web projects or freelancer requests.',
        robots: 'index,follow',
        author: 'Christoph Stockinger, Pandurenweg 25, 94469 Deggendorf',
        publisher: 'Christoph Stockinger, Pandurenweg 25, 94469 Deggendorf',
        version: '7.0',
        copyright: 'Christoph Stockinger',
        'og:title':
          '🚀 Welcome @ Christoph Stockinger ✌🏻 | Christoph Stockinger | www.christophstockinger.de',
        'og:description':
          'Christoph Stockinger is a full stack web developer with a focus on developing unique digital products. He is the founder of his label Coding77 by Christoph Stockinger. With his label he is open for web projects or freelancer requests.',
        'og:image': '/assets/images/christoph-stockinger.jpg',
        'og:locale': 'de_DE',
        'og:type': 'website',
        'og:url': 'https://www.christophstockinger.de'
      }
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

  plugins.push(new VueLoaderPlugin())

  const copyPluginPatterns = []

  copyPluginPatterns.push({
    from: path.join(__dirname, '../src/shared/images/favicon'),
    to: path.join(__dirname, '../dist/assets/images/favicon')
  })

  if (env.production) {
    copyPluginPatterns.push({
      from: path.join(__dirname, '../build/robots.txt'),
      to: path.join(__dirname, '../dist/')
    })
    copyPluginPatterns.push({
      from: path.join(__dirname, '../build/sitemap.xml'),
      to: path.join(__dirname, '../dist/')
    })
  }

  plugins.push(
    new CopyPlugin({
      patterns: copyPluginPatterns
    })
  )

  return plugins
}

module.exports = (env = {}) => plugins(env)
