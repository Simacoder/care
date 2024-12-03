const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase client using environment variables
const supabaseUrl = process.env.SUPABASE_URL; // Your Supabase URL from the project settings
const supabaseKey = process.env.SUPABASE_KEY; // Your Supabase API key from the project settings
const supabase = createClient(supabaseUrl, supabaseKey);

// Connect to the database (with basic authentication)
const connectDB = async () => {
  try {
    // Test the connection to Supabase by fetching some data
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1);

    if (error) throw new Error(error.message);
    console.log('Supabase connection successful', data);
  } catch (err) {
    console.error('Supabase connection failed:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

// Call the connection function
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Server running on port 5000');
});

// Importing and using route files for modularity
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/records', require('./routes/healthRecordRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
