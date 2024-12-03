import React from 'react';

const HealthRecordPage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Integrated Health Record</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl mb-4">Health Profile</h2>
        <div className="mb-4">
          <strong>Age:</strong> 29
        </div>
        <div className="mb-4">
          <strong>Blood Group:</strong> O+
        </div>
        <h2 className="text-2xl mb-4">Medical History</h2>
        <div className="mb-4">
          <strong>Past Diagnoses:</strong> Hypertension
        </div>
        <div className="mb-4">
          <strong>Treatments:</strong> Medication prescribed
        </div>
        <h2 className="text-2xl mb-4">Lab Results</h2>
        <div className="mb-4">
          <strong>Blood Test:</strong> Normal
        </div>
      </div>
    </div>
  );
};

export default HealthRecordPage;
