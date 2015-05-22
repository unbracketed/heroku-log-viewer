var getConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'


module.exports = getConfig({
  // a boolean specifying whether to minify, output files, etc
  isDev: env === 'development',

  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public'
})
