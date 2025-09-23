/*
  Optional script to seed Firestore with gifts.
  You need to provide a Firebase Admin SDK service account JSON file and set GOOGLE_APPLICATION_CREDENTIALS env var.
  Usage: node scripts/seed-firestore.js
*/
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error('Set GOOGLE_APPLICATION_CREDENTIALS to the service account JSON path.');
  process.exit(1);
}

admin.initializeApp();
const db = admin.firestore();

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'app', 'data', 'gifts.seed.json'), 'utf8'));

(async () => {
  for (const g of data) {
    const id = g.name.replace(/\s+/g, '-').toLowerCase();
    await db.collection('gifts').doc(id).set(g);
    console.log('Inserted', id);
  }
  console.log('Done');
})();
