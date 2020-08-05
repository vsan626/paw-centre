const firebase = require('./index')
const faker = require('faker');

// Retrieve data from firestore test function
async function getData() {
  const snapshot = await firebase.collection('products').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  return snapshot
}

// Generates data into firestore database
async function generateData() {
  for(let i = 0; i < 10; i++){
    const docRef = await firebase.collection('products').doc()
    console.log(i)
    docRef.set({
      name: faker.commerce.productName(),
      price: faker.commerce.price()
    })
  }
}
/* To seed database, uncomment below function invocation */
// generateData();
