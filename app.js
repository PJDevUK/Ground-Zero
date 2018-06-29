import 'babel-polyfill'
import express from 'express'
import es6Renderer from 'express-es6-template-engine'
import bodyParser from 'body-parser'
import path from 'path'
import db from 'mongoose'
import config from './config'
import router from './routes/index'
import populateEmptyDB from './controllers/testDataInjector'
// Load environment variables using dotenv
require('dotenv').config({ path: './envSettings.env' })

var app = express()

app.use('/', router)
app.use('/', express.static(path.join(__dirname, 'public')))

app.engine('html', es6Renderer)
app.set('view engine', 'html')

// App access to views folder
app.set('views', './views')

// Allows Express to use body-parser tool to handle our JSON data.
app.use(bodyParser.json())

// Allows access to jquery, css, fonts, images to views
app.use(bodyParser.urlencoded({ extended: true }))

console.log(process.env.NODE_ENV)
// Force all requests on production to be served over https
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    const secureUrl = 'https://' + req.hostname + req.originalUrl
    res.redirect(302, secureUrl)
  }
  next()
})

const chooseEnviroment = ['development', 'local', 'deploy', 'test']
var useEnv = chooseEnviroment[1]
process.env.NODE_ENV = useEnv

// Connection to DB server depending on enviroment

try {
  db.connect(config.configURL(useEnv), function (error) {
    if (error) {
      console.log('DB CONNECTION ISSUE')
      console.log(error)
    } else {
      console.log('Connected to DB\nEnviroment => ' + useEnv)
      populateEmptyDB()
    }
  })
} catch (error) {
  console.log('Check Internet Connection')
}

// Set Port
let port = process.env.PORT || 3000

// Request Listener
app.listen(port, function () {
  console.log('Listening on Port ' + port)
})
