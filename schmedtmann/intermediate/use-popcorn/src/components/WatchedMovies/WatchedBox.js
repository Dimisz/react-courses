import { useState } from "react";
import WatchedList from "./WatchedList";
import Summary from "./Summary";

const WatchedBox = ({watched, average}) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return(
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
              <Summary watched={watched} average={average}/>
              <WatchedList watched={watched} />
            </>
          )}
        </div>
  );
}

export default WatchedBox;