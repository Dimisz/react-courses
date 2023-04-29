import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;
