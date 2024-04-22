import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  toggleDrawerClose: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => {
    console.log("Opening drawer");
    setDrawerOpen(true);
  };
  const toggleDrawerClose = () => {
    console.log("Closing drawer");
    setDrawerOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, toggleDrawerClose }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
}
