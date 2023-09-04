import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      return [...state, action.payload];
    },
    removeSong(state, action){

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

    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

console.log(JSON.stringify(store.getState()));
store.dispatch({
  type: 'song/addSong',
  payload: 'New Song'
});

store.dispatch({
  type: 'movie/addMovie',
  payload: 'First Movie'
});

store.dispatch({
  type: 'movie/addMovie',
  payload: 'Second Movie'
});

console.log(JSON.stringify(store.getState()));