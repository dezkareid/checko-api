const { Schema } = require('mongoose')

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

module.exports = userSchema
