import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import './Hero.css';

import banner1 from '../../assets/banners/banner 1.jpg';
import banner2 from '../../assets/banners/banner 2.jpg';
import banner3 from '../../assets/banners/banner 3.jpg';
import banner4 from '../../assets/banners/banner 4.jpg';

const slides = [
  {
    image: banner1,
    tag: 'Trusted Freight Dispatch',
    title: 'Your Freight,\nOur Priority',
    subtitle:
      'Premium dispatch services for owner-operators and small fleets across all 48 states. You drive — we handle everything else.',
    cta:  { label: 'Get Started',   href: '#contact' },
    cta2: { label: 'What We Offer', href: '#what-we-offer' },
  },
  {
    image: banner2,
    tag: 'Maximum Earnings',
    title: 'Maximum Miles,\nMaximum Profit',
    subtitle:
      'We find the highest-paying loads and negotiate rates on your behalf, minimizing empty miles every mile of the way.',
    cta:  { label: 'Work With Us',  href: '#contact' },
    cta2: { label: 'Why Choose Us', href: '#why-us' },
  },
  {
    image: banner3,
    tag: 'Nationwide Coverage',
    title: 'Dispatching Across\nAll 48 States',
    subtitle:
      'Dry vans, flatbeds, reefers and more — we dispatch every truck type with reliable, consistent, high-paying freight.',
    cta:  { label: 'View Fleet',         href: '#we-provide' },
    cta2: { label: 'Industries We Serve', href: '#industries' },
  },
  {
    image: banner4,
    tag: 'Always On Call',
    title: '24/7 Dispatch\nSupport',
    subtitle:
      'Day or night, our team is always available. You approve every load — full control stays with you, always.',
    cta:  { label: 'Contact Us',   href: '#contact' },
    cta2: { label: 'Learn More',   href: '#about' },
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);

  const goTo = useCallback((idx) => setActive(idx), []);
  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), []);

  // Auto-advance; pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next, paused, active]);

  return (
    <section
      className="hero"
      id="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background slides ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide${active === i ? ' hero-slide--active' : ''}`}
          aria-hidden={active !== i}
        >
          <img
            src={s.image}
            alt={s.title}
            className="hero-bg"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'low'}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* ── Content ── */}
      <div className="hero-content" key={active}>
        <h1 className="hero-title">{slides[active].title}</h1>
        <p className="hero-subtitle">{slides[active].subtitle}</p>
        <div className="hero-actions">
          <a href={slides[active].cta.href} className="hero-btn hero-btn--primary">
            {slides[active].cta.label} <FaArrowRight />
          </a>
          <a href={slides[active].cta2.href} className="hero-btn hero-btn--outline">
            {slides[active].cta2.label}
          </a>
        </div>
        <a href="tel:+13074001222" className="hero-phone">
          <FaPhone /> (307) 400-1222
        </a>
      </div>

      {/* ── Dot navigation ── */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${active === i ? ' hero-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
