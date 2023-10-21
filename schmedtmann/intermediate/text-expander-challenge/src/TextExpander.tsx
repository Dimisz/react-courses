import { useState } from "react";

interface Props {
  children: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show Less',
  buttonColor = '#000',
  expanded = false,
  className = ''
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  };

  const collapsedText = children.split(' ').slice(0, collapsedNumWords).join(' ') + '...';
  return(
    <div className={className}>
      { isExpanded ? children : collapsedText }
      <button 
        onClick={toggleExpanded}
        style={{ color: buttonColor }}
      >
        { isExpanded ? collapseButtonText : expandButtonText }
      </button>
    </div>
  );
}

export default TextExpander;