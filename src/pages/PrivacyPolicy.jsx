import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';
import LegalContactCard from '../components/ContactCard/ContactCard';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <span className="legal-hero-badge">Legal</span>
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us. Learn how Meg Logistics LLC collects, uses, and protects your personal information.</p>
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
            Meg Logistics LLC ("Meg Logistics," "Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our website, communicate with us, or use our freight dispatch and logistics support services throughout the United States.
          </p>
          <p>
            By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Information We Collect</h2>
          </div>
          <p>We may collect the following categories of information:</p>

          <h3 className="legal-subheading">Personal Information</h3>
          <ul>
            <li>Full name</li>
            <li>Company name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business address</li>
            <li>Billing address</li>
            <li>Payment information (processed through secure third-party payment providers)</li>
          </ul>

          <h3 className="legal-subheading">Business Information</h3>
          <ul>
            <li>USDOT Number</li>
            <li>MC Number</li>
            <li>Operating Authority information</li>
            <li>Equipment type</li>
            <li>Fleet information</li>
            <li>Insurance details when required</li>
            <li>Driver or dispatcher contact information</li>
          </ul>

          <h3 className="legal-subheading">Technical Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on the website</li>
            <li>Referral source</li>
            <li>Cookie identifiers</li>
          </ul>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>How We Use Your Information</h2>
          </div>
          <p>We use your information to:</p>
          <ul>
            <li>Provide freight dispatch and logistics support services</li>
            <li>Communicate regarding available loads, dispatch updates, invoices, and customer support</li>
            <li>Verify carrier information</li>
            <li>Process payments</li>
            <li>Respond to inquiries</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and unauthorized activity</li>
            <li>Comply with applicable federal, state, and local laws</li>
            <li>Send service-related notifications</li>
          </ul>
          <p>If you choose to opt in, we may also send marketing communications regarding our services.</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>SMS Communications</h2>
          </div>
          <p>
            If you provide your mobile phone number and expressly consent to receive text messages, Meg Logistics LLC may send SMS messages regarding:
          </p>
          <ul>
            <li>Dispatch updates</li>
            <li>Load information</li>
            <li>Appointment reminders</li>
            <li>Service notifications</li>
            <li>Account updates</li>
            <li>Customer support</li>
            <li>Promotional offers (only where you have opted in)</li>
          </ul>
          <p>Message frequency varies.</p>
          <p>Message and data rates may apply.</p>
          <p>
            You can opt out at any time by replying:
            <br />
            <strong>STOP</strong> — to unsubscribe
            <br />
            <strong>HELP</strong> — for assistance
          </p>
          <p>
            You may also contact us directly to update your communication preferences.
          </p>
          <p>SMS consent is not shared with third parties or affiliates for marketing purposes.</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>How We Share Information</h2>
          </div>
          <p>We do not sell your personal information.</p>
          <p>We may share your information only when necessary:</p>
          <ul>
            <li>With freight brokers and shippers to secure and manage freight loads on your behalf</li>
            <li>With payment processors</li>
            <li>With technology providers that help operate our business</li>
            <li>With legal authorities when required by law</li>
            <li>During a business merger, acquisition, or sale</li>
            <li>With your written authorization</li>
          </ul>
          <p>All third-party service providers are required to protect your information.</p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Mobile Information</h2>
          </div>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p>
            Text messaging originator opt-in data and consent will not be shared with any third parties, except aggregators and providers necessary to deliver SMS communications.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Cookies and Tracking Technologies</h2>
          </div>
          <p>
            Our website uses cookies and similar technologies to improve user experience.
          </p>
          <p>Cookies may include:</p>
          <ul>
            <li>Essential cookies</li>
            <li>Functional cookies</li>
            <li>Analytics cookies</li>
            <li>Security cookies</li>
          </ul>
          <p>
            You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Data Security</h2>
          </div>
          <p>
            We implement commercially reasonable administrative, technical, and physical safeguards to protect your information.
          </p>
          <p>These measures include:</p>
          <ul>
            <li>SSL/TLS encryption</li>
            <li>Secure hosting</li>
            <li>Access controls</li>
            <li>Password protection</li>
            <li>Routine monitoring</li>
            <li>Limited employee access</li>
          </ul>
          <p>
            While we strive to protect your information, no method of electronic transmission or storage is completely secure.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Data Retention</h2>
          </div>
          <p>We retain personal information only as long as reasonably necessary to:</p>
          <ul>
            <li>Provide our services</li>
            <li>Maintain business records</li>
            <li>Resolve disputes</li>
            <li>Meet legal and regulatory obligations</li>
            <li>Enforce agreements</li>
          </ul>
          <p>
            When no longer required, information is securely deleted or anonymized.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Your Privacy Rights</h2>
          </div>
          <p>
            Depending on your state of residence, you may have rights under applicable privacy laws, including:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of personal information</li>
            <li>Obtain a copy of your information</li>
            <li>Opt out of marketing communications</li>
            <li>Appeal certain privacy decisions where applicable</li>
          </ul>
          <p>
            Residents of California and other states with comprehensive privacy laws may exercise additional rights as provided under applicable law.
          </p>
          <p>
            To submit a privacy request, please contact us using the information below.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Third-Party Websites</h2>
          </div>
          <p>
            Our website may contain links to external websites.
          </p>
          <p>
            We are not responsible for the privacy practices or content of third-party websites.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Children's Privacy</h2>
          </div>
          <p>
            Our services are intended for business use and are not directed toward individuals under the age of 18.
          </p>
          <p>
            We do not knowingly collect personal information from children.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Changes to This Privacy Policy</h2>
          </div>
          <p>
            We may update this Privacy Policy periodically.
          </p>
          <p>
            The updated version will be posted on this page with a revised Effective Date.
          </p>
          <p>
            Your continued use of our services after updates constitutes acceptance of the revised policy.
          </p>
          <div className="legal-divider" />
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <h2>Contact Information</h2>
          </div>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise your privacy rights, please contact:
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