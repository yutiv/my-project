const express = require('express');
const userRoutes = require('../backend/routes/userRouter')
const app = express();

const cors = require('cors');
app.use(express.json());
app.use(cors())

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