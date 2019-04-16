const { Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const objectSchema = {
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: Schema.Types.ObjectId,
    ref: 'Rol'
  }
}

const userSchema = new Schema(objectSchema)

userSchema.methods.toJSON = function () {
  const user = this.toObject()
  delete user.password
  return user
}

userSchema.pre('save', function (next) {
  if (this.password) {
    const saltRounds = 10
    const user = this
    bcrypt.hash(this.password, saltRounds)
      .then(function (hash) {
        user.password = hash
        next()
      })
      .catch(function (error) {
        return error
      })
  } else {
    next()
  }
})
module.exports = userSchema
