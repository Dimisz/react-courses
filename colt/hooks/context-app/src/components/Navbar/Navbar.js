import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from "@mui/material";
import { Search } from "@mui/icons-material";

import styles from './Navbar.module.css';

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

const content = {
  english: {
    title: 'App',
    search: 'Search',
    flag:'🇬🇧'
  },
  spanish: {
    title: 'AppEs',
    search: 'Buscar',
    flag:'🇻🇪'
  },
  french: {
    title: 'AppFr',
    search: 'Chercher',
    flag:'🇫🇷'
  }
}

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);
  const {title, flag, search} = content[languageCtx.language];

  return(
    <div className={styles.root}>
      <AppBar position='static' color={themeCtx.isDarkMode ?'primary' : 'default'}>
        <Toolbar>
          <IconButton 
            className={styles['menu-btn']}
            color='inherit'
          >{flag}</IconButton>
          <Typography
            className={styles.title}
            variant='h6'
            color='inherit'
          >
            {title}
          </Typography>
          <Switch onChange={themeCtx.toggleDarkMode}/>
          <div className={styles.grow} />
          <div className={styles.search}>
            <div className={styles['search-icon']}>
              <Search />
            </div>
            <InputBase 
              placeholder={`${search}...`} 
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