require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 4000;

const githubData ={
    "name": "Deepak",
    "class": "MCA",
    "project": "First BackEnd"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/login', (req,res)=>{
    res.send('Login')
});

app.get('/twitter',(req,res)=>{
    res.send('twitter deepak')
});
app.get('/youtube',(req,res)=>{
    res.send('<a href="https://www.youtube.com/watch?v=pOV4EjUtl70&t=810s"> How to deploy backend code in production')
});
app.get('/github',(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});