import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';

const sections = [
  {
    title: 'Introduction',
    body: [
      'Meg Logistics LLC ("Company", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.',
      'By using our services, you consent to the data practices described in this policy.',
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      'We collect information you voluntarily provide to us and information collected automatically when you use our services.',
    ],
    list: [
      'Contact information: name, email address, phone number, and business address',
      'Business details: MC/DOT numbers, equipment type, and operating authority information',
      'Financial information: payment details for service fee processing',
      'Usage data: IP address, browser type, pages visited, and time spent on our website',
      'Communications: emails, messages, and call records related to our services',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use the information we collect for the following purposes:',
    ],
    list: [
      'To provide, operate, and maintain our freight dispatch services',
      'To process payments and send invoices',
      'To communicate with you about loads, service updates, and account matters',
      'To improve our website and services based on usage patterns',
      'To send promotional emails about new services or special offers (you may opt out at any time)',
      'To comply with legal obligations and resolve disputes',
    ],
  },
  {
    title: 'Information Sharing and Disclosure',
    body: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
    ],
    list: [
      'With brokers and shippers as necessary to book and manage freight loads on your behalf',
      'With service providers who assist us in operating our website and delivering our services (subject to confidentiality agreements)',
      'When required by law, court order, or government regulation',
      'To protect the rights, property, or safety of Meg Logistics LLC, our clients, or others',
      'With your explicit written consent',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), access controls, and regular security assessments.',
      'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Cookies and Tracking',
    body: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website.',
    ],
    list: [
      'Essential cookies: required for basic website functionality',
      'Analytics cookies: help us understand how visitors interact with our site',
      'Preference cookies: remember your settings and preferences',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'Depending on your location, you may have the following rights regarding your personal information:',
    ],
    list: [
      'Access: request a copy of the personal data we hold about you',
      'Correction: request correction of inaccurate or incomplete data',
      'Deletion: request deletion of your personal data, subject to certain exceptions',
      'Opt-out: unsubscribe from marketing communications at any time',
      'Portability: request your data in a structured, machine-readable format',
    ],
  },
  {
    title: 'Third-Party Links',
    body: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    body: [
      'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will take steps to delete such information.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our services after any changes constitutes acceptance of the updated policy.',
    ],
  },
];

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
     
        {sections.map((sec, i) => (
          <div key={sec.title} className="legal-section">
            <div className="legal-section-header">
              <h2>{sec.title}</h2>
            </div>
            {sec.body.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
            {sec.list && (
              <ul>
                {sec.list.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
            {i < sections.length - 1 && <div className="legal-divider" />}
          </div>
        ))}

        <div className="legal-contact-card">
          <h3>Privacy Concerns or Requests?</h3>
          <p>
            To exercise your privacy rights or if you have questions about how
            we handle your data, please reach out to us directly.
          </p>
          <a href="mailto:Info@meglogistics.com">Contact Us</a>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
