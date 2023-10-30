import { useState } from "react";
interface Props {
  currentCount: number;
  setCount: (num: number) => void;
}
const Form = ({currentCount, setCount}: Props) => {
  const [value, setValue] = useState<number | null>(null);
  return(
    <form 
      onSubmit={(e)=>{
        e.preventDefault();
        setCount(currentCount + (value || 0));
        setValue(null);
      }}  
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between'
      }}
    >
      <input 
        type='text' 
        value={value || ''}
        onChange={(e) => setValue(Number(e.target.value) || 0)}
      />
      <button>Add a lot</button>
    </form>
  );
}

export default Form;