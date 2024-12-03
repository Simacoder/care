import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">X-care</h1>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/register" className="text-white mx-4">Sign Up</Link>
          <Link to="/login" className="text-white mx-4">Log In</Link>
          <Link to="/contact" className="text-white mx-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
