const express = require('express');
const connectDB = require('./config/db'); // Adjust path if needed
const authRoutes = require('./routes/authRoutes'); // Adjust path if needed
const dashboardRoutes = require('./routes/dashboardRoutes');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(express.json()); // To parse JSON bodies

connectDB(); // Connect to MongoDB
app.use(cors());
app.use(express.json()); // For parsing application/json

let listings = []; // In-memory storage for listings (use a database in production)

// GET endpoint to fetch all listings
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// POST endpoint to add a new listing
app.post('/api/listings', (req, res) => {
  const newListing = { ...req.body, id: Date.now() }; // Adding a unique ID
  listings.push(newListing);
  res.status(201).json(newListing);
});

// Other CRUD operations (PUT, DELETE) can be added similarly



// Mount the auth routes
app.use('/api/auth', authRoutes); // Use a base path for your routes
app.use('/api/dashboard', dashboardRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
