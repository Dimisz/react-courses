import { addCar, useAppDispatch, setCarName, setCarCost, useAppSelector, resetCarCost, resetCarName } from "../store";
import { Car } from "../models/car";

const CarForm = () => {
  const carName = useAppSelector(state => state.formState.carName);
  const carValue = useAppSelector(state => state.formState.carCost);

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
    dispatch(resetCarCost());
    dispatch(resetCarName());
  }

  const handleCarNameChange = (name: string) => {
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
        onChange={(e) => dispatch(setCarCost(e.target.value))} 
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default CarForm;