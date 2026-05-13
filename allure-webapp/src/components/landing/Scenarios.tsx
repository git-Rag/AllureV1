import React, { useState } from 'react';
import '@/styles/components/Scenarios.css';

interface Scenario {
  id: string;
  category: string;
  title: string;
  description: string;
  interaction: {
    user: string;
    allure: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: '01',
    category: 'Creative Synthesis',
    title: 'The Ghost Writer',
    description: 'A novelist uses Allure to maintain character consistency across a 100,000-word manuscript without ever uploading their IP to a server.',
    interaction: {
      user: "Does Arjun still remember the blue umbrella from the Shimla summer? Check his 1994 journal entries.",
      allure: "Yes. In the entry from July 14th, 1994, he wrote that the umbrella felt like a 'portable piece of sky' in the monsoon. It's the only thing he kept from that summer."
    }
  },
  {
    id: '02',
    category: 'Research Intelligence',
    title: 'The Deep Archivist',
    description: 'A PhD student maps complex relationships between thousands of PDFs and handwritten notes, all processed locally.',
    interaction: {
      user: "Cross-reference the Derrida lecture notes with the bibliography on spectrality. Is there a gap?",
      allure: "The lecture notes omit the 1967 preface to 'Of Grammatology'. There is a thematic drift from 'presence' to 'hauntology' that isn't reflected in your earlier synthesis."
    }
  },
  {
    id: '03',
    category: 'Personal Evolution',
    title: 'The Mirror',
    description: 'A user tracks their emotional growth over three years of voice notes, identifying patterns the conscious mind missed.',
    interaction: {
      user: "Am I still talking about the 'unfinished project' the same way I did last winter?",
      allure: "The vocabulary has shifted. Last winter you used words like 'burden' and 'stall'. Now you're using 'refining' and 'patience'. The tone is 40% less anxious."
    }
  }
];

const Scenarios: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section" id="scenarios">
      <div className="container">
        <div className="scenarios-header" data-animate>
          <p className="mono">Case Studies</p>
          <h2>Allure in the Wild.</h2>
        </div>

        <div className="scenarios-grid">
          {SCENARIOS.map((scenario) => (
            <div 
              key={scenario.id} 
              className={`scenario-card ${activeId === scenario.id ? 'active' : ''}`}
              onClick={() => setActiveId(activeId === scenario.id ? null : scenario.id)}
              data-animate
            >
              <div className="scenario-number mono">{scenario.id}</div>
              <div className="scenario-content">
                <p className="scenario-category mono">{scenario.category}</p>
                <h3>{scenario.title}</h3>
                <p className="scenario-desc">{scenario.description}</p>
                
                <div className="scenario-preview">
                  <div className="preview-inner">
                    <div className="preview-bubble user">
                      <p>{scenario.interaction.user}</p>
                    </div>
                    <div className="preview-bubble allure">
                      <p>{scenario.interaction.allure}</p>
                    </div>
                  </div>
                </div>

                <div className="scenario-footer">
                  <button className="scenario-toggle mono" tabIndex={-1}>
                    {activeId === scenario.id ? '[ Minimize ]' : '[ Expand Interaction ]'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
