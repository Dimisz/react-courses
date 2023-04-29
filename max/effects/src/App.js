import React, { useState, useEffect } from 'react';

import AuthContext from './store/auth-context';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedLoggedInValue = localStorage.getItem('isLoggedIn');
    if(storedLoggedInValue === '1'){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
