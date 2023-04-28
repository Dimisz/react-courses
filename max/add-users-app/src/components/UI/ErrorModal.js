import Card from "./Card"
import Button from "./Button";

import styles from './ErrorModal.module.css';

const ErrorModal = ({errorTitle, errorMessage, handleDismiss}) => {
  return(
    <div>
      <div className={styles.backdrop} onClick={handleDismiss}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{errorTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={handleDismiss}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;