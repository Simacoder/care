import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message to backend
  };

  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <strong>Email:</strong> x-care.co.za
        </div>
        <div className="mb-4">
          <strong>Contact Number:</strong> (+27) 11 547 9752
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 mb-4"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-4"
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage; // This is the missing export statement
