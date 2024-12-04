// models/userModel.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// User Model
const User = {
  // Create a new user in the Supabase 'users' table
  async createUser({ fullName, email, phoneNumber, gender, emergencyContact, password }) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      const { user } = data;

      // Save the user profile in the 'users' table
      const { error: dbError } = await supabase
        .from('users')
        .insert([{ full_name: fullName, email, phone_number: phoneNumber, gender, emergency_contact: emergencyContact, user_id: user.id }]);

      if (dbError) {
        throw new Error(dbError.message);
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get user profile by user ID
  async getUserProfile(id) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update user profile
  async updateUserProfile(id, { fullName, phoneNumber, gender, emergencyContact, homeAddress }) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ full_name: fullName, phone_number: phoneNumber, gender, emergency_contact: emergencyContact, home_address: homeAddress })
        .eq('user_id', id);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default User;
