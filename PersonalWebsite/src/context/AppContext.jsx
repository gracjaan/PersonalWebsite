import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isIntroductionInMiddle, setIsIntroductionInMiddle] = useState(true);

  return (
    <AppContext.Provider value={{ isIntroductionInMiddle, setIsIntroductionInMiddle }}>
      {children}
    </AppContext.Provider>
  );
}
