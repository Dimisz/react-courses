import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movie',
  initialState: ['Default movie'],
  reducers: {
    addMovie(state, action){
      return [...state, action.payload];
    },
    removeMovie(state, action){
      return state.filter((movie) => movie !== action.payload);
    },
    clearMovies(state, actions){
      return [];
    }
  }
});

export { moviesSlice };