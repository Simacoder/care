// userRoutes.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get user profile by user ID
router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;

  // Fetch user data from 'users' table
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ profile: data });
});

// Update user profile
router.put('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, phoneNumber, gender, emergencyContact, homeAddress } = req.body;

  const { data, error } = await supabase
    .from('users')
    .update({ full_name: fullName, phone_number: phoneNumber, gender, emergency_contact: emergencyContact, home_address: homeAddress })
    .eq('user_id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Profile updated successfully!' });
});

export default router;
