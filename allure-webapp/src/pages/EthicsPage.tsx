import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const EthicsPage: React.FC = () => {
  useAnimateOnScroll();

  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="container">
          <p className="mono" data-animate>The Foundation</p>
          <h1 data-animate>Ethical AI <br/> by Design.</h1>
          <p className="lead" data-animate style={{ marginTop: '32px' }}>
            At Allure, we believe that intelligence without privacy is a liability. 
            Our ethics are not just a document; they are baked into every line of code.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card" data-animate>
              <h3>Agency</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                You own your data. You own your weights. You own the conversation. 
                We provide the vessel; you provide the soul.
              </p>
            </div>
            <div className="card" data-animate>
              <h3>Sovereignty</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                Offline by default. We don't want your data, and our code makes it 
                impossible for us to take it even if we wanted to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EthicsPage;
