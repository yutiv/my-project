const { getAllUsersFromDB, createUserInDB, isExist } = require('../dal/userDal');
const jwt = require("jsonwebtoken");
const cookie = require('cookie')

async function getUsers(req, res) {
  // var auth = jwt({
  //   secret: process.env.SRCT,
  //   userProperty: 'payload'
  // });
  const users = await getAllUsersFromDB();
  res.send(users);
}

const createUser = async (req, res) => {
  try {
    const name = req.body.valInputName
    const email = req.body.valInputEmail
    const password = req.body.valInputPassword
    const exist = await isExist(email, password)
    if (exist[0].length >= 1) {
      console.log("this user alredy exist");
      res.send("this user alredy exist")
    }
    else {
      const newUser = await createUserInDB(name, email, password);
      res.status(201).json(newUser);
    }
  }
  catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

// async function login(req, res) {
//   const email = req.body.valInputEmail
//   const password = req.body.valInputPassword
//   const users = await isExist(email, password);
//   console.log(users);
//   res.send(users)
// }

function generateToken(payload, secret, options) {
  return jwt.sign(payload, secret, options);
}
function verifyToken(token, secret) {
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded,"de");
    
    return decoded;
  } catch (err) {
    console.error("Invalid token:", err.message);
    return null;
  }
}

async function login(req, res, next) {
  try {

    const payload = req.body;
    console.log(payload);

    // const payload = { userId: 123, role: 'admin' };
    const secret = 'your-secret-key';
    const options = { expiresIn: '1h' }; // הטוקן יפוג תוך שעה

    const token = generateToken(payload, secret, options);
    console.log(token);
    const verify= verifyToken(token,secret)
    console.log(verify," ver");
    
    const email = req.body.valInputEmail
    const password = req.body.valInputPassword
    const users = await isExist(email, password);
    console.log(users);
    res.send(users)
    // return jwt.sign(payload, secret, options);
    // console.log("aaa");
    // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: false });
    // res.cookie('a','b',{httpOnly:false,expires:new Date(2025,7,7)})
    // res.send({massage:'cookie'})
    // authorization אין 
    // console.log(next());
    // console.log("kkkkkkkkkkkk");
    // console.log(res.headers.cookie);

    // const myCookies=cookie.parse(req.headers.cookie||'')
    // res.send({myCookies})
    // const header={alg: "HS256",
    //  typ: "JWT"}


    // const payload={sub: "1234567890",
    //  department: "Human Resources",
    //  iat: 1516239022}
    //  const secret="123456"
    //  console.log(jwt.decode(payload));

    //  const encoded_jwt = 
    //  jwt.verify(payload, secret, algorithm='HS256', header=header)
    //  console.log(encoded_jwt)

    // console.log(req.body,"uuuuuuuu");
    // console.log(req.headers);

    // const token = req.headers.split(" ")[1];
    // // const token = req.headers.authorization.split(" ")[1];
    // console.log(token," ttt");

    // const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    // req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    // console.log(next()," nnn");

    // next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
  // const email = req.body.valInputEmail
  // const password = req.body.valInputPassword
  // const users = await isExist(email, password);
  // console.log(users);
  // res.send(users)
}


// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1];
//         const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
//         req.userData = { email: decodedToken.email, userId: decodedToken.userId };
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "You are not authenticated!" });
//     }
// }
// module.exports = { getUsers, createUser };
module.exports = { getUsers, createUser, login };