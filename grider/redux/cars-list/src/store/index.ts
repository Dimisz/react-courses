import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { carsSlice } from "./slices/carsSlice";
import { formSlice } from "./slices/formSlice";
import { searchSlice } from "./slices/searchSlice";


export const store = configureStore({
  reducer: {
    carsState: carsSlice.reducer,
    formState: formSlice.reducer,
    searchState: searchSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { addCar, removeCar } = carsSlice.actions;
export const { setCarName, setCarCost, resetCarCost, resetCarName } = formSlice.actions;
export const { setSearchTerm } = searchSlice.actions;