import { configureStore } from "@reduxjs/toolkit";
import { songsSlice } from "./slices/songsSlice";
import { moviesSlice } from "./slices/moviesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { addSong, removeSong, clearSongs } = songsSlice.actions;
export const { addMovie, removeMovie, clearMovies } = moviesSlice.actions;
