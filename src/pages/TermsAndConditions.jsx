import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';
import LegalContactCard from '../components/ContactCard/ContactCard';

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <span className="legal-hero-badge">Legal</span>
        <h1>Terms & Conditions</h1>
        <p>Please read these terms carefully before using our dispatch and freight management services.</p>
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
            Welcome to the Meg Logistics LLC website ("Website"). These Terms & Conditions ("Terms") govern your access to and use of our Website and the freight dispatch and logistics support services provided by Meg Logistics LLC ("Company," "we," "our," or "us").
          </p>
          <p>
            By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use our Website or services.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>1. Eligibility</h2>
          </div>
          <p>
            You must be at least 18 years old and legally authorized to enter into binding agreements to use our Website or services.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>2. Services</h2>
          </div>
          <p>
            Meg Logistics LLC provides freight dispatch and logistics support services for owner-operators, trucking companies, and motor carriers operating throughout the United States.
          </p>
          <p>Our services may include:</p>
          <ul>
            <li>Freight dispatch</li>
            <li>Load booking</li>
            <li>Broker communication</li>
            <li>Rate negotiation</li>
            <li>Route planning</li>
            <li>Administrative support</li>
            <li>Customer service</li>
          </ul>
          <p>We do not guarantee load availability, revenue, or business outcomes.</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>3. User Responsibilities</h2>
          </div>
          <p>By using our Website or services, you agree to:</p>
          <ul>
            <li>Provide accurate and current information.</li>
            <li>Maintain valid operating authority, licenses, and insurance as required by law.</li>
            <li>Comply with all applicable federal, state, and local regulations.</li>
            <li>Keep your account information up to date.</li>
            <li>Use our Website only for lawful purposes.</li>
          </ul>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Website for fraudulent or illegal activities.</li>
            <li>Attempt unauthorized access to our systems.</li>
            <li>Introduce malware, viruses, or harmful code.</li>
            <li>Copy, modify, or distribute Website content without written permission.</li>
          </ul>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>4. Quotes and Service Availability</h2>
          </div>
          <p>
            Any information, pricing, or service descriptions on this Website are provided for informational purposes and may change without notice.
          </p>
          <p>
            Service availability may vary depending on carrier eligibility, broker requirements, and operational capacity.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>5. Payments</h2>
          </div>
          <p>
            Fees for dispatch and related services will be communicated before services begin unless otherwise agreed in writing.
          </p>
          <p>
            Invoices are payable according to the agreed payment terms.
          </p>
          <p>
            Failure to make timely payments may result in suspension or termination of services.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>6. Intellectual Property</h2>
          </div>
          <p>
            All content on this Website, including text, graphics, logos, images, designs, and software, is the property of Meg Logistics LLC unless otherwise stated.
          </p>
          <p>
            You may not reproduce, distribute, or use any Website content without prior written permission.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>7. Third-Party Services</h2>
          </div>
          <p>
            Our Website may include links to third-party websites or services.
          </p>
          <p>
            Meg Logistics LLC is not responsible for the content, privacy practices, availability, or accuracy of third-party websites.
          </p>
          <p>
            Your use of third-party services is at your own risk.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>8. Disclaimer of Warranties</h2>
          </div>
          <p>
            This Website and our services are provided on an "as is" and "as available" basis.
          </p>
          <p>
            To the fullest extent permitted by law, Meg Logistics LLC disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not guarantee uninterrupted access, error-free operation, or that the Website will always be available.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>9. Limitation of Liability</h2>
          </div>
          <p>
            To the maximum extent permitted by law, Meg Logistics LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from:
          </p>
          <ul>
            <li>Use of or inability to use the Website</li>
            <li>Delays in dispatch services</li>
            <li>Loss of revenue or profits</li>
            <li>Business interruption</li>
            <li>Data loss</li>
            <li>Third-party actions</li>
          </ul>
          <p>
            Our total liability for any claim relating to our services shall not exceed the amount paid to Meg Logistics LLC for the applicable service giving rise to the claim.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>10. Indemnification</h2>
          </div>
          <p>
            You agree to defend, indemnify, and hold harmless Meg Logistics LLC, its owners, employees, contractors, and affiliates from any claims, damages, liabilities, costs, or expenses arising from:
          </p>
          <ul>
            <li>Your violation of these Terms</li>
            <li>Your misuse of the Website</li>
            <li>Your violation of applicable laws or regulations</li>
            <li>Your negligence or misconduct</li>
          </ul>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>11. Privacy</h2>
          </div>
          <p>
            Your use of this Website is also governed by our <a href="/privacy">Privacy Policy</a>, which explains how we collect, use, and protect your information.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>12. SMS Communications</h2>
          </div>
          <p>
            If you voluntarily provide your mobile phone number and expressly consent to receive text messages, Meg Logistics LLC may send SMS messages regarding:
          </p>
          <ul>
            <li>Dispatch updates</li>
            <li>Load notifications</li>
            <li>Appointment reminders</li>
            <li>Customer support</li>
            <li>Account information</li>
            <li>Service-related communications</li>
            <li>Promotional messages (only where you have opted in)</li>
          </ul>
          <p>Message frequency varies.</p>
          <p>Message and data rates may apply.</p>
          <p>
            You may opt out at any time by replying <strong>STOP</strong>.
          </p>
          <p>
            Reply <strong>HELP</strong> for assistance.
          </p>
          <p>
            Your consent to receive SMS messages is not a condition of purchasing any service.
          </p>
          <p>
            For information about how we collect and protect your personal information, please review our <a href="/privacy">Privacy Policy</a>.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>13. Termination</h2>
          </div>
          <p>
            We reserve the right to suspend or terminate access to our Website or services at any time for violations of these Terms, unlawful conduct, or any activity that may harm our business or other users.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>14. Governing Law</h2>
          </div>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of the State in which Meg Logistics LLC is registered, without regard to conflict of law principles.
          </p>
          <p>
            Any disputes shall be resolved in the appropriate state or federal courts having jurisdiction.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>15. Changes to These Terms</h2>
          </div>
          <p>
            We may update these Terms from time to time.
          </p>
          <p>
            Any changes become effective upon posting on this Website.
          </p>
          <p>
            Continued use of the Website after updates constitutes acceptance of the revised Terms.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>16. Contact Us</h2>
          </div>
          <p>
            If you have questions regarding these Terms & Conditions, please contact:
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