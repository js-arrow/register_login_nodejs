const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodelogin'
});
connection.connect((error)=>{
    if(error){
        console.log(error);
    } else{
        console.log('database connected successfully :)');
    }
});
module.exports = connection;