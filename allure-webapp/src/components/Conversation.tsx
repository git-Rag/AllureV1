import React from 'react';

const Conversation: React.FC = () => {
  return (
    <section className="section" id="conversation" style={{ background: 'var(--bg)' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <div className="chat-preview" data-animate>
          <div className="msg msg-bot">I remember you mentioned the rain always makes you feel a bit nostalgic for Bombay. How are you holding up with the storm today?</div>
          <div className="msg msg-user">Haan, thoda sa feeling blue. But good to be home. Tumhe yaad hai last time kab hua tha?</div>
          <div className="msg msg-bot">Yes, October 12th. You were reading that old Ruskin Bond book. You said then that the sound of water on the tin roof was like 'silence finding a voice'.</div>
        </div>
        <div className="stack">
          <p className="mono" data-animate>Interaction Design</p>
          <h2 data-animate>The Flow of <br/> Understanding.</h2>
          <p className="lead" data-animate>Experience an AI that doesn't just process text, but understands the emotional subtext of your life in any language.</p>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
