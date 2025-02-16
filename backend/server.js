const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// Use the routes
app.use('/api', userRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
