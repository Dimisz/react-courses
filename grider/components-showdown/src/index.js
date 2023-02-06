import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';

const elt = document.getElementById('root');
const root = ReactDOM.createRoot(elt);

root.render(
    <NavigationProvider>   
        <App/> 
    </NavigationProvider>
);