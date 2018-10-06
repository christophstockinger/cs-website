const path = require('path')

const fileLoader = (env = {}) => {
  const fileLoader = []

  // SVG Files in Images Folder
  fileLoader.push({
    test: /\.(svg)$/,
    include: [path.join(__dirname, '../src/assets/images')],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: '/assets/images/'
      }
    }
  })

  // PNG, JPG, GIF Files in Images Folder
  fileLoader.push({
    test: /\.(png|jpg|gif)$/,
    include: [path.join(__dirname, '../src/assets/images')],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: '/assets/images/'
      }
    }
  })

  // Favicon
  fileLoader.push({
    test: /\.(png|xml|ico|json)$/,
    include: [path.join(__dirname, '../src/assets/favicon')],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'favicon/',
        publicPath: '/assets/favicon/'
      }
    }
  })

  fileLoader.push({
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        publicPath: '/assets/fonts/'
      }
    }
  })

  return fileLoader
}

module.exports = (env = {}) => fileLoader(env)
