const express = require('express');
const cookie=require('cookie')
// const coo=require('cookieParser')
const userRoutes = require('../backend/routes/userRouter')
const app = express();

const cors = require('cors');
app.use(express.json());
app.use(cors())
// app.use(express.cookieParser());

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

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