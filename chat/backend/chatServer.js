// // require('dotenv').config();
// const { SQL_SERVER } = process.env;
// const sql = require('mssql');
const express = require('express');

const app = express();
var mysql = require('mysql');
app.use(express.json());
const { insertUser } = require('../backend/chatFront');
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

var pool = mysql.createConnection({
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

app.get('/', function (req, res) {
  const user = insertUser(req.body)
  console.log("connect");

  const reqBody = {
    userName: user.userName,
    email: user.email,
    password: user.password
  }
  const query = ("INSERT INTO chat.users (userName, email, password) VALUES (?,?,?)")
  pool.query(query, [reqBody.userName, reqBody.email, reqBody.password]);
  // console.log(res);

  res.send(res);
});

app.get('/jj', function (req, res) {
  pool.query = ("SELECT * FROM chat.users")
  console.log(res);
  // res.send(res);
}

  // })


  // pool.query(query);
  // res.send(res);
);