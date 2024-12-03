import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-sky-500 min-h-screen p-8">
      <h1 className="text-center text-3xl mb-6">Privacy Policy</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          X-care is committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we safeguard it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information such as your name, email address, phone number, medical information, and other data necessary to provide our healthcare services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          Your personal information is used to offer our services, schedule appointments, manage your health records, and communicate with you about our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable steps to protect your information, but please be aware that no security system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information at any time. Please contact us for more information on how to exercise your rights.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <p className="text-center mt-6">
          <a href="/" className="text-green-600 underline">Go Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
