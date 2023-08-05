import { useState } from "react";
const TextExpander = ({
  children, 
  collapsedNumWords=10, 
  expandButtonText='Show More', 
  collapseButtonText='Show Less'
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

  return(
    <div>
      {
        expanded 
        ?
        <>
          {children}
          <a onClick={toggle} style={{color: 'blue'}}>{collapseButtonText}</a>
        </>
        :
        <>
          {getCollapsedText(children, collapsedNumWords)}
           <a onClick={toggle} style={{color: 'blue'}}>{expandButtonText}</a>
        </>
      }
    </div>
  );
}

export default TextExpander;