import React, { useState } from 'react';
import Header from './components/Header';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
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
      <Header />
      <Route path='/'>
        <Accordion items={items}/> 
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown label='Select a color' 
                  options={dropdownOptions} 
                  selected={selected} 
                  onSelectedChange={setSelected} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;