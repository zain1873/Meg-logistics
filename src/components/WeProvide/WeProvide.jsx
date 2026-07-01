import React, { useState } from 'react';
import {
  FaTruck, FaTruckLoading, FaSnowflake, FaBox,
  FaOilCan, FaTruckMoving, FaLayerGroup, FaShippingFast,
  FaArrowRight, FaChevronRight,
} from 'react-icons/fa';
import './WeProvide.css';

import dryVansImg    from '../../assets/we-provide/Dry Van.jpg';
import flatbedImg    from '../../assets/we-provide/Flatbed.jpg';
import refferImg     from '../../assets/we-provide/reefer.jpg';
import boxTruckImg   from '../../assets/we-provide/Box Truck.jpg';
import tankerImg     from '../../assets/we-provide/Reefer Box Truck.jpg';
import powerOnlyImg  from '../../assets/we-provide/Semi-truck.jpg';
import stepDeckImg   from '../../assets/we-provide/Step-deck.jpg';
import conesTogaImg  from '../../assets/we-provide/Conestoga.jpg';
import intermodalImg from '../../assets/we-provide/intermodal-container.jpg';

const services = [
  {
    Icon: FaTruck,
    tabName: 'Dry Vans',
    title: 'Dry Vans',
    subtitle: 'Secure, Enclosed Freight Transport',
    description:
      'Dry vans are the most common type of truck on the road and are often used by new drivers due to their versatility and ease of operation.',
    details: [
      { label: 'Description', text: 'Enclosed trailers designed to transport dry, non-perishable goods.' },
      { label: 'Uses', text: 'Ideal for general freight such as clothing, electronics, furniture, and packaged goods.' },
      { label: 'Features', text: 'Protects cargo from weather and road conditions.' },
    ],
    specs: ['Length: 53 feet', 'Width: 6–7.5 feet', 'Height: 7 feet', 'Max Weight: Up to 45,000 lbs'],
    image: dryVansImg,
  },
  {
    Icon: FaTruckLoading,
    tabName: 'Flatbeds',
    title: 'Flatbeds',
    subtitle: 'Heavy, Oversized, and Irregular Loads',
    description:
      'Flatbeds are highly versatile trucks designed for carrying oversized or irregularly shaped loads.',
    details: [
      { label: 'Description', text: 'Open trailers without sides or roofs.' },
      { label: 'Uses', text: 'Transporting construction materials, machinery, pipes, or large equipment.' },
      { label: 'Features', text: 'Easy loading/unloading from any side.' },
    ],
    specs: ['Length: 48 feet', 'Height: 9 feet', 'Max Weight: Up to 48,000 lbs'],
    image: flatbedImg,
  },
  {
    Icon: FaSnowflake,
    tabName: 'Reefers',
    title: 'Refrigerated Trucks (Reefers)',
    subtitle: 'Temperature-Controlled Freight',
    description:
      'Reefer trucks are specialized trailers equipped with temperature control systems for transporting perishable goods that require refrigeration or consistent temperatures.',
    details: [
      { label: 'Description', text: 'Used for transporting perishable goods that require refrigeration or consistent temperatures.' },
      { label: 'Uses', text: 'Commonly used for food products, pharmaceuticals, flowers, and other temperature-sensitive items.' },
      { label: 'Features', text: 'Can maintain both cool and warm temperatures depending on cargo requirements.' },
    ],
    specs: [],
    image: refferImg,
  },
  {
    Icon: FaBox,
    tabName: 'Box Trucks',
    title: 'Box Trucks',
    subtitle: 'Local and Last-Mile Deliveries',
    description:
      'Box trucks are compact vehicles often used in urban areas where larger trucks may not fit easily.',
    details: [
      { label: 'Description', text: 'Smaller than traditional semi-trucks; cargo area is part of the same chassis as the cab.' },
      { label: 'Uses', text: 'Moving household goods, last-mile deliveries, furniture transport, etc.' },
    ],
    specs: [],
    image: boxTruckImg,
  },
  {
    Icon: FaOilCan,
    tabName: 'Refer Van',
    title: 'Refer Van',
    subtitle: 'Liquid, Hazardous, and Chemical Transport',
    description:
      'Built for safe and compliant bulk liquid transportation, handling everything from fuel to food-grade materials.',
    bullets: [
      'Pressurized and insulated models',
      'Internal compartments for multiple liquid types',
      'DOT-compliant for hazardous materials',
    ],
    image: tankerImg,
  },
  {
    Icon: FaTruckMoving,
    tabName: 'Power-Only',
    title: 'Power-Only Trucks',
    subtitle: 'Flexible Trailer Transport',
    description:
      'Provides a truck and driver to move pre-loaded or customer-owned trailers, eliminating the need for a dedicated fleet.',
    bullets: [
      'Moves dry vans, reefers, flatbeds, and tankers',
      'Efficient for trailer pools and intermodal freight',
      'Helps scale seasonal and overflow demand',
    ],
    image: powerOnlyImg,
  },
  {
    Icon: FaLayerGroup,
    tabName: 'Step Deck',
    title: 'Step Deck Trucking',
    subtitle: 'Versatile Heavy Haul Transport',
    description:
      'Step deck trailers are a variation of flatbeds but with two levels – a top deck and a lower deck.',
    details: [
      { label: 'Description', text: 'Designed to haul taller loads that exceed height restrictions on standard flatbeds.' },
      { label: 'Uses', text: 'Often used for heavy machinery or tall equipment like tractors or industrial parts.' },
      { label: 'Features', text: 'Lower deck allows for taller freight while maintaining legal height limits.' },
    ],
    specs: [],
    image: stepDeckImg,
  },
  {
    Icon: FaLayerGroup,
    tabName: 'Conestoga',
    title: 'Conestoga',
    subtitle: 'Versatile Tarped Flatbed Transport',
    description:
      'Conestoga trailers combine the accessibility of a flatbed with the weather protection of a curtainside, featuring a retractable tarp system for easy loading and cargo protection.',
    details: [
      { label: 'Description', text: 'Flatbed trailers with a rolling tarp system that covers the entire load.' },
      { label: 'Uses', text: 'Steel coils, machinery, lumber, and any flatbed freight requiring weather protection.' },
      { label: 'Features', text: 'Retractable tarp allows side loading while keeping cargo fully protected.' },
    ],
    specs: [],
    image: conesTogaImg,
  },
  {
    Icon: FaShippingFast,
    tabName: 'Intermodal',
    title: 'Intermodal Container Loads Availability',
    subtitle: 'Seamless Multi-Mode Freight Solutions',
    description:
      'Intermodal freight uses standardized containers that move seamlessly between trucks, trains, and ships — delivering efficiency and cost savings across long-haul routes.',
    details: [
      { label: 'Description', text: 'Standardized shipping containers transported across multiple modes of transit.' },
      { label: 'Uses', text: 'Long-distance domestic and international freight, port drayage, and rail transfers.' },
      { label: 'Features', text: 'No cargo unloading between modes — reduces handling damage and transit time.' },
    ],
    specs: [],
    image: intermodalImg,
  },
];

