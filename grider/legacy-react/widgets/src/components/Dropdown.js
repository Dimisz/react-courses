import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsDropdownOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);


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
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
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