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
    value: '+1 (303) 879-4908',
    href: 'tel:+13038794908',
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
    value: '1500 N Grant ST STE R, Denver CO 80203',
    href: 'https://maps.google.com/?q=1500+N+Grant+ST+STE+R+Denver+CO+80203',
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
  'Reefers',
  'Box Truck',
  'Reefer Van',
  'Power-Only',
  'Step Deck',
  'Conestoga',
  'Intermodal',
];

const INIT = { name: '', email: '', phone: '', truck: '', message: '', smsConsent: false };

export default function Contact() {
  const [form, setForm]           = useState(INIT);
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          const errors = {};
          data.errors.forEach(({ field, message }) => {
            errors[field] = message;
          });
          setFieldErrors(errors);
        }
        throw new Error(data.message || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
                      className={`ct-input${fieldErrors.name ? ' ct-input--error' : ''}`}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="John Smith"
                      required
                    />
                    {fieldErrors.name && <span className="ct-field-error">{fieldErrors.name}</span>}
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">Email Address <span>*</span></label>
                    <input
                      id="ct-email"
                      className={`ct-input${fieldErrors.email ? ' ct-input--error' : ''}`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="john@example.com"
                      required
                    />
                    {fieldErrors.email && <span className="ct-field-error">{fieldErrors.email}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-phone">Phone Number</label>
                    <input
                      id="ct-phone"
                      className={`ct-input${fieldErrors.phone ? ' ct-input--error' : ''}`}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      placeholder="(000) 000-0000"
                    />
                    {fieldErrors.phone && <span className="ct-field-error">{fieldErrors.phone}</span>}
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-truck">Truck Type</label>
                    <select
                      id="ct-truck"
                      className={`ct-input ct-select${fieldErrors.truck ? ' ct-input--error' : ''}`}
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
                      className={`ct-input ct-textarea${fieldErrors.message ? ' ct-input--error' : ''}`}
                      name="message"
                      value={form.message}
                      onChange={handle}
                      placeholder="Tell us about your truck, routes, and what you're looking for…"
                      required
                    />
                    {fieldErrors.message && <span className="ct-field-error">{fieldErrors.message}</span>}
                </div>

                {/* SMS Consent */}
                <div className="ct-checkbox-field">
                  <input
                    id="ct-sms-consent"
                    className={`ct-checkbox-input${fieldErrors.smsConsent ? ' ct-input--error' : ''}`}
                    type="checkbox"
                    name="smsConsent"
                    checked={form.smsConsent}
                    onChange={handle}
                    required
                  />
                  {fieldErrors.smsConsent && <span className="ct-field-error">{fieldErrors.smsConsent}</span>}
                  <label className="ct-checkbox-label" htmlFor="ct-sms-consent">
                    I agree to receive SMS messages from Meg Logistics LLC regarding
                    dispatch services, load updates, appointment reminders, account
                    notifications, and customer support. Message frequency varies.
                    Message and data rates may apply. Reply STOP to opt out or HELP
                    for assistance. I have read and agree to the{' '}
                    <a href="/privacy" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/sms-terms" target="_blank" rel="noreferrer">
                      SMS Terms &amp; Conditions
                    </a>
                    . <span>*</span>
                  </label>
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