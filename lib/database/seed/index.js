//Connection to firestore to seed database
const admin = require('firebase-admin');

const serviceAccount = require('../../../paw-centre-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db

