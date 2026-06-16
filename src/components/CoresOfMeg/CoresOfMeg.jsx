import React from 'react';
import { FaTruck, FaMoneyBillWave, FaHeadset, FaCheckCircle } from 'react-icons/fa';
import './CoresOfMeg.css';

import coresImage from '../../assets/cores.jpg';

const highlights = [
  { Icon: FaTruck, text: 'Truck Dispatch Services' },
  { Icon: FaMoneyBillWave, text: 'Factoring Setup Support' },
  { Icon: FaHeadset, text: '24/7 Support for Owner-Operators' },
];

const points = [
  'Consistent high RPM loads across states',
  'Minimum deadhead miles — more profit, less fuel waste',
  'Maximize loads and minimize empty miles',
  'Direct negotiation with brokers on your behalf',
  'Work under your MC authority, based on your desired rate per mile',
  '24/7 dispatch support — always on call for you',
  'You approve every load — you stay in full control',
  'Smart planning for backhauls & trihauls to keep your truck moving nonstop',
  '100% transparent & professional service',
];

export default function CoresOfMeg() {
  return (
    <section className="cores-section" id="why-us">
      <div className="cores-container">

        <div className="cores-content">
          <span className="cores-tag">Why Choose Us</span>
          <h2 className="cores-title">Cores of Meg Logistics</h2>

          <div className="cores-highlights">
            {highlights.map(({ Icon, text }, i) => (
              <div className="cores-highlight" key={i}>
                <span className="cores-highlight-icon"><Icon /></span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <ul className="cores-list">
            {points.map((point, i) => (
              <li key={i}>
                <FaCheckCircle className="cores-check" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="cores-btn">Reach Out</a>
        </div>

        <div className="cores-image">
          <img src={coresImage} alt="Cores of Meg Logistics" />
        </div>

      </div>
    </section>
  );
}
