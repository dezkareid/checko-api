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
    ref: 'Rol',
    required: true
  }
}

module.exports = new Schema(objectSchema)
