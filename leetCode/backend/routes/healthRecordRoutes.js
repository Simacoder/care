// healthRecordRoutes.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get health record by user ID
router.get('/record/:id', async (req, res) => {
  const { id } = req.params;

  // Fetch user health record from 'health_records' table
  const { data, error } = await supabase
    .from('health_records')
    .select('*')
    .eq('user_id', id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ healthRecord: data });
});

// Update health record
router.put('/record/:id', async (req, res) => {
  const { id } = req.params;
  const { medicalHistory, currentMedications, labResults } = req.body;

  const { data, error } = await supabase
    .from('health_records')
    .update({ medical_history: medicalHistory, current_medications: currentMedications, lab_results: labResults })
    .eq('user_id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Health record updated successfully!' });
});

export default router;
