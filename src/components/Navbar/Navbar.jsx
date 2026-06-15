import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaChevronRight, FaTimes,
} from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'What We Offer', href: '#what-we-offer' },
  { label: 'Industries We Serve', href: '#industries' },
  { label: 'Why Meg Logistics LLC?', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
];

const socials = [
  { Icon: FaFacebookF, label: 'Facebook', url: 'https://www.facebook.com/meglogisticsllc/' },
  { Icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/meglogisticsllc/' },
  { Icon: FaYoutube, label: 'YouTube', url: 'https://www.youtube.com/@MegLogisticsLLC' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ejaz-ahmad-897606405/' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden]     = useState(false);
  const prevScrollY             = useRef(0);
  const menuOpenRef             = useRef(false);

  // Keep ref in sync so scroll handler can read it without stale closure
  menuOpenRef.current = menuOpen;

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) setHidden(false); // always reveal navbar when menu opens
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    const onScroll = () => {
      if (menuOpenRef.current) return;
      const currentY = window.scrollY;
      if (currentY < 10) {
        setHidden(false);
      } else if (currentY > prevScrollY.current && currentY > 80) {
        setHidden(true);
      } else if (currentY < prevScrollY.current) {
        setHidden(false);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar-spacer" />
      <nav className={`navbar-wrapper${hidden ? ' navbar--hidden' : ''}`}>
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
                <a href="https://maps.google.com/?q=Denver,Colorado" className="topbar-item" target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt className="topbar-icon" />
                  <span>Denver, Colorado</span>
                </a>
             
                <span className="topbar-divider" />
                <a href="tel:+13074001222" className="topbar-item">
                  <FaPhone className="topbar-icon" />
                  <span>(307) 400-1222</span>
                </a>
                <span className="topbar-divider" />

                <span className="topbar-divider" />
                <a href="mailto:Info@meglogistics.com" className="topbar-item">
                  <FaEnvelope className="topbar-icon" />
                  <span>Info@meglogistics.com</span>
                </a>
              </div>
              <div className="topbar-socials">
                {socials.map(({ Icon, label, url }) => (
                  <a key={label} href={url} className="topbar-social-link" aria-label={label} target="_blank" rel="noreferrer"><Icon /></a>
                ))}
              </div>
            </div>

            {/* Main nav links */}
            <div className="navbar-nav">
              <ul className="navbar-links">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link">{link.label}</a>
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
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              style={{ '--i': i }}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <FaChevronRight className="mobile-menu-arrow" />
            </a>
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
            <a href="mailto:Info@meglogistics.com">
              <FaEnvelope /> <span>Info@meglogistics.com</span>
            </a>
          </div>

          <div className="mobile-menu-socials">
            {socials.map(({ Icon, label, url }) => (
              <a key={label} href={url} aria-label={label} target="_blank" rel="noreferrer"><Icon /></a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
