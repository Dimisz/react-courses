import { useState, useEffect } from 'react';
import { GoChevronDown, GoChevronLeft }from 'react-icons/go';

import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  //capturing clicks outside the dropdow
  // to close the dropdown
  useEffect(() => {
    const handler = (event) => {
      console.log(event.target);
    };
    document.addEventListener('click', handler, true);
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const handleOptionClick = (val) => {
    onChange(val);
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const renderedOptions = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option.label)} key={option.value}>
      {option.label}
    </div>
  });

  return (
    <div className='w-48 relative'>
      <Panel className="flex justify-between items-center cursor-pointer" 
           onClick={handleClick}
      >
        {value || "Select..."}
        {isOpen ? <GoChevronDown className='text-lg'/> : <GoChevronLeft className='text-lg'/>}
      </Panel>
      {isOpen &&  <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;