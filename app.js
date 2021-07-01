// include Modules
const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const mysql = require('mysql');
const session = require('express-session'); 

//..........................
//database connection
const connection = mysql.createConnection({
    host    :'localhoset',
    user    :'root',
    password:'',
    database:'nodelogin'
})
var app = express();
app.use(session({ 
    secret: '123456cat',
    resave: true,
    saveUninitialized: true
  }))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/register.html'));
})



const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listening on port ${port}...`)})