// doctorRoutes.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get doctor profile by ID
router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;

  // Fetch doctor data from 'doctors' table
  const { data, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('doctor_id', id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ profile: data });
});

// Update doctor profile
router.put('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, specialties, location, workExperience } = req.body;

  const { data, error } = await supabase
    .from('doctors')
    .update({ full_name: fullName, specialties, location, work_experience: workExperience })
    .eq('doctor_id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Doctor profile updated successfully!' });
});

export default router;
