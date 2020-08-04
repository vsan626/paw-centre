const loadFirebase = require('./index')
// require('firebase/firestore')


async function quickstartAddData(db) {
  const docRef = db.collection('products').doc('alovelace');
  
  await docRef.set({
    name: 'Ada',
    price: 9.99
  });
  console.log('seed??')
}


quickstartAddData(loadFirebase)
