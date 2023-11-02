import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../../models/car";

interface CarsState {
  cars: Car[];
  searchResults: Car[];
  carName: string;
}

const initialState: CarsState = {
  cars: [],
  searchResults: [],
  carName: ''
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
    },
    searchCars(state, action){
      if(action.payload.length === 0) return {...state, searchResults: []};
      const filteredCars = state.cars.filter((car) => {
        return car.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {...state, searchResults: filteredCars};
    },
    setCarName(state, action){
      return {...state, carName: action.payload};
    }

  }
})