import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      return !prev;
    });
  }

  return(
    <ThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
