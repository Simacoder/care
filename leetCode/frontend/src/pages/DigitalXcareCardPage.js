import React from 'react';

const DigitalXcareCardPage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Digital X-care Card</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl mb-4">Personal Information</h2>
        <div className="mb-4">
          <strong>Full Name:</strong> John Doe
        </div>
        <div className="mb-4">
          <strong>X-care Number:</strong> 123456789
        </div>
        <div className="mb-4">
          <strong>Gender:</strong> Male
        </div>
        <h2 className="text-2xl mb-4">Medical Alerts</h2>
        <div className="mb-4">
          <strong>Blood Type:</strong> O+
        </div>
        <h2 className="text-2xl mb-4">Insurance Details</h2>
        <div className="mb-4">
          <strong>Insurance Provider:</strong> ABC Health Insurance
        </div>
      </div>
    </div>
  );
};

export default DigitalXcareCardPage;
