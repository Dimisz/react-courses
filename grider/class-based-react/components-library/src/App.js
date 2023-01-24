import React, { useState } from 'react';

import Translate from './components/Translate';

const options = [
  {
    label: 'The Color of Red',
    value: 'red'
  }, 
  {
    label: 'The Color of Green',
    value: 'green'
  }, 
  {
    label: 'The Color of Blue',
    value: 'blue'
  }, 
]
const items = [
  {
    title: 'What is React?',
    content: 'React a front-end JS library'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite library among engineers'
  },
  {
    title: 'How to use React?',
    content: 'React is used by creating components'
  }
];

const App = () => {
  return(
    <div>
      <Translate />
    </div>
  );
}

export default App;