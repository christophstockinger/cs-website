const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const postcssFlexBugs = require('postcss-flexbugs-fixes')
const path = require('path')

const styleLoaders = (env = {}) => {
  const styleLoaders = []

  if (env.production) {
    styleLoaders.push({
      loader: MiniCssExtractPlugin.loader
    })
  } else {
    styleLoaders.push({
      loader: 'style-loader'
    })
  }

  styleLoaders.push({
    loader: 'css-loader',
    options: {
      url: true,
      sourceMap: true,
      importLoaders: 2
    }
  })

  styleLoaders.push({
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: loader => [autoprefixer(), postcssFlexBugs]
    }
  })

  styleLoaders.push({
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  })

  styleLoaders.push({
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.join(__dirname, '../src/app/theme/theme.scss'),
      ]
    }
  })

  return styleLoaders
}

module.exports = (env = {}) => styleLoaders(env)
