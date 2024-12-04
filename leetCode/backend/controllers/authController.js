// controllers/authController.js
import User from '../models/userModel.js';

const authController = {
  async register(req, res) {
    const { fullName, email, password, phoneNumber, gender, emergencyContact } = req.body;

    try {
      const user = await User.createUser({ fullName, email, password, phoneNumber, gender, emergencyContact });
      res.status(200).json({ message: 'Registration successful!', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ message: 'Login successful!', user: data.user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default authController;
