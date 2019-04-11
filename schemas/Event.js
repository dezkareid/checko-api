const { Schema } = require('mongoose')

const objectSchema = {
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  description: String,
  address: String,
  tickets: [],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}

module.exports = new Schema(objectSchema)
