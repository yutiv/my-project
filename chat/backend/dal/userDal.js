const db = require('../config/db');

async function getAllUsersFromDB() {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
}

async function createUserInDB(userName, email, password) {
  const result = await db.query(('INSERT INTO users (userName,email, password) VALUES (?, ?,?)'),
    [userName, email, password]);
  return result;
};

async function isExist(email, password) {
  const result = await db.query(`SELECT * FROM users WHERE email='${email}' and password='${password}'`)
  return [result[0]]
}

module.exports = { getAllUsersFromDB, createUserInDB, isExist };
