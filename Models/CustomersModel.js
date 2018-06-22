import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'
import Email from '../Controllers/emailValidator'

const Schema = mongoose.Schema

/**
  * @description Create Administrator domain model and schema
  * @param Email
  * Class which is located in emailValidator.js within the Controllers Folder
  * this class ensures only true emails are stored to the database.
  * @param Invoice_AdrsID
  * Refers to an Address document stored within (Addresses Collection) within the database
  * which has been choosen as the customers default mailling for Invoicing.
  */
const customersSchema = new Schema({
  CusID: { type: Number, min: 11, max: 11, required: true },
  Company_Name: { type: String, max: 50 },
  Title: { type: String, max: 10, required: true },
  First_Name: { type: String, max: 25, required: true },
  Surname: { type: String, max: 25, required: true },
  Mobile_Contact: { type: Number, max: 15 },
  Landline_Contact: { type: Number, max: 15 },
  Email: { type: Email, required: true },
  Login_Password: { type: String, max: 15, required: true },
  Post_Zip_Code: { type: String, max: 8, required: true },
  Mobile_Notifications: { type: String, max: 8, required: true },
  Date_Created: { type: String, max: 8, required: true },
  Invoice_AdrsID: { type: Number, min: 11, max: 11, required: true }
})

/**
* THIS PLUGIN IS PRE-EMPTIVE
* Delete plugin and import if unused
* This should be done before deployment to avoid package deprication
* conflicts
*/
customersSchema.plugin(dataTables)

// Create the Mongoose model with adminsSchema
const Customers = mongoose.model('Addresses', customersSchema)

// This exports the model.
export default Customers
