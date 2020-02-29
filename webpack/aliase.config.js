const path = require('path')

const aliase = (env = {}) => {
  const aliase = {
    '@src': path.join(__dirname, '../src/'),
    '@com': path.join(__dirname, '../src/components/'),
    '@mod': path.join(__dirname, '../src/modules/'),
    '@util': path.join(__dirname, '../src/utilities/')
  }

  return aliase
}

module.exports = (env = {}) => aliase(env)
