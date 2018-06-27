import Customers from '../models/CustomersModel'
import Bookings from '../models/BookingsModel'
import Addresses from '../models/AddressesModel'
import Quotes from '../models/QuotesModel'
import CargoEX from '../models/CargoExModel'
import Hauliers from '../models/HauliersModel'
import Enquiries from '../models/EnquiriesModel'
import Invoices from '../models/InvoicesModel'
import PaymentAccs from '../models/PaymentsAccModel'

function customer () {
  Customers.find({}, function (err, customersExist) {
    if (err) {
      console.log(err)
    }
    if (!customersExist.length) {
      var customer = []
      customer.push({
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
        invoiceAdrsID: 11111111111
      })
      Customers.create(customer, function (err) {
        if (err == null) {
          console.log('Customer Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function booking () {
  Bookings.find({}, function (err, bookingsExist) {
    if (err) {
      console.log(err)
    }
    if (!bookingsExist.length) {
      var booking = []
      booking.push({
        bookingID: 11111111111,
        cusID: 11111111111,
        haulierID: 11111111111,
        quoteID: 11111111111,
        enquiryID: 11111111111,

        haulierInternalRef: 'abc123',
        hauliersHandlersName: 'Limited Ltd',
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
      Bookings.create(booking, function (err) {
        if (err == null) {
          console.log('Booking Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function address () {
  Addresses.find({}, function (err, addressesExist) {
    if (err) {
      console.log(err)
    }
    if (!addressesExist.length) {
      var address = []
      address.push({
        AdrsID: 11111111111,
        CusID: 11111111111,
        AdrsFullName: 'Mr Ash Tray',
        AdrsLine_1: '13 Ciggy Wiggy Drive',
        CityTown: 'MudPie',
        CountyState: 'Mississippie',
        Country: 'USA',
        PostZipCode: 'MS01 1PIE'
      })
      Addresses.create(address, function (err) {
        if (err == null) {
          console.log('Address Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function haulier () {
  Hauliers.find({}, function (err, hauliersExist) {
    if (err) {
      console.log(err)
    }
    if (!hauliersExist.length) {
      var haulier = []
      haulier.push({
        haulierID: 12345654321,
        adrsID: 98979695949,
        companyName: 'Just Another Ltd',
        email: 'foodie@yummy.com',
        contactLandline: 11234321234
      })
      Hauliers.create(haulier, function (err) {
        if (err == null) {
          console.log('Haulier Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function cargoEx () {
  CargoEX.find({}, function (err, companyExist) {
    if (err) {
      console.log(err)
    }
    if (!companyExist.length) {
      var company = []
      company.push({
        companyID: 77777654323,
        companyName: 'Cargo Exchange',
        companyAdrsID: 47474747564,
        registrationNum: 121123456543456,
        contactNum: 11827364532,
        contactEmail: 'devteam@cargoex.com',
        vatNum: 123434343456789876545
      })
      CargoEX.create(company, function (err) {
        if (err == null) {
          console.log('CargoEX Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function quote () {
  Quotes.find({}, function (err, quotesExist) {
    if (err) {
      console.log(err)
    }
    if (!quotesExist.length) {
      var quote = []
      quote.push({
        quoteID: 35353535353,
        enquiryID: 89898989898,
        hauliersID: 34343434343,
        haulierHandlersName: 'Mr Sum Handler',
        quotedRate: 485
      })
      Quotes.create(quote, function (err) {
        if (err == null) {
          console.log('Quote Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function enquiry () {
  Enquiries.find({}, function (err, enquiryExist) {
    if (err) {
      console.log(err)
    }
    if (!enquiryExist.length) {
      var enquiry = []
      enquiry.push({
        enquiryID: 13131313131,
        cusID: 23232323232,
        cusHandlersName: 'Mr Sum Cus Handler',
        trialerType: 'Really Big',
        grossWeightKg: 2000,
        equipmentRequired: 'None Thanks',
        tailLiftCollection: false,
        tailLiftDelivery: false,
        collectionDate: Date.now(),
        collectionLocation: 'This needs change',
        deliveryLocation: 'This needs change',
        loadDetails: 'This is a load of stuff about thye load that needs loaded',
        autoAccept: true,
        acceptPrice: 485,
        deleteScheduled: Date.now()
      })
      Enquiries.create(enquiry, function (err) {
        if (err == null) {
          console.log('Enquiry Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function invoice () {
  Invoices.find({}, function (err, invoicesExist) {
    if (err) {
      console.log(err)
    }
    if (!invoicesExist.length) {
      var invoice = []
      invoice.push({
        invoiceID: 54777776323,
        enquiryID: 77654377723,
        bookingID: 77765437723,
        haulierID: 76547777323,
        cusID: 77547776323,
        quoteID: 74377776523,

        haulierInternalRef: 'abc123',
        cusInternalRef: '123abc',
        hauliersHandlersName: ' Mrs ahaulier handler',
        customersHandlerName: ' Mr acustomer handler',

        trialerType: 'Flatbed 13',
        grossWeightKg: 300,
        tailLiftCollection: false,
        tailLiftDelivery: false,
        equipRequired: 'Special Info Add Here ',
        additionalNotes: 'Dont come without food',

        collectionRef: 'collectRefHere',
        collectAdrsID: 12121222112,
        collectionContact: 'John son',
        collectionDate: Date.now(),
        collectionInstructions: 'Dont leave without load',

        deliveryRef: 'deliveryRefHere',
        deliveryDate: Date.now(),
        deliveryAdrsID: 12121222112,
        deliveryContact: 'On delivery Speak to Dave',
        deliveryInstructions: 'Theres a dragon near depot route down A123 to avoid',

        quotedRate: 780,
        vatFee: 224,
        adminFee: 100,
        totRate: 1000,
        paymentTerms: 'Here are the payment terms',
        invoiceStatus: 2,
        archiveSchedule: Date.now(),
        totNetValue: 2000
      })
      Invoices.create(invoice, function (err) {
        if (err == null) {
          console.log('Invoice Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function paymentAcc () {
  PaymentAccs.find({}, function (err, paymentAccExist) {
    if (err) {
      console.log(err)
    }
    if (!paymentAccExist.length) {
      var paymentAcc = []
      paymentAcc.push({
        paymentAccountID: 14141414141,
        paymentDescription: 'Add description here for this account',
        currencyCode: 'GBP',
        BIC: 'ADSESFGT123',
        IBAN: 'QWERTYUIPLKJHGFD',
        sortCode: 203040,
        accountNumber: 10087654

      })
      PaymentAccs.create(paymentAcc, function (err) {
        if (err == null) {
          console.log('Payment Account Saved')
        } else {
          console.log(err)
        }
      })
    }
  })
}

function populateEmptyDB () {
  Customers.find({}, function (error, customersExist) {
    if (error) {
      console.log(error)
    }
    if (!customersExist.length) {
      customer()
    }
  })

  Bookings.find({}, function (error, bookingsExist) {
    if (error) {
      console.log(error)
    }
    if (!bookingsExist.length) {
      booking()
    }
  })

  Addresses.find({}, function (error, addressesExist) {
    if (error) {
      console.log(error)
    }
    if (!addressesExist.length) {
      address()
    }
  })

  Quotes.find({}, function (error, quotesExist) {
    if (error) {
      console.log(error)
    }
    if (!quotesExist.length) {
      quote()
    }
  })

  PaymentAccs.find({}, function (error, accExist) {
    if (error) {
      console.log(error)
    }
    if (!accExist.length) {
      paymentAcc()
    }
  })

  Invoices.find({}, function (error, invoicesExist) {
    if (error) {
      console.log(error)
    }
    if (!invoicesExist.length) {
      invoice()
    }
  })

  Enquiries.find({}, function (error, enquiryExist) {
    if (error) {
      console.log(error)
    }
    if (!enquiryExist.length) {
      enquiry()
    }
  })

  Hauliers.find({}, function (error, hualierExist) {
    if (error) {
      console.log(error)
    }
    if (!hualierExist.length) {
      haulier()
    }
  })

  CargoEX.find({}, function (error, companyExist) {
    if (error) {
      console.log(error)
    }
    if (!companyExist.length) {
      cargoEx()
    }
  })
}

export default populateEmptyDB
