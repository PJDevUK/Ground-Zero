import mongoose from 'mongoose'
import dataTables from 'mongoose-datatables'

const Schema = mongoose.Schema

/**
  * @description Bookings Domain Model Mongoose Schema
  * @param CusID
  * Refers to the Customer assoiciated with this booking.
  * The Customers document is stored within (Customers Collection) within the database
  * which can be accessed with the CusID value.
  * @param HauliersID
  * Refers to the Haulier assoiciated with this booking.
  * The Hauliers document is stored within (Hauliers Collection) within the database
  * which can be accessed with with the HauliersID value.
  */
const bookingsSchema = new Schema({
  BookingID: { type: Number, min: 11, max: 11, required: true },
  CusID: { type: Number, min: 11, max: 11, required: true },
  HaulierID: { type: Number, min: 11, max: 11, required: true },
  Handler_Name: { type: String, max: 20, required: true },
  Haulier_Internal_Ref: { type: String, max: 30 },
  Customers_Handler_Name: { type: String, max: 20 },
  Cust_Internal_Ref: { type: String, max: 30 },
  Booking_Date: { type: Date, required: true },
  Trialer_Type: { type: String, required: true, max: 10 },
  Gross_Weight_Kg: { type: Number, max: 1000000000, required: true },
  Tail_Lift_Collection: { type: Boolean, required: true },
  Tail_Lift_Delivery: { type: Boolean, required: true },
  Collection_Ref: { type: String, max: 25 },
  Collection_Contact: { type: String, max: 70 },
  Collection_Date: { type: Date, required: true },
  Collection_Address: { type: String, required: true, max: 200 },
  Delivery_Ref: { type: String, max: 25 },
  Delivery_Contact: { type: String, max: 70 },
  Delivery_Date: { type: Date, required: true },
  Delivery_Address: { type: String, required: true, max: 200 },
  Accepted_Haulier_Rate: { type: Number, required: true },
  Equipment_Required: { type: String, max: 50 },
  Additional_Notes: { type: String, max: 500 },
  Driver_Instructions: { type: String, max: 200 }
})

// Allows Datatables to access Bookings data
bookingsSchema.plugin(dataTables)

// Creates the Mongoose model
const Bookings = mongoose.model('BookingsModel', bookingsSchema)

// This exports the model.
export default Bookings
