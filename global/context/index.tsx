"use client";

import {
  createContext,
  ReactNode,
} from "react";

export type AppContextType = {
  
};

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
  

  const contextValue: AppContextType = {
    
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
