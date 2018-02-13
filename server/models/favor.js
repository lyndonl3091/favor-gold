const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
  title: String,
  description: String,
});


const Favor = mongoose.model('favor', favorSchema);

module.exports = Favor;
