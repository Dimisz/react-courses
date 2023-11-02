import { useState } from "react";
import { addCar, useAppDispatch, setCarName } from "../store";
import { Car } from "../models/car";

const CarForm = () => {
  const [carName, setName] = useState('');
  const [carValue, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(`car name: ${carName}`);
    // console.log(`car value: ${carValue}`);
    const newCar: Car = { 
        id: Math.random(), 
        name: carName, 
        value: carValue 
    }
    dispatch(addCar(newCar));
    dispatch(setCarName(''));
    setName('');
    setValue(''); 
  }

  const handleCarNameChange = (name: string) => {
    setName(name);
    dispatch(setCarName(name));
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="car-name">Car Name</label>
      <input 
        type='text' 
        id='car-name'
        value={carName} 
        onChange={(e) => handleCarNameChange(e.target.value)}
      />
      <label htmlFor="car-value">Car Value</label>
      <input 
        type='text' 
        id='car-value'
        value={carValue}
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default CarForm;