import React, { useState } from 'react';

interface ModuleProps {
  id: string;
  title: string;
  subtitle: string;
  manifesto: string;
  stats: { label: string; value: string }[];
  isActive?: boolean;
}

const ArchitectureModule: React.FC<ModuleProps> = ({ id, title, subtitle, manifesto, stats, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-animate>
      <div className={`arch-cell ${isOpen ? 'is-open' : ''} ${isActive ? 'is-active' : ''}`}>
        <div className="arch-cell-header">
          <span className="mono" style={{ fontSize: '10px', color: 'var(--accent)' }}>{id}</span>
          <span style={{ fontSize: '14px', lineHeight: '1.2', fontWeight: 500 }}>{title}</span>
          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 16px' }}>{subtitle}</p>
          
          <div className="arch-stats mono">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

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
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    {
      id: 'L-01',
      title: 'Local Llama 3B Quantized',
      subtitle: 'Optimized for Apple Neural Engine.',
      stats: [
        { label: 'VRAM', value: '2.1GB' },
        { label: 'LATENCY', value: '18ms' }
      ],
      manifesto: 'By quantizing the weights to 4-bit precision, we bring the reasoning power of 3 billion parameters into the palm of your hand. It does not think in the cloud; it thinks in the very electrons of your device. Zero latency, zero surveillance, absolute cognitive sovereignty.'
    },
    {
      id: 'V-02',
      title: 'Vector Database Encrypted',
      subtitle: 'SQLite-VSS with AES-256 local key.',
      stats: [
        { label: 'THROUGHPUT', value: '1.2k req/s' },
        { label: 'ENCRYPTION', value: 'AES-GCM' }
      ],
      manifesto: 'Your memories are stored as high-dimensional coordinates in a private latent space. Using SQLite-VSS, we perform similarity searches locally. Every fragment is encrypted with a key that never leaves your device\'s Secure Enclave. We cannot see your thoughts because we don\'t have the key.'
    },
    {
      id: 'A-03',
      title: 'Whisper Large v3-Turbo',
      subtitle: 'Real-time Hinglish transcription.',
      stats: [
        { label: 'WORD ERROR', value: '< 2.4%' },
        { label: 'SAMPLING', value: '16kHz' }
      ],
      manifesto: 'Voice is nuance. Our implementation of Whisper Large v3-Turbo processes audio buffers in real-time, capturing the emotional cadence of your speech. It understands the code-switching of Hinglish as a first-class language, ensuring your most natural expressions are never lost in translation.'
    }
  ];

  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '80px' }}>
          <div style={{ maxWidth: '500px' }}>
            <p className="mono" data-animate>Technical Manifest</p>
            <h2 data-animate>Privacy by Physics.</h2>
            <p className="lead" data-animate>We don't encrypt your data for the cloud. We don't have a cloud. Allure runs on the edge of your own hardware.</p>
            
            <div className="stack-diagram" data-animate>
              {modules.map((_, i) => (
                <div 
                  key={i} 
                  className={`stack-layer ${activeModule === i ? 'active' : ''}`}
                  onMouseEnter={() => setActiveModule(i)}
                  onMouseLeave={() => setActiveModule(null)}
                  onClick={() => {
                    const el = document.getElementById(`mod-${i}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <div className="layer-label mono">0{i+1}</div>
                </div>
              ))}
              <div className="stack-base">Hardware Enclave</div>
            </div>
          </div>

          <div className="arch-grid">
            {modules.map((mod, i) => (
              <div id={`mod-${i}`} key={i}>
                <ArchitectureModule {...mod} isActive={activeModule === i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
