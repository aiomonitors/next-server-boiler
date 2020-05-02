const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        jimp: 'empty'
      }
    }

    return config
  }
})