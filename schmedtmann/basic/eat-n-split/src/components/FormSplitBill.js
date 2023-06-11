import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({selectedFriend, handleSplitBill}) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleUserPayment = (e) => {
    const amount = Number(e.target.value) || 0;
    if(amount <= bill){
      setPaidByUser(amount);
    }
    // setPaidByUser(Number(e.target.value) || 0)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`bill: ${bill}`);
    // console.log(`paidByUser: ${paidByUser}`);
    // console.log(`whoIsPaying: ${whoIsPaying}`);
    if(!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);

  }
  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>🐢 Bill Value</label>
      <input
        value={bill} 
        onChange={(e) => setBill(Number(e.target.value) || 0)}
        type='text' />

      <label>🐍 Your expenses</label>
      <input 
        value={paidByUser}
        onChange={handleUserPayment}
        type='text' 
      />

      <label>🦖 {selectedFriend.name}'s expenses</label>
      <input type='text' value={paidByFriend} disabled />

      <label>🐠 Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}


export default FormSplitBill;