import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'end', marginBottom: '80px' }}>
          <h2 data-animate>Built for the <br/> Sacred Space of Mind.</h2>
          <p className="lead" data-animate>Allure isn't a tool; it's a mirror. Designed to be there when you need to think out loud.</p>
        </div>
        
        <div className="grid-2">
          <div className="card" data-animate>
            <p className="mono">01 / Storage</p>
            <h3>Voice Memories</h3>
            <p style={{ color: 'var(--muted)', marginTop: '16px' }}>Every whisper, every realization. Allure captures the nuance of your voice and turns fleeting thoughts into a lasting library of you.</p>
          </div>
          <div className="card" data-animate>
            <p className="mono">02 / Processing</p>
            <h3>Absolute Privacy</h3>
            <p style={{ color: 'var(--muted)', marginTop: '16px' }}>100% on-device. No data packets ever leave your silicon. Privacy is not a promise; it's a physical limitation of our architecture.</p>
          </div>
          <div className="card" data-animate>
            <p className="mono">03 / Language</p>
            <h3>Multilingual Heart</h3>
            <p style={{ color: 'var(--muted)', marginTop: '16px' }}>Speaks your language. Deep support for English, Hindi, and the fluid Hinglish of everyday conversation.</p>
          </div>
          <div className="card" data-animate>
            <p className="mono">04 / Growth</p>
            <h3>Contextual Wisdom</h3>
            <p style={{ color: 'var(--muted)', marginTop: '16px' }}>Allure remembers what you said last month, last year. It connects the dots of your life across time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
