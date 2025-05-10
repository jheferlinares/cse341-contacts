// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date
}, { 
  collection: 'contacts' // Forzar el uso de esta colección específica
});

module.exports = mongoose.model('Contact', contactSchema);

