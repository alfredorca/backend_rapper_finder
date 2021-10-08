const {Schema, model} = require('mongoose')

const RapperSchema = Schema({
  name: {
    type: String,
    required: true, 
    trim: true
  },
  picture: {
    type: String,
  },
  albums: {
    type: [Schema.Types.ObjectId],
    ref: 'Album'
  },
  dateOfBirth: {
    type: Date
  },
  biography: {
    type: String,
    required: [true, "You must enter some info about the rapper you're trying to add"]
  },
  country: {
    type: String,
    required: [true, "You must specify the origin of the artist."]
  },
  videos: {
    type: Array,
  }
})

module.exports = model('Rapper', RapperSchema)