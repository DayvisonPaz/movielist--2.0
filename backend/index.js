const express = require('express');
const app = express();
app.use(express.json())
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const axios = require('axios');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.post('/subscribe',async(req,res)=>{

  const {name,pass} = req.body
  if(!name){res.status(422).json({msg:"Coloque um nome válido"})}
  if(!pass){ res.status(422).json({msg:"Coloque uma senha válido "})}
  
  const snapshot = await db.collection('users').where('name', '=', `${name}`).get();
  if(!snapshot.doc){
    console.log("vai criar o usuario...")

    run()
    async function run(){
      const salt = await  bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(pass,salt)

const aTuringRef = db.collection('users').doc();

await aTuringRef.set({
  "name":name,
  'pass':passwordHash
})}}
res.status(401).json({msg:"Usuario existente, faça logi"})
  })


  app.post("/login", async(req,res)=>{
    const {name} = req.body
    const user = await db.collection('users').where('name', '=', `${name}`).get();
const secret = process.env.SECRET
console.log(user.doc)
bcrypt.compare(user.doc)


   if(user){try{const token= jwt.sign({
    id:user.name
      },secret,{expiresIn:600000})
      const cityRef = db.collection('users').doc("77WxbnXAotpI2amfUrNe");

// Set the 'capital' field of the city
const up = await cityRef.update({token: token});
 



  res.status(200).json({name,token})
  }catch(err){
  console.log(err)}}else{
    res.status(401).json({msg:"dados errados"}) }})



/*ler dados 
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
})
 */

/* adicionar dados 
const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
})
 */


  



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
  





























   // pesquisar item 

  app.post("/search",async(req,res)=>{
    const {data,genre} = req.body
    console.log(data)
    const respo = []
  console.log(genre)
  if(genre){
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genre}`).then(response=>response.data.results[0]?respo.push(response.data.results):'').catch(err=>console.log(err)) 
    res.status(200).json(respo)
  
  }
  if(data){
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${data.replaceAll(" ","+")}`).then(response=>respo.push(response.data.results)).catch(err=>console.log(err))
    res.status(200).json(respo)
  }
  
    
  })
  .post('/list' ,async(req,res)=>{
    const {id} = req.body
     const user = await userModel.findOne({_id:id})
     const data = user.list
   
    const respo = []
    
    data.map(async(e)=> await axios.get(`https://api.themoviedb.org/3/search/${e.release_date?"movie":"tv"}?api_key=${process.env.API_KEY}&query=${e.name?e.name.replaceAll(" ","+"):e.title.replaceAll(" ","+")}`).then(response=>respo.push(response.data.results[0])).catch(err=>console.log("nome errado")) )
    setTimeout(resposta,2000)
    function resposta(){
      res.status(200).json(respo)
    }
    })
    .get('/movies', async(req,res)=>{
    const movies = []
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=28`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=12`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
     res.status(200).json(movies)
    })
    .get('/series', async(req,res)=>{
    const movies = []
    await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=10759`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=35`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    res.status(200).json(movies)}
    )
    .get("/", async(req,res)=>{
  const movies = []
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  res.status(200).json(movies)})
  
  


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});








