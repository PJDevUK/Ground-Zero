// Development enviroment DB URL string returned.
const development = 'mongodb://snwsu:snwsu1@ds014578.mlab.com:14578/shift-ninja-db'

// Test enviroment DB URL string returned.
const test = 'mongodb://snwsu:snwsu1@ds014578.mlab.com:14578/shift-ninja-db'

// Deployment enviroment DB URL string returned.
const deploy = 'mongodb://snwsu:snwsu1@ds014578.mlab.com:14578/shift-ninja-db'

// Local enviroment DB URL string returned.
const localDB = 'mongodb://localhost/CEX'

// Evniroment choice param returns the related DB url string
function configURL (enviroment) {
  switch (enviroment) {
    case
      'development':
      return development
    case
      'test':
      return test
    case
      'deploy':
      return deploy
    case
      'local':
      return localDB
    default:
      return development
  }
}

// Exports the module
export default { configURL }
