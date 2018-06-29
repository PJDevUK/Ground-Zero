
import express from 'express'
import Customers from '../models/CustomersModel.js'
const router = express.Router()

/* DIRECTS TO HOME PAGE */
router.get('/', function (res) {
  res.render('home')
})

/* GET ALL CUSTOMERS */
router.get('/listcustomers', function (res, next) {
  Customers.find(function (err, getAll) {
    if (err) return next(err)

    res.json(getAll)
  })
})

/* GET SINGLE CUSTOMER BY ID */
router.get('/findone/:id', function (req, res, next) {
  Customers.findById(req.params.id, function (err, byId) {
    if (err) return next(err)

    res.json(byId)
  })
})

/* SAVE CUSTOMER */
router.post('/savecustomer', function (req, res, next) {
  Customers.create(req.body, function (err, saveCustomer) {
    if (err) return next(err)

    res.json(saveCustomer)
  })
})

/* UPDATE CUSTOMER */
router.put('/updatecustomer/:id', function (req, res, next) {
  Customers.findByIdAndUpdate(req.params.id, req.body, function (err, updateCustomer) {
    if (err) return next(err)

    res.json(updateCustomer)
  })
})

/* DELETE CUSTOMER */
router.delete('/deletecustomer/:id', function (req, res, next) {
  Customers.findByIdAndRemove(req.params.id, req.body, function (err, deleteByID) {
    if (err) return next(err)

    res.json(deleteByID)
  })
})

export default router
