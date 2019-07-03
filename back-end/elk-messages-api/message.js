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
  { strict: false, timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema)
