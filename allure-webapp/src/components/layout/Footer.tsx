import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="logo">ALLURE</span>
        <div className="links">
          <a href="#">Security Audit</a>
          <a href="#">Manifesto</a>
          <a href="#">Whitepaper</a>
          <a href="#">Github</a>
        </div>
        <p className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>© 2026 Allure AI · Designed for Human Connection · Made in the Void</p>
      </div>
    </footer>
  );
};

export default Footer;
