import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'
import Email from '../Controllers/emailValidator'

const Schema = mongoose.Schema

/**
  * @description Customers Domain Model Mongoose Schema
  * @param Email
  * Class which is located in emailValidator.js within the Controllers Folder
  * this class ensures only true emails are stored to the database.
  * @param Invoice_AdrsID
  * Refers to an Address document stored within (Addresses Collection) within the database
  * which has been choosen as the customers default mailing address for
  * invoicing and purchasing purposes.
  */
const customersSchema = new Schema({
  cusID: { type: Number, min: 11, max: 11, required: true },
  companyName: { type: String, max: 50 },
  title: { type: String, max: 10, required: true },
  firstName: { type: String, max: 25, required: true },
  surname: { type: String, max: 25, required: true },
  mobileContact: { type: Number, max: 15 },
  landlineContact: { type: Number, max: 15 },
  email: { type: Email, required: true },
  loginPassword: { type: String, max: 15, required: true },
  postZipCode: { type: String, max: 8, required: true },
  mobileNotifications: { type: String, max: 8, required: true },
  dateCreated: { type: String, max: 8, required: true },
  invoiceAdrsID: { type: Number, min: 15, max: 15, required: true }
})

// Allows Datatables to access Customers data
customersSchema.plugin(dataTables)

// Creates the Mongoose model
const Customers = mongoose.model('CustomersModel', customersSchema)

// This exports the model.
export default Customers
