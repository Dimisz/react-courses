import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      return [...state, action.payload];
    },
    removeSong(state, action){
      // to do
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