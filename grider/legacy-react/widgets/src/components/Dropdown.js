import React, { useState } from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if(option !== selected){
      return(
        <div 
            key={option.value} 
            className='item' 
            onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    }
  });
  return(
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div className={`ui selection dropdown ${isDropdownOpen ? 'visible active' : ''}`}
             onClick={() => setIsDropdownOpen((isOpen) => {return !isOpen})}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${isDropdownOpen ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;