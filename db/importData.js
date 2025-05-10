require('dotenv').config();
const { MongoClient } = require('mongodb');

async function importData() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connecting to MongoDB');
    
    const database = client.db('contacts_db');
    const contacts = database.collection('contacts');
    
    // Delete existing dates
    await contacts.deleteMany({});
    
    // Insert new dates
    const result = await contacts.insertMany([
      {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@example.com',
        favoriteColor: 'Blue',
        birthday: new Date('1990-05-15')
      },
      {
        firstName: 'María',
        lastName: 'González',
        email: 'maria.gonzalez@example.com',
        favoriteColor: 'Red',
        birthday: new Date('1985-10-20')
      },
      {
        firstName: 'Carlos',
        lastName: 'Rodríguez',
        email: 'carlos.rodriguez@example.com',
        favoriteColor: 'Green',
        birthday: new Date('1992-03-08')
      }
    ]);
    
    console.log(`${result.insertedCount} documents inserted`);
  } finally {
    await client.close();
  }
}

importData().catch(console.error);
