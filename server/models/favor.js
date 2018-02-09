const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
  title: String,
  description: String,
});


const ModelClass = mongoose.model('favor', userSchema);

module.exports = ModelClass;
