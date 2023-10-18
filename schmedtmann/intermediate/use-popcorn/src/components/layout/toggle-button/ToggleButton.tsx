import { SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ToggleButton = ({isOpen, setIsOpen}: Props) => {
  
  return(
    <button
      className="btn-toggle"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      {isOpen ? "–" : "+"}
    </button>
  )
}

export default ToggleButton;