const path = require('path')

const fileLoaders = (env = {}) => {
  const fileLoaders = []
  const publicPath = require('./publicPath.config.js')(env)

  // SVG Files in Images Folder
  fileLoaders.push({
    test: /\.(svg)$/,
    include: [
      path.join(__dirname, '../src/shared/images')
    ],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: path.join(publicPath, 'images/')
      }
    }
  })

  // PNG, JPG, GIF Files in Images Folder
  fileLoaders.push({
    test: /\.(png|jpg|gif)$/,
    include: [
      path.join(__dirname, '../src/shared/images')
    ],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: path.join(publicPath, 'images/')
      }
    }
  })

  fileLoaders.push({
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        publicPath: path.join(publicPath, 'fonts/')
      }
    }
  })

  return fileLoaders
}

module.exports = (env = {}) => fileLoaders(env)
