import styles from './Button.module.css';

const Button = (props) => {
  const defaultClickHandler = (e) => {
    e.preventDefault();
    console.log('No click handler found in Button props');
  }

  return(
    <button 
      className={styles.button}
      type={props.type || 'button'} 
      onClick={props.onClick || defaultClickHandler}
    >
      {props.children}
    </button>
  )
}

export default Button;