import Customers from '../models/CustomersModel'

function injectCustomer () {
  // This populates an empty DB with Admins if non exist.
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

export default { injectCustomer, injectHaulier, injectQuote }
