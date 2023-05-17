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
//////////////////////////////////////////////////////////////
app.post('/subscribe',async(req,res)=>{
  const {name,password} = req.body
  if(!name){res.status(422).json({msg:"Coloque um nome válido"})}
  if(!password){ res.status(422).json({msg:"Coloque uma senha válido "})}
  const citiesRef = db.collection('users');
const snapshot = await citiesRef.where('name', '==', `${name}`).get();
if (snapshot.empty) {
  run()
  async function run(){
    const salt = await  bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hashSync(password,salt)
const aTuringRef = db.collection('users').doc();
await aTuringRef.set({
"name":name,
'pass':passwordHash,
"token":""})
res.status(200).json({msg:"usuario criado com sucesso"})
}}else{res.status(401).json({msg:"Usuario existente, faça login"})}})
///////////////////////////////////////////////////////////////////////////




app.post("/login", async(req,res)=>{
    const {name,password} = req.body
const users = db.collection('users');
const snapshot = await users.where('name', '==', `${name}`).get();

snapshot.forEach(doc => {
  run()
  async function run(){ 
 const passIsTrue =  bcrypt.compareSync(password,doc.data().pass)
 if(passIsTrue){
  const secret = process.env.SECRET
  const token = jwt.sign({
    id:doc.data().name
      },secret,{expiresIn:600000})

  const update = await db.collection('users').doc(doc.id).update({token:token})
  res.status(200).json({token:token})}
else{
  res.status(401).json({msg:"senha incorreta, tente novamente"})}
 }})})

///////////////////////////////////////////////////////////////////
  app.post("/search",async(req,res)=>{
    const {data,genre} = req.body
    console.log(data)
    const respo = []
  console.log(genre)
  if(genre){
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genre}`).then(response=>response.data.results[0]?respo.push(response.data.results):'').catch(err=>console.log(err)) 
    res.status(200).json(respo)}
  if(data){
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${data.replaceAll(" ","+")}`).then(response=>respo.push(response.data.results)).catch(err=>console.log(err))
    res.status(200).json(respo)  }})
  .post('/list' ,async(req,res)=>{
    const {id} = req.body
     const user = await userModel.findOne({_id:id})
     const data = user.list
    const respo = []
    data.map(async(e)=> await axios.get(`https://api.themoviedb.org/3/search/${e.release_date?"movie":"tv"}?api_key=${process.env.API_KEY}&query=${e.name?e.name.replaceAll(" ","+"):e.title.replaceAll(" ","+")}`).then(response=>respo.push(response.data.results[0])).catch(err=>console.log("nome errado")) )
    setTimeout(resposta,2000)
    function resposta(){
      res.status(200).json(respo)  } })
    .get('/movies', async(req,res)=>{
    const movies = []
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=28`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=12`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
     res.status(200).json(movies) })
    .get('/series', async(req,res)=>{
    const movies = []
    await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=10759`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=35`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
    res.status(200).json(movies)})
    .get("/", async(req,res)=>{
  const movies = []
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  res.status(200).json(movies)})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});