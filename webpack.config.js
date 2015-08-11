var getConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'

var config = getConfig({
  isDev: env === 'development',
  in: 'src/app.js',
  out: 'public',
  port: process.env.PORT || 25025,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'Heroku Manager',
        //head: '<link rel="stylesheet" href="">'
        head: '<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.blue_grey-light_blue.min.css" /> <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">',
        css: '//fonts.googleapis.com/icon?family=Material+Icons'
      })
    }
  }
})

// config.module.loaders[0].loaders[1] = 'babel-loader?stage=0'


module.exports = config
