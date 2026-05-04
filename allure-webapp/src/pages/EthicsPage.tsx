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
              <p className="mono" style={{ marginBottom: '16px', fontSize: '10px' }}>01 / Ownership</p>
              <h3>Agency</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                You own your data. You own your weights. You own the conversation. 
                We provide the vessel; you provide the soul. Your digital footprint remains exactly where it belongs: with you.
              </p>
            </div>
            <div className="card" data-animate>
              <p className="mono" style={{ marginBottom: '16px', fontSize: '10px' }}>02 / Isolation</p>
              <h3>Sovereignty</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                Offline by default. We don't want your data, and our code makes it 
                impossible for us to take it even if we wanted to. No cloud sync, no surveillance, no exceptions.
              </p>
            </div>
            <div className="card" data-animate>
              <p className="mono" style={{ marginBottom: '16px', fontSize: '10px' }}>03 / Transparency</p>
              <h3>Trust & Verification</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                Our code is our word. We prioritize open standards and local execution so you never have to take our word for it. 
                Inspect the logs, monitor the network, verify the isolation.
              </p>
            </div>
            <div className="card" data-animate>
              <p className="mono" style={{ marginBottom: '16px', fontSize: '10px' }}>04 / Alignment</p>
              <h3>Safety First</h3>
              <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
                Alignment isn't a feature; it's the foundation. By removing the middleman (the cloud), 
                we ensure your AI is aligned with you, not a corporate agenda or an advertising engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p className="mono" data-animate>The Human Element</p>
          <h2 data-animate style={{ marginTop: '24px' }}>Amplifying the <br/> Human Experience.</h2>
          <p className="lead" data-animate style={{ margin: '32px auto 0' }}>
            AI should not replace the human experience; it should protect and enhance it. 
            Allure is designed to be a mirror, a tool, and a companion—always under your control, 
            and always respecting the boundaries of your digital life.
          </p>
          <div data-animate style={{ marginTop: '56px' }}>
            <div className="cursor"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EthicsPage;
