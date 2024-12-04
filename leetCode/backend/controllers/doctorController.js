// controllers/doctorController.js
import Doctor from '../models/doctorModel.js';

const doctorController = {
  async getProfile(req, res) {
    const { id } = req.params;

    try {
      const doctorProfile = await Doctor.getDoctorProfile(id);
      res.status(200).json({ profile: doctorProfile });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateProfile(req, res) {
    const { id } = req.params;
    const { fullName, specialties, location, workExperience } = req.body;

    try {
      const updatedProfile = await Doctor.updateDoctorProfile(id, { fullName, specialties, location, workExperience });
      res.status(200).json({ message: 'Doctor profile updated successfully!', profile: updatedProfile });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default doctorController;
