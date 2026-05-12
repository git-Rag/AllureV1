import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface UIContextType {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
  toggleWaitlist: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);
  const toggleWaitlist = () => setIsWaitlistOpen((prev) => !prev);

  return (
    <UIContext.Provider value={{ 
      isWaitlistOpen, 
      openWaitlist, 
      closeWaitlist, 
      toggleWaitlist
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
