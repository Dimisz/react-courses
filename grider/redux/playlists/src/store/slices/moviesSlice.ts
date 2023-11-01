import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<string>){
      return [...state, action.payload];
    },
    removeMovie(state, action: PayloadAction<string>){
      return state.filter((movie) => movie !== action.payload);
    }, 
    clearMovies(_) {
      return [];
    }
  }
});
