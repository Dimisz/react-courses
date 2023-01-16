import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft }from 'react-icons/go';

import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();
  //capturing clicks outside the dropdow
  // to close the dropdown
  useEffect(() => {
    const handler = (event) => {
      // element is not rendered, i.e. removed
     if(!divElement.current){ 
      //console.log('no elt');
      return;
     }
     // click occurred somewhere outside the element
     if(!divElement.current.contains(event.target)){
      setIsOpen(false);
     }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
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
    <div ref={divElement} className='w-48 relative'>
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