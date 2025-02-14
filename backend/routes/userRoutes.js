// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

// Route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // Send the users data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

// Route to add a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body; // Assuming you want to add name and email
    const newUser = await User.create({ name, email }); // Assuming the User model has these fields
    res.status(201).json(newUser); // Respond with the newly created user
  } catch (error) {
    console.error('Error adding users: ', error);
    res.status(500).send('Error adding user');
  }
});

module.exports = router;
