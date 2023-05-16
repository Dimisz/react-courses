import { createContext, useState } from "react";

export const LanguageContext = createContext();
export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState('english');
  const changeLanguage = (lang) => {
    setLanguage(lang);
  }

  return(
    <LanguageContext.Provider
      value={{
        language: language,
        changeLanguage: changeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

