
import express from 'express'
const router = express.Router()

/* DIRECTS TO HOME PAGE */
router.get('/', function (response) {
  response.render('home')
})

export default router