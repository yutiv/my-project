const express = require('express');
// const cookie=require('cookie')
const cookieParser=require('cookie-parser')
const userRoutes = require('../backend/routes/userRouter')
const app = express();
const jwt=require('jsonwebtoken')
const cors = require('cors');
// const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}))
// app.use(express.cookieParser());
app.use(cookieParser())
// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/protected', (req, res) => {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: 'No token found' });
  
//     jwt.verify(token,  process.env.JWT_SECRET, (err, user) => {
//       if (err) return res.status(403).json({ message: 'Invalid token' });
  
//       res.json({ message: 'This is protected data', user });
//     });
//   });


// Routes
app.use('/', userRoutes);
// Default route
app.get('/', (req, res) => {  
  res.send('API is running...');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const userRoutes = require('../backend/routes/userRouter')
// const app = express();
// const jwt = require("jsonwebtoken");

// const cors = require('cors');
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // אל תשתמש ב-* כשיש credentials
//   credentials: true // חשוב כדי לאפשר שליחת cookies
// }));
// app.use(cookieParser());

// // Routes
// app.get('/protected', (req, res) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: 'No token found' });

//   jwt.verify(token,  process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });

//     res.json({ message: 'This is protected data', user });
//   });
// });

// app.use('/', userRoutes);
// // Default route
// app.get('/', (req, res) => {  
//   res.send('API is running...');
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// })
