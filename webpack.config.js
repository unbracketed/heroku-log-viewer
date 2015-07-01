var getConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'

var config = getConfig({
  isDev: env === 'development',
  in: 'src/app.js',
  out: 'public',
  port: process.env.PORT || 25025
})

config.module.loaders[0].loaders[1] = 'babel-loader?stage=0'

module.exports = config
