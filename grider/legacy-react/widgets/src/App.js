import React from 'react';

import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library'
  }, 
  {
    title: 'What is JavaScript?',
    content: 'JavaScript is a programming language'
  },
  {
    title: 'What is CSS?',
    content: 'CSS is a cascading stysheet'
  }
]
const App = () => {
  return(
    <div><Accordion items={items}/></div>
  );
}

export default App;