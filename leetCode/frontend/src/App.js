import React from 'react';
import './App.css';
import logo from './X.png';  // Import your logo image

const App = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
         <div className="container header-content">
          {/* Logo Image */}
          <div className='logo'>
          <img src={logo} alt="National Health Insurance" className="logo" />
          </div>
          
          <nav>
            <ul>
              <li><a href="#features">Home</a></li>
              <li><a href="#testimonials">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Faster Care, Better Outcomes</h2>
          <p>Get comprehensive health insurance coverage for you and your family. Affordable, accessible, and reliable.</p>
          <button className="cta-button">Subscribe</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Digital NHI Card</h3>
              <p>modernized healthcare financing system that uses digital platforms to provide universal health coverage, streamline claims processing, and improve healthcare outcomes.</p>
            </div>
            <div className="feature-card">
              <h3>Facility Locator</h3>
              <p> helps users find healthcare facilities, such as hospitals, clinics, and pharmacies, based on their location or search criteria. It provides detailed information, including addresses, hours, services, and ratings, and offers directions and navigation.</p>
            </div>
            <div className="feature-card">
              <h3>Integrated Health Record</h3>
              <p>centralized digital record of a patient's medical history, including diagnoses, treatments, medications, test results, and more.</p>
            </div>
            <div className="feature-card">
              <h3>Telemedicine</h3>
              <p> Remote healthcare consultations and services through digital technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>Bridging Accessibility Gaps and Streamlining Healthcare in South Africa Through a Digital NHI Companion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <p>Contact us: <strong>X-Healthcare.co.za</strong></p>
          <p>&copy; 2024 Acceleration Healthcare. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

