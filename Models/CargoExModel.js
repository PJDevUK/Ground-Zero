import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'
import Email from '../Controllers/emailValidator'

const Schema = mongoose.Schema

/**
  * @description Cargo Exchange domain model and Mongoose Schema
  * @param Email
  * Class which is located in emailValidator.js within the Controllers Folder
  * this class ensures only true emails are stored to the database.
  * @param Company_AdrsID
  * Refers to an Address document stored within (Addresses Collection) within the database
  * which has been choosen as the default company address.
  */
const cargoExSchema = new Schema({

  companyID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  companyName: { type: String, max: 25, required: true },
  companyAdrsID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  registrationNum: { type: Number, max: 15, required: true },
  contactNum: { type: Number, max: 14, min: 11, required: true },
  contactEmail: { type: Email, required: true },
  vatNum: { type: String, max: 25, required: true }

}, {
  timestamps: { timestamps: true }
})

// Allows Datatables to access cargoEx data
cargoExSchema.plugin(dataTables)

// Creates the Mongoose model
const CargoEx = mongoose.model('CargoEx', cargoExSchema)

export default CargoEx
