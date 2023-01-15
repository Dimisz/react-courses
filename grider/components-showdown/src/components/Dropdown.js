import { useState } from 'react';

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
    return <div onClick={() => handleOptionClick(option.label)} key={option.value}>
      {option.label}
    </div>
  });

  return (
    <div>
      <div onClick={handleClick}>{value || "Select..."}</div>
      {isOpen &&  <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;