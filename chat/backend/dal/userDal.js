const db = require('../config/db');

async function getAllUsersFromDB() {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
}

async function createUserInDB(name, email, password) {
  const result = await db.query(`INSERT INTO users (userName,email, password) VALUES ('${name}','${email}','${password}')`);  
  return result;
};

async function isExist(email, password) {
  const result = await db.query(`SELECT * FROM users WHERE email='${email}' and password='${password}'`)
  console.log(result[0]," result[0]");
  return [result[0]]
}

module.exports = { getAllUsersFromDB, createUserInDB, isExist };
