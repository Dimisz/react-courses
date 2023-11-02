import { createSlice } from "@reduxjs/toolkit";

interface FormState {
  carName: string;
  carCost: string;
}

const initialState: FormState = {
  carName: '',
  carCost: ''
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCarName(state, action){
      return {...state, carName: action.payload};
    },
    setCarCost(state, action){
      return {...state, carCost: action.payload};
    },
    resetCarName(state){
      return {...state, carName: ''};
    }, 
    resetCarCost(state){
      return {...state, carCost: ''}
    }
  }
});