import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import DigitalXcareCardPage from './pages/DigitalXcareCardPage';
import FacilityLocatorPage from './pages/FacilityLocatorPage';
import HealthRecordPage from './pages/HealthRecordPage';
import TelemedicinePage from './pages/TelemedicinePage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/App.css';
import './components/LandingPage.css';
import './components/PrivacyPolicyPage.css';
import './components/RegistrationPage.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/digital-card" element={<DigitalXcareCardPage />} />
          <Route path="/facility-locator" element={<FacilityLocatorPage />} />
          <Route path="/health-record" element={<HealthRecordPage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;