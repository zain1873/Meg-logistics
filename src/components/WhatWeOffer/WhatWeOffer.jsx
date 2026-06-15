import React from 'react';
import { FaTruck, FaDollarSign, FaRoute, FaHeadset, FaMapMarkedAlt } from 'react-icons/fa';
import './WhatWeOffer.css';

import banner1 from '../../assets/banners/banner 1.jpg';
import banner2 from '../../assets/banners/banner 2.jpg';
import banner3 from '../../assets/banners/banner 3.jpg';
import banner4 from '../../assets/banners/banner 4.jpg';

const offers = [
  {
    Icon: FaTruck,
    num: '01',
    title: 'Load Sourcing & Scheduling',
    desc: 'Find high-paying shipments that align with your route and availability — zero guesswork, maximum efficiency.',
    image: banner1,
  },
  {
    Icon: FaDollarSign,
    num: '02',
    title: 'Optimized Freight Rates',
    desc: 'We negotiate competitive rates so you earn more on every mile. No settling for low-ball offers.',
    image: banner2,
  },
  {
    Icon: FaRoute,
    num: '03',
    title: 'Strategic Route Planning',
    desc: 'Minimize fuel costs and avoid delays with optimized trip coordination across all 48 states.',
    image: banner3,
  },
  {
    Icon: FaHeadset,
    num: '04',
    title: '24/7 Dispatch Support',
    desc: 'Round-the-clock dispatching to keep your trucks moving day and night — always on call for you.',
    image: banner4,
  },
  {
    Icon: FaMapMarkedAlt,
    num: '05',
    title: 'Real-Time Tracking',
    desc: 'Complete visibility over your freight with live updates, accurate ETAs, and constant communication.',
    image: banner2,
  },
];

export default function WhatWeOffer() {
  return (
    <section className="offer-section" id="what-we-offer">
      <div className="offer-container">

        <div className="offer-heading">
          <span className="offer-tag">What We Offer</span>
          <h2 className="offer-title">End-to-End Freight Solutions That Keep You Ahead</h2>
          <p className="offer-subtitle">
            Comprehensive dispatch solutions designed to grow your trucking business —
            swift &amp; steady, every mile of the way.
          </p>
        </div>

        <div className="offer-grid">
          {offers.map(({ Icon, num, title, desc, image }, i) => (
            <div className="offer-card" key={i}>
              <img src={image} alt={title} className="offer-card-bg" />
              <div className="offer-card-overlay" />


              <div className="offer-card-content">
                <span className="offer-card-icon"><Icon /></span>
                <h3 className="offer-card-title">{title}</h3>
                <p className="offer-card-desc">{desc}</p>
                <a href="#contact" className="offer-card-link">Get Started</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
