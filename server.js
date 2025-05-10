const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Connected data base
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const contactsRoutes = require('./routes/contacts');

// Use Routes
app.get('/', (req, res) => {
  res.send('Contacts API');
});
app.use('/contacts', contactsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

