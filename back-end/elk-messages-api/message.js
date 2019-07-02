const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MessageSchema = new Schema(
  {
    title: { 
      type: String, 
      required: true, 
      max: 100 
    }
  },
  { strict: false }
)

module.exports = mongoose.model('Message', MessageSchema)
