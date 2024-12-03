import React from 'react';

const TelemedicinePage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Telemedicine</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl mb-4">Appointment Scheduling</h2>
        <p>Schedule an appointment with a doctor via our platform.</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Schedule Appointment</button>

        <h2 className="text-2xl mb-4 mt-6">Health Data Sharing</h2>
        <p>Share your health data securely with your healthcare providers.</p>

        <h2 className="text-2xl mb-4 mt-6">Prescription/Follow Up</h2>
        <p>Receive prescriptions and follow-up care via our telemedicine services.</p>
      </div>
    </div>
  );
};

export default TelemedicinePage;
