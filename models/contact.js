const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date
}, { 
  collection: 'contacts'
});

module.exports = mongoose.model('Contact', contactSchema);

