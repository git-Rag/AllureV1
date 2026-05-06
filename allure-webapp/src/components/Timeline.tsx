import React from 'react';

const Timeline: React.FC = () => {
  const items = [
    { date: 'MAR 12', label: 'Morning Coffee', id: '01', entropy: '0.24', vector: 'A1-X9', snippet: 'The steam rising from the cup felt like a small, warm ghost of the night before.' },
    { date: 'MAR 15', label: 'Rainy Drive', id: '02', entropy: '0.89', vector: 'B4-Z2', snippet: 'Wipers rhythmically clearing the world, only for it to blur again in seconds.' },
    { date: 'MAR 18', label: 'Project Spark', id: '03', entropy: '0.12', vector: 'C7-Y4', snippet: 'A sudden clarity in the chaos. The architecture finally breathed on its own.' },
    { date: 'MAR 22', label: 'Late Night Talk', id: '04', entropy: '0.56', vector: 'D2-W1', snippet: 'Whispers that carried more weight than any shout ever could.' },
    { date: 'MAR 25', label: 'The Realization', id: '05', entropy: '0.94', vector: 'E9-V8', snippet: 'The patterns we ignore are often the ones that define us the most.' },
    { date: 'MAR 29', label: 'Sunday Peace', id: '06', entropy: '0.05', vector: 'F3-U7', snippet: 'Silence is not the absence of sound, but the presence of everything at once.' },
  ];

  const renderVector = (entropy: string) => {
    const e = parseFloat(entropy);
    const points = 5 + Math.floor(e * 10);
    const path = Array.from({ length: points }).map((_, i) => {
      const angle = (i / points) * Math.PI * 2;
      const r = 20 + Math.random() * 30 * e;
      const x = 50 + Math.cos(angle) * r;
      const y = 50 + Math.sin(angle) * r;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ') + ' Z';

    return (
      <svg viewBox="0 0 100 100" className="memory-vector">
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity={0.3 + e * 0.4} />
      </svg>
    );
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p className="mono" style={{ marginBottom: '8px' }} data-animate>Temporal Nexus</p>
            <h2 data-animate>The Memory Stream</h2>
          </div>
          <p className="mono" style={{ opacity: 0.5 }} data-animate>Total Fragments: {items.length}</p>
        </div>

        <div className="memory-stream-grid" data-animate>
          {items.map((item, i) => (
            <div key={i} className="memory-card">
              {renderVector(item.entropy)}
              <div className="memory-date">
                {item.date} <span style={{ opacity: 0.3 }}>// FRAG_{item.id}</span>
              </div>
              
              <div className="memory-title">{item.label}</div>

              <div className="memory-snippet">{item.snippet}</div>
              
              <div className="memory-vitals">
                <span>ENTROPY: {item.entropy}</span>
                <span>VECTOR: {item.vector}</span>
                <span>STATUS: LATENT</span>
              </div>

              <div className="memory-bg-text">{item.id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
