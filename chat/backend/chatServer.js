// require('dotenv').config();
// const { SQL_SERVER } = process.env;
// const sql = require('mssql');
const express = require('express');

const app = express();
var mysql = require('mysql2');
app.use(express.json());
// const { insertUser } = require('../backend/chatFront');
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

const pool = mysql.createConnection({
  // connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root111',
  database: 'chat'
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.get('/', function (req, res) {
//   const user = insertUser(req.body)
//   console.log("connect");

//   const reqBody = {
//     userName: user.userName,
//     email: user.email,
//     password: user.password
//   }
//   const query = ("INSERT INTO chat.users (userName, email, password) VALUES (?,?,?)")
//   pool.query(query, [reqBody.userName, reqBody.email, reqBody.password]);
//   // console.log(res);

//   res.send(res);
// });

app.get('/', function (req, res) {
    console.log("hello");
    // console.log(pool.query = ("SELECT userName FROM chat.users"));
    
  const a= pool.query ("SELECT userName FROM chat.users")
  console.log(res);
  
  // console.log(res.query.toString());
  // console.log(res.database);
  
  res.send(res.database );
}

//   // })


//   // pool.query(query);
//   // res.send(res);
);