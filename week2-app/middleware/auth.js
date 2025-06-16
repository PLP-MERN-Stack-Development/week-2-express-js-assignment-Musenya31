require('dotenv').config(); // Load environment variables

const API_KEY = process.env.API_KEY;

function auth(req, res, next) {
  const clientKey = req.header('x-api-key');

  if (!clientKey || clientKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }

  next();
}

module.exports = auth;
