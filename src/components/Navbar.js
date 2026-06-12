import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="navbar-container">
      {/* Top Header Bar */}
      <div className="navbar-header">
        <div className="navbar-header-content">
          <div className="header-left">
            <div className="header-contact">
              <a href="tel:+13074001222" className="header-contact-item">
                <span>📍</span>
                <span>30 N Gold ST, Sheridan WY 82801</span>
              </a>
              <a href="mailto:info@fluxfreightllc.com" className="header-contact-item">
                <span>✉️</span>
                <span>info@fluxfreightllc.com</span>
              </a>
            </div>
          </div>
          <div className="header-socials">
            <a href="#" className="social-icon" title="Facebook">f</a>
            <a href="#" className="social-icon" title="LinkedIn">in</a>
            <a href="#" className="social-icon" title="Instagram">📷</a>
            <a href="#" className="social-icon" title="TikTok">🎵</a>
            <a href="#" className="social-icon" title="YouTube">▶️</a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navbar-main">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/images/website-logo.jpeg" alt="Logo" />
        </Link>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item active">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
            <button
              className="navbar-link"
              onClick={() => toggleDropdown('services')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Dispatch Services
              <span className="dropdown-indicator">▼</span>
            </button>
            <ul className="dropdown-menu" style={{ display: activeDropdown === 'services' ? 'block' : 'none' }}>
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
            </ul>
          </li>
          <li className="navbar-item" onMouseEnter={() => setActiveDropdown('course')} onMouseLeave={() => setActiveDropdown(null)}>
            <button
              className="navbar-link"
              onClick={() => toggleDropdown('course')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Flux Dispatching Course
              <span className="dropdown-indicator">▼</span>
            </button>
            <ul className="dropdown-menu" style={{ display: activeDropdown === 'course' ? 'block' : 'none' }}>
              <li><a href="#course1">Course 1</a></li>
              <li><a href="#course2">Course 2</a></li>
              <li><a href="#course3">Course 3</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact Us</Link>
          </li>
        </ul>

        {/* Phone Number */}
        <div className="navbar-phone">
          <span>☎️</span>
          <a href="tel:+13074001222">(307) 400-1222</a>
        </div>
      </div>
    </nav>
  );
}
