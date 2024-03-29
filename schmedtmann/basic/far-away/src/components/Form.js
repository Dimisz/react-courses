import { useState } from "react";

const Form = ({setItems}) => {
  const [qty, setQty] = useState(1);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === ""){
      return;
    }

    const newItem = { id: Math.random().toString(), description: text, quantity: qty, packed: false };
    setItems((pr) => {
      return [...pr, newItem];
    });
    setQty(1);
    setText("");
  }

  const handleSelect = (e) => {
    setQty(Number(e.target.value));
  }

  const handleInputText = (e) => {
    setText(e.target.value);
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select onChange={handleSelect} value={qty}>
      {Array.from({length: 20}, (_, i) => i + 1).map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
      </select>
      <input 
        value={text}
        onChange={handleInputText}
        type="text" 
        placeholder="Item..." 
      />
      <button>Add</button>
    </form>
  )
}

export default Form;