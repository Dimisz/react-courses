import React, { useState } from 'react';
import Route from './components/Route';

import Accordion from './components/Accordion';
import Translate from './components/Translate';
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
// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items} />;
//   }
// }

// const showSearch = () => {
//   if(window.location.pathname === '/search'){
//     return <Search />;
//   }
// }

// const showDropdown = () => {
//   if(window.location.pathname === '/dropdown'){
//     return (
//             <Dropdown />);
//   }
// }

// const showTranslate = () => {
//   if(window.location.pathname === '/translate'){
//     return (
//             <Translate />);
//   }
// }

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  
  return(
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color"
                  options={options}
                  selected={selected}
                  onSelectedChange={setSelected}
        
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;