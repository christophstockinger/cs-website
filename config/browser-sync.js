/*
 * Browser Sync Configuration
 *
 * This file is a configuration file for browser sync.
 * All option you can find here:
 * https://browsersync.io/docs/options
 */
const path = require('path')
const webpack = require('webpack')
const browserSync = require('browser-sync').create()

const browsersyncConfig = (env = {}) => {
  const webpackConfigFactory = require(path.join(
    __dirname,
    './../webpack.config'
  ))
  const webpackConfigs = webpackConfigFactory(env)
  const compiler = webpack(webpackConfigs)

  const browsersyncConfig = {
    port: 8080,
    ui: {
      port: 8081
    },
    open: false,
    // tunnel: true,
    server: {
      baseDir: './dist',
      middleware: [
        require('webpack-dev-middleware')(compiler, {
          stats: 'errors-only',
          publicPath: webpackConfigs.output.publicPath
        }),
        require('webpack-hot-middleware')(compiler)
      ],
      files: ['./src/*.html.twig'],
      watch: true,
      watchOptions: {
        ignoreInitial: true,
        ignored: [
          '**/*.css',
          '**/*.pcss',
          '**/*.postcss',
          '**/*.sss',
          '**/*.scss',
          '**/*.sass',
          '**/*.svg',
          '**/*.ts',
          '**/*.tsx',
          '**/*.jsx'
        ]
      }
    }
  }

  return browsersyncConfig
}

browserSync.init(browsersyncConfig('development'))
