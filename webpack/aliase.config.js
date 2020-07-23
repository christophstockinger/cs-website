const path = require('path')

const aliase = {
  'vue': '@vue/runtime-dom',
  '@src': path.join(__dirname, './../src'),
  '@app': path.join(__dirname, './../src/app'),
  '@cs': path.join(__dirname, './../src/patterns'),
  '@shared': path.join(__dirname, './../src/shared')
}

module.exports = aliase
