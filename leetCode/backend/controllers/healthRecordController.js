// controllers/healthRecordController.js
import HealthRecord from '../models/healthRecordModel.js';

const healthRecordController = {
  // Fetch the health record of a user by their ID
  async getRecord(req, res) {
    const { userId } = req.params;

    try {
      const healthRecord = await HealthRecord.getHealthRecord(userId);
      if (!healthRecord) {
        return res.status(404).json({ error: 'Health record not found.' });
      }
      res.status(200).json({ record: healthRecord });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update the health record of a user
  async updateRecord(req, res) {
    const { userId } = req.params;
    const { medicalHistory, currentMedications, labResults } = req.body;

    try {
      const updatedRecord = await HealthRecord.updateHealthRecord(userId, { medicalHistory, currentMedications, labResults });
      res.status(200).json({ message: 'Health record updated successfully!', record: updatedRecord });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default healthRecordController;
