import React from 'react';
import supabase from '../config/supabaseClient';

const LandingPage = () => {
  console.log(supabase);
  return (
    <div className="bg-sky-500 min-h-screen">
      <header className="bg-green-600 p-5">
        <h1 className="text-white text-3xl text-center">X-care</h1>
        <p className="text-center text-white">Care for all.</p>
      </header>

      <main className="p-8 text-center">
        <h2 className="text-2xl">About Us</h2>
        <p className="mt-4">We provide comprehensive health services, including telemedicine, facility locator, and integrated health records.</p>
        <div className="mt-6">
          <a href="/signup" className="bg-green-600 text-white py-2 px-4 rounded-lg">Sign Up</a>
          <a href="/login" className="bg-green-600 text-white py-2 px-4 rounded-lg ml-4">Log In</a>
        </div>
      </main>

      <footer className="bg-green-600 p-4 text-white text-center">
        <p>Our Services</p>
      </footer>
    </div>
  );
};

export default LandingPage;
