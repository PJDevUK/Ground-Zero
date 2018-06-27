import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Payment Accounts Domain Model Mongoose Schema
  */
const paymentAccountSchema = new Schema({

  paymentAccountID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  paymentDescription: { type: String, max: 100 },
  currencyCode: { type: String, min: 3, max: 3, required: true },
  BIC: { type: String, max: 15, required: true },
  IBAN: { type: String, max: 30, required: true },
  sortCode: { type: Number, max: 999999, min: 9999, required: true },
  accountNumber: { type: Number, max: 99999999999, required: true }

}, {
  timestamps: { timestamps: true }
})

// Allows Datatables to access Payments acc data
paymentAccountSchema.plugin(dataTables)

// Creates the Mongoose model
const PaymentsAcc = mongoose.model('PaymentAcc', paymentAccountSchema)

// This exports the model.
export default PaymentsAcc
