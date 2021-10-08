const {Schema, model} = require('mongoose');

const AlbumSchema = Schema({
  name: {
    type: String,
    required: [true, "You have to specify the name of the album"]
  },
  songs: {
    type: Array,
    required: [true, "You must enter at least a song, assuming it's a single album"]
  },
  picture: {
    type: String
  },
  year: {
    type: Number
  },
  link: {
    type: String
  }
})

module.exports = model('Album', AlbumSchema)