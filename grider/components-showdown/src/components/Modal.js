import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Modal = ({children, actionBar, onClose}) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // disable scrolling if modal is open
    return () => {
      // enable scrolling as the modal is closed
      document.body.classList.remove('overflow-hidden');
    }
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-red-300 opacity-80">
      </div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;