// authRoutes.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Registration Route
router.post('/register', async (req, res) => {
  const { fullName, email, password, phoneNumber, gender, emergencyContact } = req.body;

  // Create user using Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const { user } = data;

  // Save user profile in the 'users' table
  const { error: dbError } = await supabase
    .from('users')
    .insert([
      { full_name: fullName, email, phone_number: phoneNumber, gender, emergency_contact: emergencyContact, user_id: user.id }
    ]);

  if (dbError) {
    return res.status(400).json({ error: dbError.message });
  }

  res.status(200).json({ message: 'Registration successful!' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Login successful!', user: data.user });
});

export default router;
