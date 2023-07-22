import { configureStore, createSlice } from "@reduxjs/toolkit";

import { moviesSlice } from "./slices/moviesSlice";
import { songsSlice } from "./slices/songsSlice";


const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

export { store };
export const { addSong, removeSong, clearSongs } = songsSlice.actions;
export const { addMovie, removeMovie, clearMovies } = moviesSlice.actions;