import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      return [...state, action.payload];
    },
    removeSong(state, action){
      const filteredSongs = state.filter((song) => {
        return song !== action.payload;
      });
      return filteredSongs;
    },
    resetSongs(state, action){
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
      const filteredMovies = state.filter((movie) => {
        return movie !== action.payload;
      });
      return filteredMovies;
    },
    resetMovies(state, action){
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
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;