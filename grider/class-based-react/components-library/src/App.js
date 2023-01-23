import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
      <Dropdown options={options}/>
    </div>
  );
}

export default App;