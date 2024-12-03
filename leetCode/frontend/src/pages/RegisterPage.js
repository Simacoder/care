import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', idNumber: '', phoneNumber: '', gender: '', password: '', confirmPassword: '', emergencyContact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend
  };

  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 mb-4" />
        <select name="gender" onChange={handleChange} className="w-full p-2 mb-4">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} className="w-full p-2 mb-4" />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg w-full">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
