const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Buyer Dashboard
router.get('/buyer', protect, (req, res) => {
  if (req.user.role === 'buyer') {
    res.json({ message: `Welcome to the Buyer Dashboard, ${req.user.name}` });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
});

// Seller Dashboard
router.get('/seller', protect, (req, res) => {
  if (req.user.role === 'seller') {
    res.json({ message: `Welcome to the Seller Dashboard, ${req.user.name}` });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
});

module.exports = router;
