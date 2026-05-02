import React from 'react';

const Timeline: React.FC = () => {
  const items = [
    { date: 'MAR 12', label: 'Morning Coffee' },
    { date: 'MAR 15', label: 'Rainy Drive' },
    { date: 'MAR 18', label: 'Project Spark' },
    { date: 'MAR 22', label: 'Late Night Talk' },
    { date: 'MAR 25', label: 'The Realization' },
    { date: 'MAR 29', label: 'Sunday Peace' },
  ];

  return (
    <section className="section">
      <div className="container">
        <p className="mono" style={{ marginBottom: '24px' }} data-animate>The Memory Stream</p>
        <div className="timeline" data-animate>
          {items.map((item, i) => (
            <div key={i} className="timeline-item">
              <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{item.date}</span>
              <span style={{ fontSize: '12px' }}>{item.label}</span>
              <div className="timeline-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
