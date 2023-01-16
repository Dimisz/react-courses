import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return(
    <div>Hi there!</div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);