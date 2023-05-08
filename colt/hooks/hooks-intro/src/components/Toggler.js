import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';


const Toggler = () => {
  // const [isOn, setIsOn] = useState(true);
  // const toggle = () => {
  //   setIsOn((prev) => {
  //     return !prev;
  //   });
  // }
  const [isOn, toggleIsOn] = useToggle(true);
  const [isHot, toggleIsHot] = useToggle(false);
  return(
    <div>
      <div>
        <h1>{isOn ? '1' : '0'}</h1>
        <button onClick={toggleIsOn}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      </div>
      <div>
        <h1>{isHot ? 'Hot' : 'Cold'}</h1>
        <button onClick={toggleIsHot}>{isHot ? 'Cool down' : 'Warm up'}</button>
      </div>
    </div>
  )
}
export default Toggler;