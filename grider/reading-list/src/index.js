import './index.css';
import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from './context/books';

const elt = document.getElementById('root');
const root = ReactDOM.createRoot(elt);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
  );