export default function WeProvide() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section className="wp-section" id="we-provide">
      <div className="wp-container">

        <div className="wp-header">
          <span className="wp-section-tag">Our Fleet</span>
          <h2 className="wp-section-title">What We Provide</h2>
          <p className="wp-section-sub">
            Specialized equipment for every type of freight — nationwide dispatch
            services tailored to your load.
          </p>
        </div>

        <div className="wp-wrapper">

          {/* Left: tab list */}
          <aside className="wp-tabs">
            {services.map((s, i) => (
              <button
                key={i}
                className={`wp-tab${active === i ? ' wp-tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="wp-tab-icon"><s.Icon /></span>
                <span className="wp-tab-name">{s.tabName}</span>
                <FaChevronRight className="wp-tab-arrow" />
              </button>
            ))}
          </aside>

          {/* Middle: content */}
          <div className="wp-content" key={`c${active}`}>
            <span className="wp-tag">We Provide</span>
            <h3 className="wp-title">{svc.title}</h3>
            <p className="wp-subtitle">{svc.subtitle}</p>
            <p className="wp-desc">{svc.description}</p>

            {svc.details && svc.details.map((d, i) => (
              <div className="wp-detail" key={i}>
                <span className="wp-detail-label">{d.label}:</span>
                <span className="wp-detail-text"> {d.text}</span>
              </div>
            ))}

            {svc.specs && svc.specs.length > 0 && (
              <div className="wp-specs">
                <p className="wp-specs-title">Max Freight Dimensions</p>
                <ul className="wp-specs-list">
                  {svc.specs.map((sp, i) => <li key={i}>{sp}</li>)}
                </ul>
              </div>
            )}

            {svc.bullets && (
              <ul className="wp-bullets">
                {svc.bullets.map((b, i) => (
                  <li key={i}>
                    <FaArrowRight className="wp-bullet-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <a href="#contact" className="wp-cta">
              Get a Quote <FaArrowRight />
            </a>
          </div>

          {/* Right: image */}
          <div className="wp-image" key={`img${active}`}>
            <img src={svc.image} alt={svc.title} />
            <div className="wp-image-overlay" />
          </div>

        </div>
      </div>
    </section>
  );
}
