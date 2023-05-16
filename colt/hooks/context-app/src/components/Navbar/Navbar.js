import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from "@mui/material";
import { Search } from "@mui/icons-material";

import styles from './Navbar.module.css';

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);

  return(
    <div className={styles.root}>
      <AppBar position='static' color={themeCtx.isDarkMode ?'primary' : 'default'}>
        <Toolbar>
          <IconButton 
            className={styles['menu-btn']}
            color='inherit'
          >🇨🇰</IconButton>
          <Typography
            className={styles.title}
            variant='h6'
            color='inherit'
          >
            App Title
          </Typography>
          <Switch onChange={themeCtx.toggleDarkMode}/>
          <div className={styles.grow} />
          <div className={styles.search}>
            <div className={styles['search-icon']}>
              <Search />
            </div>
            <InputBase 
              placeholder='Search...' 
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput
              }}
            />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;