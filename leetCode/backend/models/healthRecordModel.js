// models/healthRecordModel.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// HealthRecord Model
const HealthRecord = {
  // Get health record by user ID
  async getHealthRecord(userId) {
    try {
      const { data, error } = await supabase
        .from('health_records')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update health record
  async updateHealthRecord(userId, { medicalHistory, currentMedications, labResults }) {
    try {
      const { data, error } = await supabase
        .from('health_records')
        .update({ medical_history: medicalHistory, current_medications: currentMedications, lab_results: labResults })
        .eq('user_id', userId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default HealthRecord;
