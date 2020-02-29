const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const postcssFlexBugs = require('postcss-flexbugs-fixes')

const BROWSERS = ['last 2 versions', '>1%', 'IE 11']

const styleLoaders = (env = {}) => {
  const styleLoaders = []

  if (env.production) {
    styleLoaders.push({
      loader: MiniCssExtractPlugin.loader
    })
  } else {
    styleLoaders.push({
      loader: 'style-loader',
      options: {
        sourceMap: true,
        convertToAbsoluteUrls: true
      }
    })
  }

  styleLoaders.push({
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: 2,
      minimize: env.production
    }
  })

  styleLoaders.push({
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: loader => [
        autoprefixer({
          browsers: BROWSERS
        }),
        postcssFlexBugs
      ]
    }
  })

  styleLoaders.push({
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  })

  return styleLoaders
}

module.exports = (env = {}) => styleLoaders(env)
