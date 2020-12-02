const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//By default mlab will create an id for each entry
const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);