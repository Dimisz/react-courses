import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../../models/car";

interface CarsState {
  cars: Car[];
}

const initialState: CarsState = {
  cars: [],
};

export const carsSlice = createSlice({
  name: 'carsState',
  initialState,
  reducers: {
    addCar(state, action){
      state.cars.push(action.payload);
    },
    removeCar(state, action){
      const filteredCars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      return {...state, cars: filteredCars};
    }
  }
})