import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from "@mui/material";
import { Search } from "@mui/icons-material";

import styles from './Navbar.module.css';
import { style } from "@mui/system";

const Navbar = () => {
  return(
    <div className={styles.root}>
      <AppBar position='static' color='primary'>
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
          <Switch />
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