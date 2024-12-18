const mysql = require("mysql2");
require('dotenv').config();

const dbconnect = mysql.createConnection({
    host:  process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root123',
    database: process.env.DB || 'empmanage'
}
);

dbconnect.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("CONNECTED");
    }
});

module.exports = dbconnect;
