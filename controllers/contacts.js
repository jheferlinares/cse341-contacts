// controllers/contacts.js
const Contact = require('../models/contact');

// Obtener todos los contactos
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un contacto por ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllContacts,
  getContactById
};
