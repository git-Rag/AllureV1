import React, { useState } from 'react';

interface ModuleProps {
  id: string;
  title: string;
  subtitle: string;
  manifesto: string;
}

const ArchitectureModule: React.FC<ModuleProps> = ({ id, title, subtitle, manifesto }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-animate>
      <div className={`arch-cell ${isOpen ? 'is-open' : ''}`}>
        <div className="arch-cell-header">
          <span className="mono" style={{ fontSize: '10px' }}>{id}</span>
          <span style={{ fontSize: '14px', lineHeight: '1.2' }}>{title}</span>
          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 16px' }}>{subtitle}</p>
          <button 
            className="mono manifesto-toggle" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '[ Close ]' : '[ Read Manifesto ]'}
          </button>
        </div>
        <div className="arch-manifesto-content">
          <div className="manifesto-inner">
            <p>{manifesto}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Architecture: React.FC = () => {
  const modules = [
    {
      id: 'Module A',
      title: 'Local Llama 3B Quantized',
      subtitle: 'Optimized for Apple Neural Engine.',
      manifesto: 'By quantizing the weights to 4-bit precision, we bring the reasoning power of 3 billion parameters into the palm of your hand. It does not think in the cloud; it thinks in the very electrons of your device. Zero latency, zero surveillance, absolute cognitive sovereignty.'
    },
    {
      id: 'Module B',
      title: 'Vector Database Encrypted',
      subtitle: 'SQLite-VSS with AES-256 local key.',
      manifesto: 'Your memories are stored as high-dimensional coordinates in a private latent space. Using SQLite-VSS, we perform similarity searches locally. Every fragment is encrypted with a key that never leaves your device\'s Secure Enclave. We cannot see your thoughts because we don\'t have the key.'
    },
    {
      id: 'Module C',
      title: 'Whisper Large v3-Turbo',
      subtitle: 'Real-time Hinglish transcription.',
      manifesto: 'Voice is nuance. Our implementation of Whisper Large v3-Turbo processes audio buffers in real-time, capturing the emotional cadence of your speech. It understands the code-switching of Hinglish as a first-class language, ensuring your most natural expressions are never lost in translation.'
    }
  ];

  return (
    <section className="section" id="architecture">
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '60px' }}>
          <p className="mono" data-animate>Technical Manifest</p>
          <h2 data-animate>Privacy by Physics.</h2>
          <p className="lead" data-animate>We don't encrypt your data for the cloud. We don't have a cloud. Allure runs on the edge of your own hardware.</p>
        </div>
        <div className="arch-grid">
          {modules.map((mod, i) => (
            <ArchitectureModule key={i} {...mod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
