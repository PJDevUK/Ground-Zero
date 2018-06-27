import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Enquiries Domain Model Mongoose Schema
  *
  */
const enquiriesSchema = new Schema({

  enquiryID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  cusID: { type: Number, min: 10000000000, max: 99999999999, required: true },
  cusHandlersName: { type: String, max: 20 },
  dateCreated: { type: Date, default: Date.now, required: true },
  trialerType: { type: String, max: 10, required: true },
  grossWeightKg: { type: Number, max: 1000000000, required: true },
  equipmentRequired: { type: String, max: 50 },
  tailLiftCollection: { type: Boolean, default: false },
  tailLiftDelivery: { type: Boolean, default: false },
  collectionDate: { type: Date },
  collectionLocation: { type: String, max: 20, required: true },
  deliveryLocation: { type: String, max: 20, required: true },
  loadDetails: { type: String, max: 500 },
  autoAccept: { type: Boolean, default: false },
  acceptPrice: { type: Number },
  deleteScheduled: { type: Date, required: true }
})

// Allows Datatables to access Customers data
enquiriesSchema.plugin(dataTables)

// Creates the Mongoose model
const Enquiries = mongoose.model('EnquiriesModel', enquiriesSchema)

// This exports the model.
export default Enquiries
