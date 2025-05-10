// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas
const contactsRoutes = require('./routes/contacts');

// Usar rutas
app.get('/', (req, res) => {
  res.send('API de Contactos');
});
app.use('/contacts', contactsRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

