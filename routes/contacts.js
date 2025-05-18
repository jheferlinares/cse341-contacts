const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById, createContact, updateContact, deleteContact } = require('../controllers/contacts');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Returns all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The contact ID
 *                   firstName:
 *                     type: string
 *                     description: The contact's first name
 *                   lastName:
 *                     type: string
 *                     description: The contact's last name
 *                   email:
 *                     type: string
 *                     description: The contact's email
 *                   favoriteColor:
 *                     type: string
 *                     description: The contact's favorite color
 *                   birthday:
 *                     type: string
 *                     format: date
 *                     description: The contact's birthday
 *       500:
 *         description: Server error
 */
router.get('/', getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Returns a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: Contact details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The contact ID
 *                 firstName:
 *                   type: string
 *                   description: The contact's first name
 *                 lastName:
 *                   type: string
 *                   description: The contact's last name
 *                 email:
 *                   type: string
 *                   description: The contact's email
 *                 favoriteColor:
 *                   type: string
 *                   description: The contact's favorite color
 *                 birthday:
 *                   type: string
 *                   format: date
 *                   description: The contact's birthday
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Creates a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The contact's first name
 *               lastName:
 *                 type: string
 *                 description: The contact's last name
 *               email:
 *                 type: string
 *                 description: The contact's email
 *               favoriteColor:
 *                 type: string
 *                 description: The contact's favorite color
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The contact's birthday
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created contact
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Server error
 */
router.post('/', createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Updates a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The contact's first name
 *               lastName:
 *                 type: string
 *                 description: The contact's last name
 *               email:
 *                 type: string
 *                 description: The contact's email
 *               favoriteColor:
 *                 type: string
 *                 description: The contact's favorite color
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The contact's birthday
 *     responses:
 *       204:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Deletes a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contact deleted successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteContact);

module.exports = router;
