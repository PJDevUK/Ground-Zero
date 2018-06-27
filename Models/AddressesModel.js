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

  AdrsID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  CusID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  AdrsFullName: { type: String, max: 30, required: true },
  AdrsLine_1: { type: String, max: 40 },
  AdrsLine_2: { type: String, max: 40 },
  AdrsLine_3: { type: String, max: 40 },
  AdrsLine_4: { type: String, max: 40 },
  CityTown: { type: String, max: 15, required: true },
  CountyState: { type: String, max: 15, required: true },
  Country: { type: String, max: 15, required: true },
  PostZipCode: { type: String, max: 8, required: true }
})

// Allows Datatables to access Addresses data
addressesSchema.plugin(dataTables)

// Creates the Mongoose model
const Addresses = mongoose.model('AddressesModel', addressesSchema)

// This exports the model.
export default Addresses
