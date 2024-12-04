// models/doctorModel.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Doctor Model
const Doctor = {
  // Get doctor profile by ID
  async getDoctorProfile(id) {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('doctor_id', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update doctor profile
  async updateDoctorProfile(id, { fullName, specialties, location, workExperience }) {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .update({ full_name: fullName, specialties, location, work_experience: workExperience })
        .eq('doctor_id', id);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default Doctor;
