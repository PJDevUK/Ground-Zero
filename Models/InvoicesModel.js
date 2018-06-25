import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Hauliers Domain Model Mongoose Schema
  * @param AdrsID
  * Refers to an Address document stored in (Addresses Collection) within the database
  * which has been choosen as the Hauliers mailing address for administrative purposes.
  */
const invoicesSchema = new Schema({
  invoiceID: { type: Number, min: 11, max: 11, required: true },
  enquiryID: { type: Number, min: 11, max: 11, required: true },
  bookingID: { type: Number, min: 11, max: 11, required: true },
  haulierID: { type: Number, min: 11, max: 11, required: true },
  cusID: { type: Number, min: 11, max: 11, required: true },
  quoteID: { type: Number, min: 11, max: 11, required: true },

  hauliersOwnRef: { type: String, max: 30, required: true },
  hauliersHandlersName: { type: String, max: 20, required: true },
  cusOwnRef: { type: String, max: 30 },
  cusHandlersName: { type: String, max: 20 },

  trialerType: { type: String, max: 10, required: true },
  grossWeightKg: { type: Number, required: true },
  equipRequired: { type: String, max: 50 },
  tailLiftCollection: { type: Boolean, default: false },
  tailLiftDelivery: { type: Boolean, default: false },
  collectionDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
  additionalNotes: { type: String, max: 500 },

  collectionRef: { type: String, max: 25 },
  collectAdrsID: { type: Number, min: 15, max: 15, required: true },
  collectionContact: { type: String, max: 70 },
  collectionInstructions: { type: String, max: 200 },

  deliveryRef: { type: String, max: 25 },
  deliveryAdrsID: { type: Number, min: 15, max: 15, required: true },
  deliveryContact: { type: String, max: 70 },
  deliveryInstructions: { type: String, max: 200 },

  quotedRate: { type: Number },
  vatFee: { type: Number, required: true },
  adminFee: { type: Number, required: true },
  totRate: { type: Number, required: true },
  paymentTerms: { type: String, max: 70 },
  invoiceStatus: { type: String, enum: ['Waiting Payment', 'Payment Overdue', 'Paid', 'Other'] },
  archiveSchedule: { type: Date },
  totNetValue: { type: Number, required: true },
  dateCreated: { type: Date, default: Date.now, required: true }
})

// Allows Datatables to access Addresses data
invoicesSchema.plugin(dataTables)

// Creates the Mongoose model
const Invoices = mongoose.model('HauliersModel', invoicesSchema)

// This exports the model.
export default Invoices
