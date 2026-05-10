import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface UIContextType {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
  toggleWaitlist: () => void;
  isMusicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
  toggleMusic: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);
  const toggleWaitlist = () => setIsWaitlistOpen((prev) => !prev);
  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);
  const setMusicPlaying = (playing: boolean) => setIsMusicPlaying(playing);

  return (
    <UIContext.Provider value={{ 
      isWaitlistOpen, 
      openWaitlist, 
      closeWaitlist, 
      toggleWaitlist,
      isMusicPlaying,
      setMusicPlaying,
      toggleMusic
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
