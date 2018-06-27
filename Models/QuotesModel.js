import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Quotes Domain Model Mongoose Schema
  * @param hauliersID
  * Refers to the Haulier who has submitted the quote.
  * The Hauliers document is stored within (Hauliers Collection) within the database
  * which can be accessed with with the HauliersID value.
  * @param enquiryID
  * This is the EnquiryID which relates to the enquiry which this quote
  * Has been provided too.
  */
const quotesSchema = new Schema({

  quoteID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  enquiryID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  hauliersID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  haulierHandlersName: { type: String, max: 20, required: true },
  quotedRate: { type: Number, required: true }

}, {
  timestamps: { timestamps: true }
})

// Allows Datatables to accessQuotes data
quotesSchema.plugin(dataTables)

// Creates the Mongoose model
const Quotes = mongoose.model('QuotesModel', quotesSchema)

// This exports the model.
export default Quotes
