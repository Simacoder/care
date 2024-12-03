import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-green-600">Welcome to X-care</h1>
        <p className="text-xl mt-4 text-green-700">"Care for all"</p>
      </header>
      <section className="text-center mb-12">
        <p className="text-lg">Your health and well-being is our priority. Join us for personalized healthcare.</p>
      </section>
      <section className="text-center">
        <div className="space-x-4">
          <Link to="/register" className="bg-green-600 text-white py-2 px-4 rounded-lg">Sign Up</Link>
          <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-lg">Log In</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
