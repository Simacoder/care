// config.js

require('dotenv').config(); // Ensure dotenv is loaded to access .env file variables

const config = {
  supabase: {
    url: process.env.SUPABASE_URL, // Your Supabase URL from .env
    key: process.env.SUPABASE_KEY, // Your Supabase API Key from .env
  },
  server: {
    port: process.env.PORT || 5000, // Default port if none is provided in .env
  },
};

module.exports = config;