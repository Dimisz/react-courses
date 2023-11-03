import { addCar, useAppDispatch, setCarName, setCarCost, useAppSelector, resetCarCost, resetCarName } from "../store";
import { Car } from "../models/car";
import { nanoid } from "@reduxjs/toolkit";

const CarForm = () => {
  const { carName, carCost } = useAppSelector(state => state.formState);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(carName === ''){
      alert('Car name is required');
      return;
    }
    if(carCost === ''){
      alert('Car cost is required');
      return;
    }
    const newCar: Car = { 
        id: nanoid(), 
        name: carName, 
        value: carCost 
    }
    dispatch(addCar(newCar));
    dispatch(resetCarCost());
    dispatch(resetCarName());
  }

  return(
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="car-name" className="label">Name</label>
            <input
              className='input is-expanded'
              type='text'
              id='car-name'
              value={carName}
              onChange={(e) => dispatch(setCarName(e.target.value))}
            />
          </div>
          <div className='field'>
            <label htmlFor="car-value" className="label">Cost</label>
            <input
              className='input is-expanded'
              type='text'
              id='car-value'
              value={carCost}
              onChange={(e) => dispatch(setCarCost(e.target.value))}
            />
          </div>
          <div className="field">
            <button type='submit' className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;