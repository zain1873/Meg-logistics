import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import logo from '../../assets/meg-logo.png';
import './About.css';


const ORBIT_TEXT = 'MEG LOGISTICS LLC  •  MEG LOGISTICS LLC  •  MEG LOGISTICS LLC  •  MEG LOGISTICS LLC  •  MEG LOGISTICS LLC  •  MEG LOGISTICS LLC  •  ';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* ── Left: Orbit image ── */}
        <div className="about-left">
          <div className="about-orbit-wrapper">

            {/* Rotating text ring */}
            <svg
              className="about-orbit-svg"
              viewBox="0 0 380 380"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="orbitPath"
                  d="M 190 190 m -168 0 a 168 168 0 1 1 336 0 a 168 168 0 1 1 -336 0"
                />
              </defs>
              <text className="about-orbit-text">
                <textPath href="#orbitPath" startOffset="0%">
                  {ORBIT_TEXT}
                </textPath>
              </text>
            </svg>

            {/* Dashed decorative ring */}
            <div className="about-dashed-ring" />

            {/* Centre logo */}
            <div className="about-logo-circle">
              <img src={logo} alt="Meg Logistics LLC" />
            </div>

          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="about-right">
          <span className="about-tag">About Us</span>
          <h2 className="about-title">Your Trusted Freight Dispatch Partner</h2>

          <p className="about-desc">
            Meg Logistics LLC is a premium freight dispatch company built to empower
            owner-operators and small trucking fleets across the United States. We handle
            load hunting, broker negotiations, and paperwork — so you focus on driving
            and growing your business.
          </p>
          <p className="about-desc">
            With deep industry knowledge and a 24/7 support team, we keep your truck
            loaded with high-paying freight, minimizing empty miles and maximizing your
            revenue every mile of the way.
          </p>

          <a href="#contact" className="about-btn">
            Work With Us <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}
