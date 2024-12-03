import React from 'react';

const UserProfilePage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">User Profile</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <strong>Full Name:</strong> John Doe
        </div>
        <div className="mb-4">
          <strong>Gender:</strong> Male
        </div>
        <div className="mb-4">
          <strong>Emergency Contact:</strong> Jane Doe
        </div>
        <div className="mb-4">
          <strong>Home Address:</strong> 123 Health St, City, Country
        </div>
        <div className="mb-4">
          <strong>Phone Number:</strong> (+27)11 547 9752
        </div>
        <div className="mb-4">
          <strong>Profile Picture:</strong>
          <img src="profile.jpg" alt="Profile" className="w-20 h-20 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
