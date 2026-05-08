import React from 'react';
import { Link } from 'react-router-dom';
import Presence from './Presence';

interface HeroProps {
  onWaitlistClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onWaitlistClick }) => {
  return (
    <section className="section section-hero">
      <div className="container hero-content">
        <p className="mono" data-animate>A Private Presence</p>
        <h1 data-animate>The Companion That <br/> Truly Understands.</h1>
        <Presence />
        <p className="lead" data-animate>Fully offline AI that listens, remembers, and grows with you. No cloud, no surveillance, just connection.</p>
        <div className="stack" style={{ flexDirection: 'row', gap: '16px' }} data-animate>
          <button className="btn btn-accent" onClick={onWaitlistClick}>Join the Waitlist</button>
          <Link to="/ethics" className="btn">Explore Ethics</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
