const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById } = require('../controllers/contacts');

// GET Routes
router.get('/', getAllContacts);
router.get('/:id', getContactById);

module.exports = router;