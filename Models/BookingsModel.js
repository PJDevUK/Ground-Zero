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
  * @param QuoteID
  * This is the QuoteID from which this booking is being created with.
  * This is needed to populate some of the webpage fields.
  * @param EnquiryID
  * This is the EnquiryID which relates to the enquiry from which this booking is
  * using to populate some of the webpage fields.
  */
const bookingsSchema = new Schema({

  bookingID: { type: Number, min: 11, max: 11, required: true },
  cusID: { type: Number, min: 11, max: 11, required: true },
  haulierID: { type: Number, min: 11, max: 11, required: true },
  quoteID: { type: Number, min: 11, max: 11, required: true },
  enquiryID: { type: Number, min: 11, max: 11, required: true },

  haulierInternalRef: { type: String, max: 30 },
  handlerName: { type: String, max: 20, required: true },
  customersHandlerName: { type: String, max: 20 },
  cusInternalRef: { type: String, max: 30 },

  trialerType: { type: String, required: true, max: 10 },
  grossWeightKg: { type: Number, max: 1000000000, required: true },
  tailLiftCollection: { type: Boolean, default: false, required: true },
  tailLiftDelivery: { type: Boolean, default: false, required: true },
  equipRequired: { type: String, max: 50 },
  additionalNotes: { type: String, max: 500 },

  collectionRef: { type: String, max: 25 },
  collectionContact: { type: String, max: 70 },
  collectionDate: { type: Date, required: true },
  collectionInstructions: { type: String, max: 200 },
  /*
  MAY NOT BE REQUIRED HERE
  collectionAdrseeName: { type: String, max: 30, required: true },
  collectionAdrsLine_1: { type: String, max: 40 },
  collectionAdrsLine_2: { type: String, max: 40 },
  collectionAdrsLine_3: { type: String, max: 40 },
  collectionAdrsLine_4: { type: String, max: 40 },
  collectionCityTown: { type: String, max: 15, required: true },
  collectionCountyState: { type: String, max: 15, required: true },
  collectionCountry: { type: String, max: 15, required: true },
  collectionPostZipCode: { type: String, max: 8, required: true }, */

  deliveryRef: { type: String, max: 25 },
  deliveryContact: { type: String, max: 70 },
  deliveryDate: { type: Date, required: true },
  deliveryInstructions: { type: String, max: 200 },
  /*
  MAY NOT BE REQUIRED HERE
  deliveryAdrseeName: { type: String, max: 30, required: true },
  deliveryAdrsLine_1: { type: String, max: 40 },
  deliveryAdrsLine_2: { type: String, max: 40 },
  deliveryAdrsLine_3: { type: String, max: 40 },
  deliveryAdrsLine_4: { type: String, max: 40 },
  deliveryCityTown: { type: String, max: 15, required: true },
  deliveryCountyState: { type: String, max: 15, required: true },
  deliveryCountry: { type: String, max: 15, required: true },
  deliveryPostZipCode: { type: String, max: 8, required: true }, */

  quotedRate: { type: Number, required: true },
  dateCreated: { type: Date, default: Date.now, required: true },
  customerInvoiced: { type: Boolean, required: true, default: false }
})

// Allows Datatables to access Bookings data
bookingsSchema.plugin(dataTables)

// Creates the Mongoose model
const Bookings = mongoose.model('BookingsModel', bookingsSchema)

// This exports the model.
export default Bookings
