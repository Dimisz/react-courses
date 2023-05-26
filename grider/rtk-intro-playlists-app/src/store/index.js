import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      state.push(action.payload);
    },
    removeSong(state, action){
      const filteredSongs = state.filter((song) => song !== action.payload);
      return [...filteredSongs];
    },
    clearSongs(state){
      return [];
    }
  }
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action){
      return [...state, action.payload];
    },
    removeMovie(state, action){
      const filteredMovies = state.filter((movie) => movie !== action.payload);
      return [...filteredMovies];
    },
    clearMovies(state){
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
