import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Enquiries Domain Model Mongoose Schema
  *
  */
const enquiriesSchema = new Schema({
  Enquiry_ID: { type: Number, min: 11, max: 11, required: true },
  CusID: { type: Number, min: 11, max: 11, required: true },
  Handlers_Name: { type: String, max: 20 },
  Date_Created: { type: Date, default: Date.now, required: true },
  Trialer_Type: { type: String, max: 10, required: true },
  Gross_Weight_Kg: { type: Number, required: true },
  Equipment_Required: { type: String, max: 50 },
  Tail_Lift_Collection: { type: Boolean, default: false },
  Tail_Lift_Delivery: { type: Boolean, default: false },
  Collection_Date: { type: Date, default: Date.now },
  Collection_Location: { type: String, max: 20, required: true },
  Delivery_Location: { type: String, max: 20, required: true },
  Load_Details: { type: String, max: 500 },
  Auto_Accept: { type: Boolean, default: false },
  Accept_Price: { type: Number },
  Delete_Scheduled: { type: Date, required: true }
})

// Allows Datatables to access Customers data
enquiriesSchema.plugin(dataTables)

// Creates the Mongoose model
const Enquiries = mongoose.model('EnquiriesModel', enquiriesSchema)

// This exports the model.
export default Enquiries
