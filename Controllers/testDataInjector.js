import Customers from '../models/CustomersModel'
import Bookings from '../models/BookingsModel'

function injectCustomer () {
  // This populates an empty DB with Admins if non exist.
  console.log('INJECTING NEW CUSTOMER')
  Customers.find({}, function (err, customersExist) {
    if (err) {
      console.log(err)
    }
    if (!customersExist.length) {
      var data = []
      data.push({
        cusID: 12345678912,
        companyName: 'Limited Ltd',
        title: 'Mr',
        firstName: 'Leeroy',
        surname: 'Jenkins',
        mobileContact: 10000000000,
        landlineContact: 100000000000,
        email: 'here@there.com',
        loginPassword: 'supdudes',
        postZipCode: 'TS13 6TY',
        mobileNotifications: false,
        dateCreated: Date.now,
        invoiceAdrsID: 11111111111
      })
      Customers.create(data, function (err) {
        if (err == null) {
          console.log('Customer Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function injectHaulier () { }

function injectQuote () { }

function injectBooking () {
  // This populates an empty DB with Admins if non exist.
  console.log('INJECTING NEW BOOKING')
  Bookings.find({}, function (err, bookingsExist) {
    if (err) {
      console.log(err)
    }
    if (!bookingsExist.length) {
      var data = []
      data.push({
        bookingID: 11111111111,
        cusID: 11111111111,
        haulierID: 11111111111,
        quoteID: 11111111111,
        enquiryID: 11111111111,

        haulierInternalRef: 'abc123',
        handlerName: 'Limited Ltd',
        customersHandlerName: ' Mr acustomer handler',
        cusInternalRef: '123abc',

        trialerType: 'Flatbed 13',
        grossWeightKg: 300,
        tailLiftCollection: false,
        tailLiftDelivery: false,
        equipRequired: 'Special Here',
        additionalNotes: 'Dont come without sandwiches',

        collectionRef: 'collectRefHere',
        collectionContact: 'Speak to Johnny Johnson',
        collectionDate: Date.now(),
        collectionInstructions: 'Dont leave without manifest',

        deliveryRef: 'deliveryRefHere',
        deliveryContact: 'Speak to Nathen on Delivery',
        deliveryDate: Date.now(),
        deliveryInstructions: 'Theres a low bridge near depot route down A123 to avoid',

        quotedRate: 780,
        customerInvoiced: true
      })
      Bookings.create(data, function (err) {
        if (err == null) {
          console.log('Booking Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

export default { injectCustomer, injectHaulier, injectQuote, injectBooking }
