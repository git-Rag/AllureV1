import React from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '@/context/UIContext';

const Header: React.FC = () => {
  const { openWaitlist } = useUI();

  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <Link to="/" className="logo">ALLURE</Link>
        <nav style={{ display: 'flex', gap: '32px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <a href="/#features">Features</a>
          <a href="/#conversation">Companion</a>
          <a href="/#privacy">Privacy</a>
          <Link to="/ethics">Ethics</Link>
        </nav>
        <button 
          className="btn btn-primary" 
          style={{ padding: '8px 16px' }}
          onClick={openWaitlist}
        >
          Waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;
