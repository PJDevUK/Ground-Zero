import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Addresses Domain Model Mongoose Schema
  * @param CusID
  * Refers to the Customer assoiciated with a particular Address.
  * The Customers document is stored within (Customers Collection) within the database
  * which can be accessed with the CusID value.
  */
const addressesSchema = new Schema({
  AdrsID: { type: Number, min: 11, max: 11, required: true },
  CusID: { type: Number, min: 11, max: 11, required: true },
  Addressee_Full_Name: { type: String, max: 30, required: true },
  Address_Line_1: { type: String, max: 40 },
  Address_Line_2: { type: String, max: 40 },
  Address_Line_3: { type: String, max: 40 },
  Address_Line_4: { type: String, max: 40 },
  City_Town: { type: String, max: 15, required: true },
  County_State: { type: String, max: 15, required: true },
  Country: { type: String, max: 15, required: true },
  Post_Zip_Code: { type: String, max: 8, required: true }
})

// Allows Datatables to access Addresses data
addressesSchema.plugin(dataTables)

// Creates the Mongoose model
const Addresses = mongoose.model('AddressesModel', addressesSchema)

// This exports the model.
export default Addresses
