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

  cusID: { type: Number, required: true },
  companyName: { type: String, max: 50 },
  title: { type: String, max: 10, required: true },
  firstName: { type: String, max: 25, required: true },
  surname: { type: String, max: 25, required: true },
  mobileContact: { type: Number },
  landlineContact: { type: Number },
  email: { type: Email, required: true },
  loginPassword: { type: String, required: true },
  postZipCode: { type: String, required: true },
  mobileNotifications: { type: String, required: true },
  dateCreated: { type: String, required: true },
  invoiceAdrsID: { type: Number, required: true }
})

// Allows Datatables to access Customers data
customersSchema.plugin(dataTables)

// Creates the Mongoose model
const Customers = mongoose.model('Customers', customersSchema)

// This exports the model.
export default Customers
