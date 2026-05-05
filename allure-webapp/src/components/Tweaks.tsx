import React, { useState } from 'react';

const Tweaks: React.FC = () => {
  const [accent, setAccent] = useState('#df5858');
  const [radius, setRadius] = useState('0px');

  const handleAccentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAccent(val);
    // Use requestAnimationFrame to ensure the style update doesn't block the UI thread
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--accent', val);
      window.dispatchEvent(new CustomEvent('accent-change', { detail: val }));
    });
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
