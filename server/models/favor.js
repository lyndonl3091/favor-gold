const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorSchema = new Schema({
  title: String,
  description: String,
  datePosted: { type: Date, default: Date.now },
  // location: { type: 'Point' }
});


const Favor = mongoose.model('favor', favorSchema);

module.exports = Favor;
