import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './PageContent.module.css';

const PageContent = ({children}) => {
  const themeCtx = useContext(ThemeContext);
  return(
    <div className={`${styles.page} ${themeCtx.isDarkMode ? styles.dark : styles.light}`}>
      {children}
    </div>
  );
}

export default PageContent;