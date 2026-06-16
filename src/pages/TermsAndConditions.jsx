import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import './legal.css';

const sections = [
  {
    title: 'Agreement to Terms',
    body: [
      'By accessing or using any services provided by Meg Logistics LLC ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.',
      'These Terms apply to all visitors, clients, carriers, and others who access or use our dispatch and freight management services.',
    ],
  },
  {
    title: 'Description of Services',
    body: [
      'Meg Logistics LLC provides freight dispatch services, load booking, carrier support, freight management, and the Flux Dispatching Course. Our services are designed to connect carriers with available loads and help owner-operators run more efficient trucking businesses.',
    ],
    list: [
      'Dispatch and load booking services for owner-operators and small fleets',
      'Carrier support and rate negotiation with brokers and shippers',
      'Freight management consulting and operational guidance',
      'Flux Dispatching Course — educational content on freight dispatch',
    ],
  },
  {
    title: 'Client Responsibilities',
    body: [
      'As a client of Meg Logistics LLC, you agree to:',
    ],
    list: [
      'Provide accurate and up-to-date information about your equipment, authority, and insurance',
      'Maintain all required operating authorities, licenses, and insurance coverage',
      'Communicate promptly regarding load acceptance, refusals, and operational issues',
      'Pay all agreed-upon service fees on time and in accordance with your service agreement',
      'Comply with all applicable federal, state, and local transportation regulations',
    ],
  },
  {
    title: 'Payment Terms',
    body: [
      'Service fees are charged as a percentage of the gross load revenue or as a flat weekly/monthly rate, as specified in your individual service agreement. Invoices are issued weekly and are due within 5 business days of receipt.',
      'Late payments may result in suspension of dispatch services. Meg Logistics LLC reserves the right to adjust service fees with 30 days written notice.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'Meg Logistics LLC acts solely as a dispatch intermediary and is not a motor carrier, broker, or freight forwarder. We are not liable for cargo loss, damage, delays, accidents, fines, violations, or any other claims arising from the transportation of freight.',
      'In no event shall Meg Logistics LLC\'s total liability to you exceed the total fees paid by you to us in the three (3) months preceding the claim.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'All content on our website and within the Flux Dispatching Course — including text, graphics, videos, course materials, and branding — is the exclusive property of Meg Logistics LLC and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.',
    ],
  },
  {
    title: 'Termination',
    body: [
      'Either party may terminate the service agreement with 7 days written notice. Meg Logistics LLC reserves the right to immediately suspend or terminate services for non-payment, fraudulent activity, or repeated violations of these Terms.',
      'Upon termination, any outstanding fees remain due and payable.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Denver, Colorado.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes your acceptance of the revised Terms.',
    ],
  },
];

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <span className="legal-hero-badge">Legal</span>
        <h1>Terms &amp; Conditions</h1>
        <p>Please read these terms carefully before using our dispatch and freight management services.</p>
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
          <h3>Questions About These Terms?</h3>
          <p>
            If you have any questions or concerns about our Terms &amp; Conditions,
            our team is here to help you.
          </p>
          <a href="mailto:info@meglogistic.com">Contact Us</a>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
