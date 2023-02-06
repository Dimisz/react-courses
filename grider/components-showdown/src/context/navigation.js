import { createContext, useState, ueEffect, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return(
    <NavigationContext.Provider value={{}}>
      <div>
        <button onClick={() => navigate('/accordion')}>Go to accordion</button>
        <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
      </div>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;