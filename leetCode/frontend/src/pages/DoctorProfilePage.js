import React from 'react';

const DoctorProfilePage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Doctor Profile</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <strong>Full Name:</strong> Dr. John Doe
        </div>
        <div className="mb-4">
          <strong>Specialties:</strong> Cardiologist, Internal Medicine
        </div>
        <div className="mb-4">
          <strong>Location:</strong> Health Clinic, 123 Medical Road, City
        </div>
        <div className="mb-4">
          <strong>Work Experience:</strong> 10+ years of experience in cardiology and internal medicine
        </div>
        <div className="mb-4">
          <strong>Profile Picture:</strong>
          <img src="doctor-profile.jpg" alt="Doctor" className="w-20 h-20 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
