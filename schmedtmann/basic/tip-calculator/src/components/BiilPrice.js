import { useState } from "react";

const BillPrice = ({billPrice, setBillPrice}) => {
  // const [billPrice, setBillPrice] = useState('');

  const handleChange = (e) => {
    setBillPrice(e.target.value);
  }

  return(
    <>
      <label htmlFor='bill-price'>How much was the bill?</label>
      <input 
        onChange={handleChange}
        value={billPrice}
        id='bill-price' 
        name='bill-price' 
      />
    </>
  );
}

export default BillPrice;