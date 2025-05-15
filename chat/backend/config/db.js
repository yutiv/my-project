const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root111',
  database: 'chat'
});



module.exports = connection.promise(); // חובה!