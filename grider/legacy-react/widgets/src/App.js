import React, { useState } from 'react';

// import Accordion from './components/Accordion';
// import Dropdown from './components/Dropdown';
// import Search from './components/Search';
import Translate from './components/Translate';
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
  const [selected, setSelected] = useState(dropdownOptions[0]);
  return(
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <Dropdown 
          options={dropdownOptions}
          selected={selected}
          onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
}

export default App;