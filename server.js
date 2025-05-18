const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 8080;

// Connected data base
connectDB();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts information',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? 'https://your-render-app-name.onrender.com' 
          : `http://localhost:${port}`,
        description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes files
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});


