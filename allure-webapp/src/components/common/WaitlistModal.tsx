import React, { useState, useEffect } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setIsSubmitted(false);
      setEmail('');
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
      <div 
        className={`modal-content ${isClosing ? 'slide-down' : 'slide-up'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>&times;</button>
        
        {!isSubmitted ? (
          <div className="modal-body">
            <p className="mono">Join the waitlist</p>
            <h2>Secure your <br/> spot in the abyss.</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', marginBottom: '32px' }}>
              We're rolling out access in waves to ensure the highest level of privacy and performance.
            </p>
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input 
                type="email" 
                placeholder="EMAIL_ADDRESS" 
                className="modal-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Request Access
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-body" style={{ textAlign: 'center' }}>
            <p className="mono" style={{ color: 'var(--accent)' }}>System Update</p>
            <h2 style={{ fontSize: '48px' }}>You're In.</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
              We've logged your interest. Watch your inbox for a transmission from the void.
            </p>
            <div className="cursor" style={{ marginTop: '32px' }}></div>
            <button 
              className="btn btn-accent" 
              style={{ width: '100%', marginTop: '48px' }}
              onClick={handleClose}
            >
              Back to Surface
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          background: var(--bg);
          border: 1px solid var(--border);
          width: 100%;
          max-width: 480px;
          padding: 64px 48px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 24px;
          color: var(--muted);
          transition: color 0.2s;
        }

        .modal-close:hover {
          color: var(--fg);
        }

        .modal-input {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 16px;
          color: var(--fg);
          font-family: var(--font-mono);
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .modal-input:focus {
          border-color: var(--accent);
        }

        .modal-input::placeholder {
          color: var(--muted);
          opacity: 0.3;
        }

        .fade-in { animation: fadeIn 0.4s ease forwards; }
        .fade-out { animation: fadeOut 0.4s ease forwards; }
        .slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .slide-down { animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(40px); } }
      `}</style>
    </div>
  );
};

export default WaitlistModal;
