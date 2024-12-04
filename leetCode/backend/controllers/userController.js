// controllers/userController.js
import User from '../models/userModel.js';

const userController = {
  async getProfile(req, res) {
    const { id } = req.params;

    try {
      const userProfile = await User.getUserProfile(id);
      res.status(200).json({ profile: userProfile });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateProfile(req, res) {
    const { id } = req.params;
    const { fullName, phoneNumber, gender, emergencyContact, homeAddress } = req.body;

    try {
      const updatedProfile = await User.updateUserProfile(id, { fullName, phoneNumber, gender, emergencyContact, homeAddress });
      res.status(200).json({ message: 'Profile updated successfully!', profile: updatedProfile });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default userController;
