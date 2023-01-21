import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

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
      <Search />
    </div>
  );
}

export default App;