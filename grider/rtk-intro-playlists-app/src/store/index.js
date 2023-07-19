import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      return [...state, action.payload];
    },
    removeSong(state, action){
      return state.filter((song) => song !== action.payload);
    }
  }
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState: ['Default movie'],
  reducers: {
    addMovie(state, action){
      return [...state, action.payload];
    },
    removeMovie(state, action){
      return state.filter((movie) => movie !== action.payload);
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;