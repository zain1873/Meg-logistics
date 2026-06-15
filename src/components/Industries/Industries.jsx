import React from 'react';
import {
  FaStore, FaHardHat, FaUtensils, FaBriefcaseMedical,
  FaIndustry, FaGasPump, FaSeedling, FaMicrochip,
  FaBiohazard, FaLandmark, FaBullhorn,
} from 'react-icons/fa';
import './Industries.css';

const industries = [
  { Icon: FaStore, name: 'Retail and E-Commerce' },
  { Icon: FaHardHat, name: 'Construction Equipment' },
  { Icon: FaUtensils, name: 'Food and Beverage' },
  { Icon: FaBriefcaseMedical, name: 'Pharmaceuticals and Healthcare' },
  { Icon: FaIndustry, name: 'Automotive and Manufacturing' },
  { Icon: FaGasPump, name: 'Energy and Oilfield Services' },
  { Icon: FaSeedling, name: 'Agriculture and Farming' },
  { Icon: FaMicrochip, name: 'Technology and Electronics' },
  { Icon: FaBiohazard, name: 'Hazardous Materials' },
  { Icon: FaLandmark, name: 'Government and Public Sector' },
  { Icon: FaBullhorn, name: 'Trade Shows and Event Logistics' },
];

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">

        <div className="industries-heading">
          <span className="industries-tag">Industries We Serve</span>
          <h2 className="industries-title">Industrial Sectors We Move</h2>
          <p className="industries-subtitle">
            From retail to heavy industry, we dispatch freight across every major
            sector — reliably, safely, and on time.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map(({ Icon, name }, index) => (
            <div className="industry-card" key={index}>
              <span className="industry-icon"><Icon /></span>
              <span className="industry-name">{name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
