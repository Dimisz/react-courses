import { ReactNode, useState } from "react";
import ToggleButton from "../toggle-button/ToggleButton";

interface Props {
  children: ReactNode;
}

const SectionBox = ({children}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return(
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

export default SectionBox;