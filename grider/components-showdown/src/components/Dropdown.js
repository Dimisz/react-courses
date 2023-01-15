import { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select...');
  const handleClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const handleOptionClick = (value) => {
    console.log('I should close');
    setSelectedValue(value);
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const renderedOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick(option.value)} key={option.value}>
      {option.label}
    </div>
  });

  return (
    <div>
      <div onClick={handleClick}>{selectedValue}</div>
      {isOpen &&  <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;