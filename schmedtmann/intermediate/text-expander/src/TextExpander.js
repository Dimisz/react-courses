import { useState } from "react";
const TextExpander = ({
  children, 
  collapsedNumWords=10, 
  expandButtonText='Show More', 
  collapseButtonText='Show Less',
  buttonColor='#1f09cd'
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    // e.preventDefault();
    setExpanded((previousState) => !previousState);
  }

  const getCollapsedText = (fullText, numWords) => {
    const collapsedText = fullText.split(' ').slice(0, numWords).join(' ') + '... ';
    return collapsedText;
  }

  const buttonStyle = {
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px',
    color: buttonColor
  };

  return(
    <div>
      {
        expanded 
        ?
        <>
          {children}
          <button onClick={toggle} style={buttonStyle}>{collapseButtonText}</button>
        </>
        :
        <>
          {getCollapsedText(children, collapsedNumWords)}
           <button onClick={toggle} style={buttonStyle}>{expandButtonText}</button>
        </>
      }
    </div>
  );
}

export default TextExpander;