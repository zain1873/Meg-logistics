import React, { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaArrowRight, FaCheckCircle, FaSpinner,
} from 'react-icons/fa';
import './Contact.css';

const infoItems = [
  {
    Icon: FaPhone,
    label: 'Phone',
    value: '(307) 400-1222',
    href: 'tel:+13074001222',
  },
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'info@meglogistic.com',
    href: 'mailto:info@meglogistic.com',
  },
  {
    Icon: FaMapMarkerAlt,
    label: 'Address',
    value: 'Denver, Colorado',
    href: 'https://maps.google.com/?q=30+N+Gould+ST+Sheridan+WY+82801',
  },
  {
    Icon: FaClock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9 AM – 6 PM EST',
    href: null,
  },
];

const truckTypes = [
  'Dry Van',
  'Flatbed',
  'Reefer / Refrigerated',
  'Box Truck',
  'Tanker Truck',
  'Power-Only',
  'Step Deck',
  'Lowboy / RGN',
  'Other',
];

const INIT = { name: '', email: '', phone: '', truck: '', message: '' };

export default function Contact() {
  const [form, setForm]           = useState(INIT);
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const reset = () => {
    setForm(INIT);
    setSubmitted(false);
  };

  return (
    <section className="ct-section" id="contact">
      <div className="ct-container">

        {/* ── Header ── */}
        <div className="ct-header">
          <span className="ct-tag">Contact Us</span>
          <h2 className="ct-title">Get In Touch With Us</h2>
          <p className="ct-sub">
            Ready to put your truck to work? Fill out the form and our dispatch
            team will get back to you within 24 hours.
          </p>
        </div>

        {/* ── Card grid ── */}
        <div className="ct-card">

          {/* Left: info panel */}
          <div className="ct-info">
            <div className="ct-info-deco ct-info-deco--1" />
            <div className="ct-info-deco ct-info-deco--2" />

            <h3 className="ct-info-title">Contact Information</h3>
            <p className="ct-info-desc">
              Reach out directly or use the form — we're always on call for
              owner-operators and fleet managers.
            </p>

            <ul className="ct-info-list">
              {infoItems.map(({ Icon, label, value, href }) => (
                <li className="ct-info-item" key={label}>
                  <span className="ct-info-icon"><Icon /></span>
                  <div className="ct-info-text">
                    <span className="ct-info-label">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        className="ct-info-value ct-info-link"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="ct-info-value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form panel */}
          <div className="ct-form-panel">
            {submitted ? (
              <div className="ct-success">
                <FaCheckCircle className="ct-success-icon" />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. Our dispatch team will contact
                  you within 24 hours.
                </p>
                <button className="ct-reset-btn" onClick={reset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={submit} noValidate>
                <h3 className="ct-form-title">Send Us a Message</h3>

                {/* Row 1 */}
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-name">Full Name <span>*</span></label>
                    <input
                      id="ct-name"
                      className="ct-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">Email Address <span>*</span></label>
                    <input
                      id="ct-email"
                      className="ct-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-phone">Phone Number</label>
                    <input
                      id="ct-phone"
                      className="ct-input"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-truck">Truck Type</label>
                    <select
                      id="ct-truck"
                      className="ct-input ct-select"
                      name="truck"
                      value={form.truck}
                      onChange={handle}
                    >
                      <option value="">Select truck type…</option>
                      {truckTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-msg">Message <span>*</span></label>
                  <textarea
                    id="ct-msg"
                    className="ct-input ct-textarea"
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about your truck, routes, and what you're looking for…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="ct-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="ct-spinner" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
