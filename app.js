// include Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const session = require('express-session'); 


var app = express();

//express Middleware 
app.use(session({ 
    secret: '123456cat',
    resave: true,
    saveUninitialized: true
  }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
  // Router
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname + '/register.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname + '/login.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listening on port ${port}...`)})