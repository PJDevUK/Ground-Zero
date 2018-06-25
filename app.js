
import express from 'express'
import referrerPolicy from 'referrer-policy'
import cors from 'cors'
import es6Renderer from 'express-es6-template-engine'
import bodyParser from 'body-parser'
import path from 'path'

var app = express()

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

var chooseEnviroment = ['development', 'local', 'deploy', 'test']
var useEnv = chooseEnviroment[0]
process.env.NODE_ENV = useEnv
let me = 'sick'
console.log(me)
/**
 * Middleware which handles errors on the rejection of a promise
 * @param err this is the error message
 * @param req this is what was requested from the client
 * @param res is the response given back to client
 */
app.use(function (err, req, res, next) {
  res.header('Content-Security-Policy', "default-src 'self'; script-src 'self' 'https://apis.google.com'; Referrer-Policy 'origin-when-cross-origin';object-src 'none';img-src 'self' 'https:' 'data:';media-src 'self';frame-src 'https://www.google.co.uk/maps/';font-src 'self' 'https://www.w3.org/';connect-src 'self';style-src 'self' 'https://fonts.googleapis.com/';")
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.locals.messages = require('express-messages')(req, res)
  res.status(422).send({ error: err.message })
  res.tatus(200).send({ error: err.message })

  // Returns the error in String form to the console for debugging
  console.log(err, req, res)
})

// Set Port
let port = process.env.PORT || 3000

// Request Listener
app.listen(port, function () {
  console.log('>>>> Listening on Port ' + port)
})

/**
 * GOOGLE FOLLOWING
 * Express Session Middleware(require('express-session')
 * ES^ Node
 */

// Express Session Middleware
/* expressApp.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
*/

// Allows Express access to recruits.js for HTTP verb functions.
// app.use('/shiftninja', require('./routers/recruits'));
// Ensures public folder is staic and available for assets on clientside
// app.use('/shiftninja', join(__dirname, 'public'));
