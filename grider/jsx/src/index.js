// STEP 1: import React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// STEP 2: Get a reference to the div with ID root
const elt = document.getElementById('root');
// STEP 3: Take React to take control of that elt
const root = ReactDOM.createRoot(elt);
// STEP 4: Create a component

// STEP 5: Show the component on the screen
root.render(<App />);