import { useState } from 'react';

import BillPrice from "./components/BiilPrice";
import RatingSelect from "./components/RatingSelect";
import './App.css';

const App = () => {
  const [billPrice, setBillPrice] = useState('');
  const [yourTip, setYourTip] = useState('0');
  const [friendsTip, setFriendsTip] = useState('0');

  const tip = ((((Number(yourTip) || 0) + (Number(friendsTip) || 0)) / 2) * Number(billPrice)) / 100;
  const total = (Number(billPrice) || 0) + tip;

  const reset = () => {
    setBillPrice('');
    setYourTip('0');
    setFriendsTip('0');
  }

  return(
    <div className="container">
      <BillPrice billPrice={billPrice} setBillPrice={setBillPrice} />
      <RatingSelect 
        tip={yourTip}
        setTip={setYourTip}
      >
        How did you like the service?
      </RatingSelect>
      <RatingSelect 
        tip={friendsTip}
        setTip={setFriendsTip}
      >
        How did your friend like the service?
      </RatingSelect>
      {total > 0 && 
      <>
        <h2>You pay ${total} (${billPrice} + ${tip})</h2>
        <button onClick={reset}>Reset</button>
      </>}
    </div>
  );
}

export default App;