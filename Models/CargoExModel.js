import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'
import Email from '../Controllers/emailValidator'

const Schema = mongoose.Schema

const cargoExSchema = new Schema({
  CompanyID: { type: Number, max: 11, min: 11, required: true },
  Company_Name: { type: String, max: 25, required: true },
  Addresses_Adrs_ID: { type: Number, max: 11, required: true },
  Registration_Num: { type: Number, max: 15, required: true },
  Contact_Num: { type: Number, max: 14, min: 11, required: true },
  Contact_Email: { type: Email, required: true },
  Vat_Num: { type: String, max: 25, required: true }
})

// Allows Datatables to read Admin data correctly
cargoExSchema.plugin(dataTables)

// Create the Mongoose model with adminsSchema
const CargoEx = mongoose.model('CargoExModel', cargoExSchema)

// This exports the model.
export default CargoEx
