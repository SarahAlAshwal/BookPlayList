const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//By default mlab will create an id for each entry
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);