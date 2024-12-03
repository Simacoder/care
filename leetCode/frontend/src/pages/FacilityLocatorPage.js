import React, { useState } from 'react';

const FacilityLocatorPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Facility Locator</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <input
          type="text"
          placeholder="Search for a facility..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4"
        />
        <div className="facility-info">
          <h3 className="text-xl">Facility Information</h3>
          <div className="facility-details">
            <strong>Name:</strong> Health Clinic A
          </div>
          <div className="facility-details">
            <strong>Location:</strong> 456 Health Rd, City
          </div>
          <div className="facility-details">
            <strong>Services:</strong> Emergency, Pediatrics, Surgery
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityLocatorPage;
