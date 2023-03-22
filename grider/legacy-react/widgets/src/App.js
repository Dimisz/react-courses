import React from 'react';

// import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
// import Search from './components/Search';

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
];

const dropdownOptions = [
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
  }
]
const App = () => {
  return(
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={dropdownOptions}/>
    </div>
  );
}

export default App;