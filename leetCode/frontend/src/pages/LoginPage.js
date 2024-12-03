import React, { useState } from 'react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login functionality
  };

  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-4" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4" />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg w-full">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
