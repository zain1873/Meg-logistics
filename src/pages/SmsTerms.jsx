import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';
import LegalContactCard from '../components/ContactCard/ContactCard';

export default function SmsTerms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <span className="legal-hero-badge">Legal</span>
        <h1>SMS Terms & Conditions</h1>
        <p>
          These SMS Terms & Conditions govern the text messaging communications between Meg Logistics LLC and its clients, carriers, and partners. Please read these terms carefully before opting in to receive SMS messages.
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
            These SMS Terms & Conditions ("SMS Terms") govern the text messaging services provided by Meg Logistics LLC ("Company," "we," "our," or "us"). By opting in to receive SMS messages from Meg Logistics LLC, you agree to these SMS Terms.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Program Description</h2>
          </div>
          <p>
            Meg Logistics LLC provides SMS communications to customers, owner-operators, motor carriers, and prospective clients regarding our freight dispatch and logistics support services.
          </p>
          <p>Messages may include:</p>
          <ul>
            <li>Dispatch updates</li>
            <li>Load opportunities</li>
            <li>Appointment reminders</li>
            <li>Account notifications</li>
            <li>Customer support responses</li>
            <li>Service-related announcements</li>
            <li>Promotional offers (only if you have expressly opted in)</li>
          </ul>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>User Consent</h2>
          </div>
          <p>
            By providing your mobile phone number and checking the SMS consent box on our website or otherwise expressly opting in, you authorize Meg Logistics LLC to send text messages to the phone number provided.
          </p>
          <p>
            Your consent is not a condition of purchasing any goods or services.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Message Frequency</h2>
          </div>
          <p>
            Message frequency varies based on your interactions with Meg Logistics LLC and the services you request.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Message and Data Rates</h2>
          </div>
          <p>
            Message and data rates may apply according to your mobile carrier's plan. Please contact your wireless provider for details regarding your messaging or data charges.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Opting Out</h2>
          </div>
          <p>
            You may opt out of receiving SMS messages at any time by replying:
          </p>
          <p><strong>STOP</strong></p>
          <p>
            After you reply STOP, you will receive one final confirmation message confirming that you have been unsubscribed. You will no longer receive SMS messages from Meg Logistics LLC unless you opt in again.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Help</h2>
          </div>
          <p>
            For assistance, reply:
          </p>
          <p><strong>HELP</strong></p>
          <p>
            You may also contact us directly using the contact information below.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Supported Carriers</h2>
          </div>
          <p>
            SMS delivery depends on your wireless carrier. Participating carriers are not liable for delayed or undelivered messages.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Privacy</h2>
          </div>
          <p>
            Your privacy is important to us.
          </p>
          <p>
            We do not sell, rent, or share your mobile phone number or SMS consent with third parties or affiliates for their marketing or promotional purposes.
          </p>
          <p>
            SMS consent is not shared with third parties or affiliates for marketing purposes.
          </p>
          <p>
            Text messaging originator opt-in data and consent will not be shared with any third parties except service providers and aggregators that support the delivery of our SMS communications.
          </p>
          <p>
            For more information about how we collect, use, and protect your information, please review our <a href="/privacy">Privacy Policy</a>.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Eligibility</h2>
          </div>
          <p>
            You must be at least 18 years of age or otherwise legally authorized to receive SMS communications related to your business or employment.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Changes to These SMS Terms</h2>
          </div>
          <p>
            Meg Logistics LLC may update these SMS Terms from time to time. Any changes will become effective upon posting the updated version on this page with a revised Effective Date.
          </p>
          <p>
            Continued participation in our SMS program after changes are posted constitutes acceptance of the updated SMS Terms.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Contact Us</h2>
          </div>
          <p>
            If you have questions regarding these SMS Terms, please contact:
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