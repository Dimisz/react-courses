import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: 'song',
  initialState: ['first song'],
  reducers: {
    addSong(state, action){
      state.push(action.payload);
    },
    removeSong(state, action){
      //
    }
  }
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState: ['initial movie'],
  reducers: {
    addMovie(state, action){
      return [...state, action.payload];
    },
    removeMovie(state, action){
      const filteredMovies = state.filter((movie) => movie !== action.payload);
      return [...filteredMovies];
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  type: 'song/addSong',
  payload: 'new song'
});

console.log(JSON.stringify(store.getState()));

store.dispatch({
  type: 'movie/addMovie',
  payload: 'First added movie'
});

console.log('added a movie');
console.log(JSON.stringify(store.getState()));

store.dispatch({
  type: 'movie/addMovie',
  payload: 'Second added movie'
});

console.log('added a movie');
console.log(JSON.stringify(store.getState()));

store.dispatch({
  type: 'movie/removeMovie',
  payload: 'Second added movie'
});

console.log('removed Second added movie');
console.log(JSON.stringify(store.getState()));

store.dispatch({
  type: 'movie/removeMovie',
  payload: 'initial movie'
});

console.log('removed initial movie');
console.log(JSON.stringify(store.getState()));