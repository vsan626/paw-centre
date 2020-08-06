const firebase = require('./index');
const faker = require('faker');

// Retrieve data from firestore test function
async function getData() {
  const snapshot = await firebase.collection('products').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  return snapshot;
}

// Generates data into firestore database
async function generateData() {
  for (let i = 0; i < 50; i++) {
    const docRef = await firebase.collection('products').doc();
    console.log(i);
    docRef.set({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      images: generateImageUrl(),
      description: faker.lorem.sentences()
    });
  }
}

const generateImageUrl = () => {
  let randomNum = Math.floor(Math.random() * 5);
  let result = [];
  for (let i = 0; i < randomNum; i++) {
    result.push('https://source.unsplash.com/random/800x600')
  }
  return result;
};

/* To seed database, uncomment below function invocation */
generateData();
