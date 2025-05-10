// routes/contacts.js
const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById } = require('../controllers/contacts');

// Rutas GET
router.get('/', getAllContacts);
router.get('/:id', getContactById);

module.exports = router;