const jwt = require("jsonwebtoken");

async function verifyToken(token, secret) {
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (err) {
      console.error("Invalid token:", err.message);
      return null;
    }
  }
  // app.get('/protected', (req, res) => {
  //   console.log("gggggggggggggg");
    
  //     const token = req.cookies.token;
  //     if (!token) return res.status(401).json({ message: 'No token found' });
    
  //     jwt.verify(token,  process.env.JWT_SECRET, (err, user) => {
  //       if (err) return res.status(403).json({ message: 'Invalid token' });
    
  //       res.json({ message: 'This is protected data', user });
  //     });
  //   });
  module.exports={verifyToken}