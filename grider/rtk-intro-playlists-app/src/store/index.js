import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      return [...state, action.payload];
    },
    removeSong(state, action){
      //
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
      //
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
export const { addSong } = songsSlice.actions;