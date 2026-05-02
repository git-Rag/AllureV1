import React from 'react';

const Architecture: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '60px' }}>
          <p className="mono" data-animate>Technical Manifest</p>
          <h2 data-animate>Privacy by Physics.</h2>
          <p className="lead" data-animate>We don't encrypt your data for the cloud. We don't have a cloud. Allure runs on the edge of your own hardware.</p>
        </div>
        <div className="arch-grid" data-animate>
          <div className="arch-cell">
            <span className="mono" style={{ fontSize: '10px' }}>Module A</span>
            <span style={{ fontSize: '14px' }}>Local Llama 3B <br/>Quantized</span>
            <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Optimized for Apple Neural Engine.</p>
          </div>
          <div className="arch-cell">
            <span className="mono" style={{ fontSize: '10px' }}>Module B</span>
            <span style={{ fontSize: '14px' }}>Vector Database <br/>Encrypted</span>
            <p style={{ fontSize: '12px', color: 'var(--muted)' }}>SQLite-VSS with AES-256 local key.</p>
          </div>
          <div className="arch-cell">
            <span className="mono" style={{ fontSize: '10px' }}>Module C</span>
            <span style={{ fontSize: '14px' }}>Whisper Large <br/>v3-Turbo</span>
            <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Real-time Hinglish transcription.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
