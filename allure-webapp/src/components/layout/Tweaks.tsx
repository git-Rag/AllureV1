import React, { useState } from 'react';

const Tweaks: React.FC = () => {
  const [accent, setAccent] = useState('#df5858');
  const [radius, setRadius] = useState('0px');
  const [mood, setMood] = useState('rain');

  // Initial mood set
  React.useEffect(() => {
    document.body.className = `mood-${mood}`;
  }, []);

  const handleAccentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAccent(val);
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--accent', val);
      window.dispatchEvent(new CustomEvent('accent-change', { detail: val }));
    });
  };

  const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setMood(val);
    document.body.className = `mood-${val}`;

    // Update accent color state and dispatch event based on mood
    let newAccent = accent;
    if (val === 'rain') newAccent = '#df5858';
    else if (val === 'wind') newAccent = '#58dfdf';
    else if (val === 'fire') newAccent = '#dfa358';
    else if (val === 'silence') newAccent = '#a0a0a0';
    
    setAccent(newAccent);
    window.dispatchEvent(new CustomEvent('accent-change', { detail: newAccent }));
  };

  const handleRadiusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setRadius(val);
    document.documentElement.style.setProperty('--radius', val);
    document.documentElement.style.setProperty('--radius-lg', val === '0px' ? '2px' : '16px');
  };

  return (
    <aside className="tweaks" id="tweaks-panel">
      <div className="tweak-row">
        <span>System Status</span>
        <div className="tweak-dot"></div>
      </div>
      <div className="tweak-row">
        <span>Accent</span>
        <input 
          type="color" 
          id="accent-picker" 
          value={accent} 
          onChange={handleAccentChange}
          style={{ width: '20px', height: '20px', border: 'none', background: 'none', cursor: 'pointer' }} 
        />
      </div>
      <div className="tweak-row">
        <span>Atmosphere</span>
        <select 
          value={mood}
          onChange={handleMoodChange}
          style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--fg)', fontSize: '10px' }}
        >
          <option value="rain">Rain</option>
          <option value="wind">Midnight Wind</option>
          <option value="fire">Firelight</option>
          <option value="silence">Deep Silence</option>
        </select>
      </div>
      <div className="tweak-row">
        <span>Radius</span>
        <select 
          id="radius-select" 
          value={radius}
          onChange={handleRadiusChange}
          style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--fg)', fontSize: '10px' }}
        >
          <option value="0px">Brutalist (0px)</option>
          <option value="12px">Refined (12px)</option>
        </select>
      </div>
      <div style={{ fontSize: '9px', color: 'var(--muted)', marginTop: '8px' }}>
        Allure V1.0.4 · Prototype
      </div>
    </aside>
  );
};

export default Tweaks;
