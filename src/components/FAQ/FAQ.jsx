import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    q: 'What services can I have at Meg Logistics LLC?',
    a: 'We offer round-the-clock dispatching, competitive rate negotiations, fleet management, compliance assistance, and real-time freight tracking for dry vans, flatbeds, reefers, and hotshots.',
  },
  {
    q: 'How can I secure the best-paying loads?',
    a: 'We actively search, negotiate, and secure high-paying freight that aligns with your truck type, preferred routes, and schedule — making sure it meets your requirements.',
  },
  {
    q: 'Can I partner with Meg Logistics LLC as an owner-operator?',
    a: 'Absolutely! Whether you operate a single truck or a large fleet, we provide tailored solutions to streamline your operations and boost your profitability.',
  },
  {
    q: 'Will I receive compliance and safety support?',
    a: 'Yes, we help you stay compliant with DOT regulations, ELD requirements, and industry safety standards, minimizing the risk of fines or operational disruptions.',
  },
  {
    q: 'What paperwork do I need to get started?',
    a: 'We require your MC certificate, W9 form, and proof of insurance. Once submitted, we handle the rest, ensuring a smooth onboarding process.',
  },
  {
    q: 'How can I track my shipments?',
    a: 'We provide real-time tracking, instant updates, and accurate delivery estimates, giving you complete visibility over your freight. Feel free to ask more!',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-heading">
          <span className="faq-tag">FAQs</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about working with Meg Logistics LLC.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className="faq-icon"><FaPlus /></span>
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
