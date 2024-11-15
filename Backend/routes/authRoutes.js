const express = require('express');
const { registerUser,loginUser } = require('../controllers/authController'); // Adjust the path as needed

const router = express.Router();

// Define the registration route
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;
