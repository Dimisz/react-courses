import React from 'react';

import Accordion from './components/Accordion';

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
      <Accordion items={items} />
    </div>
  );
}

export default App;