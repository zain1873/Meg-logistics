import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

// Set your WhatsApp number here (international format, no + or spaces)
const PHONE_NUMBER = '13074001222';
const DEFAULT_MESSAGE = 'Hello! I would like to know more about Flux Freight LLC services.';

export default function WhatsAppButton() {
  const link = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse"></span>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}
