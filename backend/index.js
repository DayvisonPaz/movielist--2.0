const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});





/* database configuration 
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) });*/
/*
insert data into database
const db = admin.firestore();
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};
db.collection('users').add(data)
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });*/
/* 
const collectionRef = db.collection('users');
 read from collection'
collectionRef.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });*/
  