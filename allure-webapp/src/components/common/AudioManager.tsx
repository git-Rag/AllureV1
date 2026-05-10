import React, { useEffect, useRef } from 'react';
import { useUI } from '@/context/UIContext';

// Using the new ethereal hum file for a more niche, light abyss feel
const AMBIENT_TRACK_URL = '/ethereal-hum.mp3';

const AudioManager: React.FC = () => {
  const { isMusicPlaying } = useUI();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // Light humming volume
      
      if (isMusicPlaying) {
        audioRef.current.play().catch((e) => {
          console.warn('Audio: Local playback blocked by browser. Interaction required.', e);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Interaction trigger to ensure audio context starts
  useEffect(() => {
    const handleInteraction = () => {
      if (isMusicPlaying && audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => console.log('Audio: Local abyss initialized.'))
          .catch(err => console.error('Audio: Playback failed after interaction', err));
        
        // Remove listeners once successful
        document.removeEventListener('mousedown', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      }
    };

    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [isMusicPlaying]);

  return (
    <audio 
      ref={audioRef} 
      src={AMBIENT_TRACK_URL} 
      loop 
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default AudioManager;
