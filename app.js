import 'babel-polyfill'
import express from 'express'
import referrerPolicy from 'referrer-policy'
import cors from 'cors'
import es6Renderer from 'express-es6-template-engine'
import bodyParser from 'body-parser'
import path from 'path'
import db from 'mongoose'
import config from './config'
import router from './routers/customers'
import populateEmptyDB from './controllers/testDataInjector'

var app = express()

app.use('/', router)
app.use('/', express.static(path.join(__dirname, 'Public')))

app.engine('html', es6Renderer)

// App access to views folder
app.set('views', './Views')

app.set('view engine', 'html')

// Cross-origin resource sharing (CORS)
app.use(cors())

// Allows Express to use body-parser tool to handle our JSON data.
app.use(bodyParser.json())

// Allows access to jquery, css, fonts, images to views
app.use(bodyParser.urlencoded({ extended: true }))

// Governs which referrer information is sent in the Referrer header.
app.use(referrerPolicy({ policy: 'origin-when-cross-origin' }))

/**
 * Middleware which handles errors on the rejection of a promise
 * @param err this is the error message
 * @param req this is what was requested from the client
 * @param res is the response given back to client
 */
app.use(function (err, req, res) {
  res.header('Content-Security-Policy', "default-src 'self'; script-src 'self' 'https://apis.google.com'; Referrer-Policy 'origin-when-cross-origin';object-src 'none';img-src 'self' 'https:' 'data:';media-src 'self';frame-src 'https://www.google.co.uk/maps/';font-src 'self' 'https://www.w3.org/';connect-src 'self';style-src 'self' 'https://fonts.googleapis.com/';")
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  res.locals.messages = require('express-messages')(req, res)
  res.status(422).send({ error: err.message })
  res.tatus(200).send({ error: err.message })

  console.log(err, req, res)
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
