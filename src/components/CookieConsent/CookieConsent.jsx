import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import './CookieConsent.css';
import { LuCookie } from "react-icons/lu";

const STORAGE_KEY = 'meg-logistics-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [functionalConsent, setFunctionalConsent] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Show banner after a short delay for smooth UX
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAcceptAll() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, functional: true, analytics: true })
    );
    setVisible(false);
  }

  function handleRejectNonEssential() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, functional: false, analytics: false })
    );
    setVisible(false);
  }

  function handleSavePreferences() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, functional: functionalConsent, analytics: analyticsConsent })
    );
    setVisible(false);
    setShowPreferences(false);
  }

  function handleDismiss() {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className={`cookie-consent-banner ${showPreferences ? 'cookie-preferences-open' : ''}`}>
        <button className="cookie-close-btn" onClick={handleDismiss} aria-label="Close">
          <IoClose size={22} />
        </button>

        {!showPreferences ? (
          <>
           <div className="cookie-header">
            <LuCookie className="cookie-icon" />
            <h3>We Value Your Privacy</h3>
          </div>

            <p className="cookie-message">
              We use cookies and similar technologies to improve your browsing experience,
              analyze website traffic, remember your preferences, and enhance our services.
              By clicking <strong>"Accept All"</strong>, you consent to our use of cookies.
              You can choose <strong>"Reject Non-Essential"</strong> or manage your browser
              settings at any time.
            </p>

            <p className="cookie-message-secondary">
              For more information, please review our{' '}
              <Link to="/cookies" onClick={handleDismiss}>Cookie Policy</Link> and{' '}
              <Link to="/privacy" onClick={handleDismiss}>Privacy Policy</Link>.
            </p>

            <div className="cookie-actions">
              <button className="cookie-btn cookie-btn-primary" onClick={handleAcceptAll}>
                Accept All
              </button>
              <button className="cookie-btn cookie-btn-secondary" onClick={handleRejectNonEssential}>
                Reject Non-Essential
              </button>
              <button
                className="cookie-btn cookie-btn-link"
                onClick={() => setShowPreferences(true)}
              >
                Cookie Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-header">
              <span className="cookie-icon">⚙️</span>
              <h3>Cookie Preferences</h3>
            </div>

            <p className="cookie-message">
              Customize which cookies you allow. Essential cookies are always enabled
              as they are necessary for the website to function.
            </p>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Essential</strong>
                <p>Required for the website to function properly. Cannot be disabled.</p>
              </div>
              <div className="cookie-toggle cookie-toggle-always-on">
                <span>Always On</span>
              </div>
            </div>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Functional</strong>
                <p>Remember your preferences and settings for a better experience.</p>
              </div>
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={functionalConsent}
                  onChange={(e) => setFunctionalConsent(e.target.checked)}
                />
                <span className="cookie-toggle-slider"></span>
              </label>
            </div>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Analytics</strong>
                <p>Help us understand how you use the website so we can improve it.</p>
              </div>
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                />
                <span className="cookie-toggle-slider"></span>
              </label>
            </div>

            <div className="cookie-actions">
              <button className="cookie-btn cookie-btn-primary" onClick={handleSavePreferences}>
                Save Preferences
              </button>
              <button
                className="cookie-btn cookie-btn-link"
                onClick={() => setShowPreferences(false)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// local storage clear
// localStorage.removeItem('meg-logistics-cookie-consent');