/* If you are using ES6's import syntax in your application's entry point,
you should instead import the polyfill at the top of the entry point to
ensure the polyfills are loaded first: */

require('babel-register')({
  presets: [ 'env' ]
})

// Import the rest of our application.
require('./app.js')
