import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');

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
    // clearSongs(state, action){
    //   return [];
    // }
  },
  extraReducers(builder){
    builder.addCase(reset, (state, action) => {
      return [];
    });
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
    // clearMovies(state, action){
    //   return [];
    // }
  },
  extraReducers(builder){
    builder.addCase(reset, (state, action) => {
      return [];
    });
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
