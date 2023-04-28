import ReactDOM from 'react-dom';

import Card from "./Card"
import Button from "./Button";

import styles from './ErrorModal.module.css';

const Backdrop = ({handleDismiss}) => {
  return(
    <div 
      className={styles.backdrop} 
      onClick={handleDismiss}
    />
  );
}

const ModalOverlay = ({errorTitle, errorMessage, handleDismiss}) => {
  return(
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
  );
}


const ErrorModal = ({errorTitle, errorMessage, handleDismiss}) => {
  const backdropRoot = document.getElementById('backdrop-root');
  const overlayRoot = document.getElementById('overlay-root');

  return(
    <>
      {ReactDOM.createPortal(
          <Backdrop handleDismiss={handleDismiss}/>, 
          backdropRoot
      )}
      {ReactDOM.createPortal(
          <ModalOverlay 
            handleDismiss={handleDismiss}
            errorTitle={errorTitle}
            errorMessage={errorMessage}
          />, 
          overlayRoot
      )}
    </>
  );
}

export default ErrorModal;