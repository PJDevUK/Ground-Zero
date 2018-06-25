import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'
import Email from '../Controllers/emailValidator'

const Schema = mongoose.Schema

/**
  * @description Hauliers Domain Model Mongoose Schema
  * @param AdrsID
  * Refers to an Address document stored in (Addresses Collection) within the database
  * which has been choosen as the Hauliers mailing address for administrative purposes.
  */
const hauliersSchema = new Schema({
  haulierID: { type: Number, min: 11, max: 11, required: true },
  adrsID: { type: Number, min: 11, max: 11 },
  companyName: { type: String, max: 50, required: true },
  email: { type: Email, required: true },
  contactLandline: { type: Number, max: 13 },
  dateCreated: { type: Date, default: Date.now }
})

// Allows Datatables to access Addresses data
hauliersSchema.plugin(dataTables)

// Creates the Mongoose model
const Hauliers = mongoose.model('HauliersModel', hauliersSchema)

// This exports the model.
export default Hauliers