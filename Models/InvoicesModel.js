import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Hauliers Domain Model Mongoose Schema
  * @param invoiceStatus
  * Array of Numbers 0-3. Represents Invoices status.
  * e.g 0= Waiting Payment, 1= Payment Overdue, 2= Paid, 3= Other
  * @param AdrsID
  * Refers to an Address document stored in (Addresses Collection) within the database
  * which has been choosen as the Hauliers mailing address for administrative purposes.
  * @param HauliersID
  * Refers to the Haulier assoiciated with this Invoice.
  * The Hauliers document is stored within (Hauliers Collection) within the database
  * which can be accessed with with the HauliersID value.
  * @param QuoteID
  * This is the QuoteID from which this Invoice is related to. For records.
  * @param EnquiryID
  * This is the EnquiryID which relates to the enquiry from which this Invoice is
  * being generated.
  * @param hauliersOwnRef
  * Only populated if haulier supplys a Company reference number.
  * @param additionalNotes
  * For any extra information to assit with the booking and invoicing process and for
  * records.
  * @param collectionInstructions
  * Only populated if the collection location and/or driver require
  * additional information not already provided.
  * @param deliveryInstructions
  * Same as above but for delivery.
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
  additionalNotes: { type: String, max: 500 },

  collectionDate: { type: Date },
  collectAdrsID: { type: Number, min: 15, max: 15, required: true },
  collectionContact: { type: String, max: 70 },
  collectionInstructions: { type: String, max: 200 },

  deliveryDate: { type: Date },
  deliveryAdrsID: { type: Number, min: 15, max: 15, required: true },
  deliveryContact: { type: String, max: 70 },
  deliveryInstructions: { type: String, max: 200 },

  quotedRate: { type: Number },
  vatFee: { type: Number, required: true },
  adminFee: { type: Number, required: true },
  totRate: { type: Number, required: true },
  paymentTerms: { type: String, max: 70 },
  invoiceStatus: { type: String },
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
