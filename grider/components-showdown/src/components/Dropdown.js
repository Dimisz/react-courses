import { useState } from 'react';
import { GoChevronDown, GoChevronLeft }from 'react-icons/go';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex justify-between items-center cursor-pointer border rounder p-3 shadow bg-white w-full" 
           onClick={handleClick}
      >
        {value || "Select..."}
        {isOpen ? <GoChevronDown className='text-lg'/> : <GoChevronLeft className='text-lg'/>}
      </div>
      {isOpen &&  <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;