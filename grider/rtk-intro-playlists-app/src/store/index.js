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
    },
    clearSongs(state, action){
      return [];
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
    },
    clearMovies(state, actions){
      return [];
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
export const { addSong, removeSong, clearSongs } = songsSlice.actions;
export const { addMovie, removeMovie, clearMovies } = moviesSlice.actions;