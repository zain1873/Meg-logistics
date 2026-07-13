import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';
import LegalContactCard from '../components/ContactCard/ContactCard';

export default function CookiesPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <span className="legal-hero-badge">Legal</span>
        <h1>Cookie Policy</h1>
        <p>
          This Cookie Policy explains how Meg Logistics LLC uses cookies and similar tracking technologies on our website. It provides you with information about what cookies are, how we use them, and how you can manage your preferences.
        </p>
      </div>
      <div className="legal-accent" />

      <main className="legal-content">

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Effective Date</h2>
          </div>
          <p>Effective Date: July 13, 2026</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Introduction</h2>
          </div>
          <p>
            This Cookie Policy explains how Meg Logistics LLC ("Company," "we," "our," or "us") uses cookies and similar technologies when you visit our website.
          </p>
          <p>
            By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy, except where you have disabled them through your browser settings or our cookie preferences (if available).
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>What Are Cookies?</h2>
          </div>
          <p>
            Cookies are small text files stored on your computer, smartphone, or other device when you visit a website. They help websites function properly, remember your preferences, improve performance, and provide a better browsing experience.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Types of Cookies We Use</h2>
          </div>

          <h3 className="legal-subheading">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly and cannot be disabled through our website.
          </p>
          <p>They help with:</p>
          <ul>
            <li>Website security</li>
            <li>Form submissions</li>
            <li>Session management</li>
            <li>Navigation</li>
            <li>Basic website functionality</li>
          </ul>
          <p>Without these cookies, certain features of the website may not work correctly.</p>

          <h3 className="legal-subheading">Performance and Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors use our website so we can improve its performance.
          </p>
          <p>They may collect information such as:</p>
          <ul>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Traffic sources</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Website performance metrics</li>
          </ul>
          <p>This information is aggregated and does not directly identify individual visitors.</p>

          <h3 className="legal-subheading">Functional Cookies</h3>
          <p>These cookies remember your preferences to improve your experience, such as:</p>
          <ul>
            <li>Language settings</li>
            <li>Previously entered information</li>
            <li>User preferences</li>
          </ul>

          <h3 className="legal-subheading">Security Cookies</h3>
          <p>Security cookies help detect suspicious activity, prevent fraud, and protect our website and users.</p>

          <h3 className="legal-subheading">Third-Party Cookies</h3>
          <p>
            We may use trusted third-party service providers to help operate and improve our website. These providers may place cookies on your device to deliver their services.
          </p>
          <p>Examples may include:</p>
          <ul>
            <li>Website analytics providers (such as Google Analytics)</li>
            <li>Spam protection services</li>
            <li>Website hosting providers</li>
            <li>Embedded map or video providers</li>
          </ul>
          <p>Each third party has its own privacy and cookie practices. We encourage you to review their privacy policies.</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Managing Cookies</h2>
          </div>
          <p>
            Most web browsers automatically accept cookies, but you can control or delete cookies through your browser settings.
          </p>
          <p>Depending on your browser, you can:</p>
          <ul>
            <li>View stored cookies</li>
            <li>Delete existing cookies</li>
            <li>Block all cookies</li>
            <li>Block third-party cookies</li>
            <li>Receive notifications before cookies are stored</li>
          </ul>
          <p>
            Please note that disabling certain cookies may affect the functionality and performance of our website.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Do Not Track</h2>
          </div>
          <p>
            Some web browsers offer a "Do Not Track" (DNT) feature.
          </p>
          <p>
            Because there is currently no universally accepted standard for responding to DNT signals, our website does not currently respond differently when such signals are received.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Changes to This Cookie Policy</h2>
          </div>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices.
          </p>
          <p>
            Any updates will be posted on this page with a revised Effective Date.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Contact Us</h2>
          </div>
          <p>
            If you have any questions about this Cookie Policy or our use of cookies, please contact us:
          </p>
          <div className="legal-contact-details">
            <p><strong>Meg Logistics LLC</strong></p>
            <p>
              <a
                href="https://maps.google.com/?q=1500+N+Grant+ST+STE+R+Denver+CO+80203"
                target="_blank"
                rel="noreferrer"
              >
                1500 N Grant ST STE R, Denver CO 80203
              </a>
            </p>
            <p>
              <a href="mailto:info@meglogistic.com">info@meglogistic.com</a>
            </p>
            <p>
              <a href="tel:+13038794908">+1 (303) 879-4908</a>
            </p>
            <p>
              <a href="https://meglogistic.com" target="_blank" rel="noreferrer">https://meglogistic.com</a>
            </p>
          </div>
        </div>

        <LegalContactCard/>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}