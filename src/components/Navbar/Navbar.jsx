import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube,
  FaChevronRight, FaTimes,
} from 'react-icons/fa';
import './navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'What We Offer', path: '/what-we-offer' },
  { label: 'Industries We Serve', path: '/industries' },
  { label: 'Why Flux Freight LLC?', path: '/why-us' },
  { label: 'Contact Us', path: '/contact' },
];

const socials = [
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaTiktok, label: 'TikTok' },
  { Icon: FaYoutube, label: 'YouTube' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-container">

          {/* ── Logo (spans full height) ── */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src="/project-logo.png" alt="Logo" />
          </Link>

          {/* ── Right Panel (desktop) ── */}
          <div className="navbar-right">

            {/* Top info bar */}
            <div className="navbar-topbar">
              <div className="topbar-contact">
                <a href="https://maps.google.com" className="topbar-item" target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt className="topbar-icon" />
                  <span>30 N Gould ST, Sheridan WY 82801</span>
                </a>
                <a href="mailto:Info@fluxfreightllc.com" className="topbar-item">
                  <FaEnvelope className="topbar-icon" />
                  <span>Info@fluxfreightllc.com</span>
                </a>
              </div>
              <div className="topbar-socials">
                {socials.map(({ Icon, label }) => (
                  <a key={label} href="#" className="topbar-social-link" aria-label={label}><Icon /></a>
                ))}
              </div>
            </div>

            {/* Main nav links */}
            <div className="navbar-nav">
              <ul className="navbar-links">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <a href="tel:+13074001222" className="navbar-phone">
                <FaPhone />
                <span>(307) 400-1222</span>
              </a>
            </div>

          </div>

          {/* ── Mobile actions: phone + hamburger ── */}
          <div className="navbar-mobile-actions">
            <a href="tel:+13074001222" className="mobile-call-btn" aria-label="Call us">
              <FaPhone />
              <span>(307) 400-1222</span>
            </a>

            <button
              className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </nav>

      {/* ── Full-Screen Mobile Menu (opens top → bottom) ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </button>

        <nav className="mobile-menu-links">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-menu-link"
              style={{ '--i': i }}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <FaChevronRight className="mobile-menu-arrow" />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a href="tel:+13074001222" className="mobile-menu-phone">
            <FaPhone /> (307) 400-1222
          </a>

          <div className="mobile-menu-contact">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <FaMapMarkerAlt /> <span>30 N Gould ST, Sheridan WY 82801</span>
            </a>
            <a href="mailto:Info@fluxfreightllc.com">
              <FaEnvelope /> <span>Info@fluxfreightllc.com</span>
            </a>
          </div>

          <div className="mobile-menu-socials">
            {socials.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
