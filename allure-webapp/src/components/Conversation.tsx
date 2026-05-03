import React, { useState, useEffect, useRef } from 'react';
import { fetchAIResponseStream } from '../services/ai';

interface Message {
  role: 'bot' | 'user';
  content: string;
  isTyping?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  { role: 'bot', content: "I remember you mentioned the rain always makes you feel a bit nostalgic for Bombay. How are you holding up with the storm today?" },
  { role: 'user', content: "Haan, thoda sa feeling blue. But good to be home. Tumhe yaad hai last time kab hua tha?" },
  { role: 'bot', content: "Yes, October 12th. You were reading that old Ruskin Bond book. You said then that the sound of water on the tin roof was like 'silence finding a voice'." },
];

const Conversation: React.FC = () => {
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isReplaying, setIsReplaying] = useState(true);
  const [isHeadlineVisible, setIsHeadlineVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter effect for initial messages
  const typeText = async (text: string, callback: (current: string) => void) => {
    let current = '';
    for (let i = 0; i < text.length; i++) {
      current += text[i];
      callback(current);
      await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 20));
    }
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const replay = async () => {
      for (const msg of INITIAL_MESSAGES) {
        if (msg.role === 'bot') {
          const newMsg: Message = { ...msg, content: '', isTyping: true };
          setDisplayedMessages(prev => [...prev, newMsg]);
          await typeText(msg.content, (text) => {
            setDisplayedMessages(prev => {
              const last = [...prev];
              const updated = { ...last[last.length - 1], content: text };
              last[last.length - 1] = updated;
              return last;
            });
          });
          setDisplayedMessages(prev => {
            const last = [...prev];
            const updated = { ...last[last.length - 1], isTyping: false };
            last[last.length - 1] = updated;
            return last;
          });
        } else {
          setDisplayedMessages(prev => [...prev, msg]);
          await new Promise(resolve => setTimeout(resolve, 800));
        }
      }
      setIsReplaying(false);
    };

    replay();
    setIsHeadlineVisible(true);
  }, [hasStarted]);

  useEffect(() => {
    // Isolated scrolling: only scroll the chat container, never the window.
    // We use scrollTop instead of scrollIntoView to prevent browser jitter.
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [displayedMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isReplaying) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    setDisplayedMessages(prev => [...prev, userMsg]);
    setInputValue('');

    const botMsg: Message = { role: 'bot', content: '', isTyping: true };
    setDisplayedMessages(prev => [...prev, botMsg]);

    await fetchAIResponseStream(
      inputValue,
      (text) => {
        setDisplayedMessages(prev => {
          const last = [...prev];
          const updated = { ...last[last.length - 1], content: text };
          last[last.length - 1] = updated;
          return last;
        });
      },
      () => {
        setDisplayedMessages(prev => {
          const last = [...prev];
          const updated = { ...last[last.length - 1], isTyping: false };
          last[last.length - 1] = updated;
          return last;
        });
      }
    );
  };

  return (
    <section className="section" id="conversation" ref={sectionRef} style={{ background: 'var(--bg)', position: 'relative' }}>
      <div className="container grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="chat-preview">
          <div className="rain-overlay">
            <div className="noise"></div>
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="rain-drop" 
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.2
                }} 
              />
            ))}
          </div>
          
          <div className="chat-messages" ref={scrollContainerRef}>
            {displayedMessages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role === 'bot' ? 'msg-bot' : 'msg-user slide-in'}`}>
                {msg.content}
                {msg.isTyping && <span className="cursor"></span>}
              </div>
            ))}
          </div>

          {!isReplaying && (
            <form onSubmit={handleSubmit} className="chat-input-area">
              <input 
                type="text" 
                className="chat-input" 
                placeholder="type in any language..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
              />
              {inputValue && <span className="cursor"></span>}
            </form>
          )}
        </div>

        <div className="stack">
          <p className="mono" data-animate>Interaction Design</p>
          <h2 style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
            {"The Flow of Understanding.".split(' ').map((word, i) => (
              <span key={i} className={`word-reveal ${isHeadlineVisible ? 'visible' : ''}`}>
                <span style={{ transitionDelay: `${i * 0.1}s` }}>{word}</span>
              </span>
            ))}
          </h2>
          <p className="lead" data-animate>Experience an AI that doesn't just process text, but understands the emotional subtext of your life in any language.</p>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
