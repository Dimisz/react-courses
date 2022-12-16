import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages();

const elt = document.getElementById('root');
const root = ReactDOM.createRoot(elt);

root.render(<App />);