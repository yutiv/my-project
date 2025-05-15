const pool = require('../config/db');
const db = require('../config/db');
// require('../config/db')
// const getAllUsers = async () => {
//   console.log("get all users");
//   // console.log(db.query('SELECT * FROM chat.users'));

//   const result = await db.query('SELECT useName FROM chat.users');
//   console.log(result," result");

//   return result.rows;

// };
async function getAllUsersFromDB() {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
}
//   const myquery =await db.query ('SELECT * FROM chat.users');
  
  
//     // return myquery
//  res.send(myquery)
//   // return result.rows;
//   // res.json({message:"kkk"})

// };

// const getAllUsers = () => {

//   const QUERY = `SELECT * FROM chat.users`;

//   db.query(QUERY, (err, result) => {

//     if (err)
//        {
//       console.log(err);
//       return done(null, false, { message: err });

//     } 
//     else {
//       const user = result;
//       return user
//     } 

//   });

// };

// const query = ("INSERT INTO chat.users (userName, email, password) VALUES (?,?,?)")
//   pool.query(query, [reqBody.userName, reqBody.email, reqBody.password]);


const createUser = async (name, email,password) => {
  console.log(name,email,password,"name...");
  
  const result = await db.query(
    'INSERT INTO users (useName, email, password) VALUES ($1, $2,$3) RETURNING *',
    [name, email,password]
  );
  console.log(result.values,"result");
  
  return result.values;
};

module.exports = { getAllUsersFromDB, createUser };
