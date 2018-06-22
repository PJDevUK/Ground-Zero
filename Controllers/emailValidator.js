// konsumer/mongoose-type-email
import mongoose from 'mongoose'

var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function validateThisEmail (emailProvided, additionalOptions) {
  var required = (typeof additionalOptions.required === 'function')
    ? additionalOptions.required() : additionalOptions.required

  var passedAllowBlank = additionalOptions.allowBlank && (emailProvided === '' || emailProvided === null)

  if (passedAllowBlank && !required) {
    return true
  }

  return regEmail.test(emailProvided)
}

class Email {
  constructor (path, additionalOptions) {
    mongoose.SchemaTypes.String.call(this, path, additionalOptions)
    this.validate(function (emailProvided) { return validateThisEmail(emailProvided, additionalOptions) }, additionalOptions.message || 'invalid email address')
  }
  cast (val) {
    return val.toLowerCase()
  }
}

Object.setPrototypeOf(Email.prototype, mongoose.SchemaTypes.String.prototype)

mongoose.SchemaTypes.Email = Email
mongoose.Types.Email = String

export default Email
