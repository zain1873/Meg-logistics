import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaChevronRight,
} from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home',                  href: '#hero' },
  { label: 'What We Offer',         href: '#what-we-offer' },
  { label: 'Industries We Serve',   href: '#industries' },
  { label: 'Why Meg Logistics LLC?',href: '#why-us' },
  { label: 'Contact Us',            href: '#contact' },
];

const services = [
  { label: 'Dispatch Services',      href: '#what-we-offer' },
  { label: 'Flux Dispatching Course',href: '#what-we-offer' },
  { label: 'Freight Management',     href: '#what-we-offer' },
  { label: 'Load Booking',           href: '#what-we-offer' },
  { label: 'Carrier Support',        href: '#what-we-offer' },
];

const socials = [
  { Icon: FaFacebookF, label: 'Facebook', url: 'https://www.facebook.com/meglogisticsllc/' },
  { Icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/meglogisticsllc/' },
  { Icon: FaYoutube, label: 'YouTube', url: 'https://www.youtube.com/@MegLogisticsLLC' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ejaz-ahmad-897606405/' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top accent strip */}
      <div className="footer-accent"></div>

      <div className="footer-main">

        {/* About / Brand */}
        <div className="footer-col footer-about">
          <img src="/project-logo.png" alt="Flux Freight LLC" className="footer-logo" />
          <p className="footer-desc">
            Meg Logistics LLC — Swift &amp; Steady. We provide reliable freight
            dispatch services, connecting carriers with the best loads to keep
            your business moving forward.
          </p>
          <div className="footer-socials">
            {socials.map(({ Icon, label, url }) => (
              <a key={label} href={url} className="footer-social" aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}><FaChevronRight /> {link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            {services.map(item => (
              <li key={item.label}>
                <a href={item.href}><FaChevronRight /> {item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-title">Get In Touch</h3>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="footer-contact-icon" />
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Denver, Colorado
              </a>
            </li>
            <li>
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:Info@fluxfreightllc.com">Info@meglogistics.com</a>
            </li>
            <li>
              <FaPhone className="footer-contact-icon" />
              <a href="tel:+13074001222">(307) 400-1222</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Meg Logistics LLC. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <span className="footer-legal-sep">|</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p className="footer-credit">
          Designed by{' '}
          <a href="https://twocoreglobal.com" target="_blank" rel="noreferrer">
            Twocoreglobal
          </a>
        </p>
      </div>
    </footer>
  );
}
