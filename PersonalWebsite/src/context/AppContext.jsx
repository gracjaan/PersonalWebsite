import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isBackgroundBlack, setisBackgroundBlack] = useState(true);

  return (
    <AppContext.Provider value={{ isBackgroundBlack, setisBackgroundBlack }}>
      {children}
    </AppContext.Provider>
  );
}
