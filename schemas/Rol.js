const { Schema } = require('mongoose')

const objectSchema = {
  name: {
    type: String,
    lowercase: true,
    required: true
  }
}

module.exports = new Schema(objectSchema)
