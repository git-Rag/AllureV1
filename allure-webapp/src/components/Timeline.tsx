import React from 'react';

const Timeline: React.FC = () => {
  const items = [
    { date: 'MAR 12', label: 'Morning Coffee', id: '01', entropy: '0.24', vector: 'A1-X9' },
    { date: 'MAR 15', label: 'Rainy Drive', id: '02', entropy: '0.89', vector: 'B4-Z2' },
    { date: 'MAR 18', label: 'Project Spark', id: '03', entropy: '0.12', vector: 'C7-Y4' },
    { date: 'MAR 22', label: 'Late Night Talk', id: '04', entropy: '0.56', vector: 'D2-W1' },
    { date: 'MAR 25', label: 'The Realization', id: '05', entropy: '0.94', vector: 'E9-V8' },
    { date: 'MAR 29', label: 'Sunday Peace', id: '06', entropy: '0.05', vector: 'F3-U7' },
  ];

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
              <div className="memory-date">
                {item.date} <span style={{ opacity: 0.3 }}>// FRAG_{item.id}</span>
              </div>
              
              <div className="memory-title">{item.label}</div>
              
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
