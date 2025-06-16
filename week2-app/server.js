// server.js

require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const { errorHandler } = require('./errors/customErrors');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(bodyParser.json());      // Parse JSON bodies
app.use(logger);                // Custom logger
app.use(auth);                  // Authentication middleware

// --- Routes ---
app.use('/api/products', productRoutes);

// --- Root Route ---
app.get('/', (req, res) => {
  res.send('📦 Welcome to the Product API! Visit /api/products to get started.');
});

// --- Error Handler ---
app.use(errorHandler);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
