module.exports = {
  rollup (config, options) {
    if (options.environment === 'development') {
       // redirect dev build to nowhere
       config.output.file = '/dev/null'
    } else {
      // rename prod build to index.js
      config.output.file = './dist/index.js'
    }

    return config
  }
}