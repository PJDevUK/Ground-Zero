import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

const quotesSchema = new Schema({
    quoteID: { type: Number, min: 11, max: 11, required: true },
    enquiryID: { type: Number, min: 11, max: 11, required: true },
    haulierID: { type: Number, min: 11, max: 11, required: true },
    haulierHandlersName: { type: String, max: 20, required: true },
    quotedRate: { type: Number, required: true }
})

// Allows Datatables to accessQuotes data
quotesSchema.plugin(dataTables)

// Creates the Mongoose model
const Quotes = mongoose.model('QuotesModel', quotesSchema)

// This exports the model.
export default Quotes