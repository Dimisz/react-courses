import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
import StarRating from './components/StarRating/StarRating';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// root.render(<App/>);
root.render(<StarRating maxRating={10}/>);

