import { useState } from 'react';

import BillPrice from "./components/BiilPrice";
import ServiceRating from "./components/ServiceRating";
import './App.css';

const App = () => {
  const [billPrice, setBillPrice] = useState('');
  const [yourTip, setYourTip] = useState('0');
  const [friendsTip, setFriendsTip] = useState('0');

  const tip = (((Number(yourTip) || 0) + (Number(friendsTip) || 0)) / 2);
  const total = (Number(billPrice) || 0) + tip;

  const reset = () => {
    setBillPrice('');
    setYourTip('0');
    setFriendsTip('0');
  }

  return(
    <div className="container">
      <BillPrice billPrice={billPrice} setBillPrice={setBillPrice} />
      <ServiceRating 
        labelText='How did you like the service?' 
        tip={yourTip}
        setTip={setYourTip}
      />
      <ServiceRating 
        labelText='How did your friend like the service?' 
        tip={friendsTip}
        setTip={setFriendsTip}
      />
      <h2>You pay ${total} (${billPrice} + ${tip})</h2>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;