var express = require('express');
var router = express.Router();
var connection = require('../public/database');

router.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname + '../login.html'))
})
