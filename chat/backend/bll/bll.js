const { getAllUsersFromDB, createUserInDB, isExist } = require('../dal/userDal');
const { verifyToken } = require('../midllewear/jwt')
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
// function verifyToken(token, secret) {
//   try {
//     const decoded = jwt.verify(token, secret);
//     return decoded;
//   } catch (err) {
//     console.error("Invalid token:", err.message);
//     return null;
//   }
// }

async function login(req, res, next) {
  try {
    const payload = req.body;
    // const JWT_SECRET = process.env.JWT_SECRET||'your-secret-keyyyyyyyyy';
    // const secret = process.env;
    // console.log(JWT_SECRET,"se");

    const secret = 'your-secret-key';
    const options = { expiresIn: '1h' }; // הטוקן יפוג תוך שעה
    const email = req.body.valInputEmail
    const password = req.body.valInputPassword
    const users = await isExist(email, password);
    const token = generateToken(payload, secret, options);
    // const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    // const token = jwt.sign({ id: "Shlomi" }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const verify = await verifyToken(token, secret);
    console.log(verify, " jjjjj");



    // res.send(users)
    // return jwt.sign(payload, secret, options);
    // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: false });
    // res.cookie('token',token,{ expires: new Date(Date.now() + 1000*60*60*24), httpOnly: true })
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // בייצור לשים true עם HTTPS
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000
      // expires:new Date(2025,7,10)
    })
    // console.log({massage:'cookie'});
    res.send(users)

    // res.send({massage:cookie})

    // const myCookies=cookie.parse(req.headers.cookie||'')
    // const myCookies=cookie.parse(req.cookie.myCookies||'')

    // res.send({massage:'cookie'})
    // res.send({myCookies})

    //  jwt.verify(payload, secret, algorithm='HS256', header=header)

    // const token = req.headers.split(" ")[1];
    // // const token = req.headers.authorization.split(" ")[1];
    // console.log(token," ttt");

    // const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    // req.userData = { email: decodedToken.email, userId: decodedToken.userId };

    // res.send({myCookies})
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
}

module.exports = { getUsers, createUser, login };





// async function login(req, res, next) {
//   try {

//     const payload = req.body;
//     console.log(payload);
//     const secret = 'your-secret-key';

//     const email = req.body.valInputEmail
//     const password = req.body.valInputPassword
//     const users = await isExist(email, password);
//     const token = jwt.sign({ id: "Shlomi" }, secret, { expiresIn: '1h' });

//     res.cookie('token', token, {
//       httpOnly: true,
//       secure: false, // בייצור לשים true עם HTTPS
//       sameSite: 'lax',
//       maxAge: 60 * 60 * 1000
//     });
//     // console.log(users);
//     res.send(users)

//     // next();
//   } catch (error) {
//     res.status(401).json({ message: "You are not authenticated!" });
//   }
// }