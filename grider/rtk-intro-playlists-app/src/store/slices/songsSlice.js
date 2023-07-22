import { createSlice } from "@reduxjs/toolkit";

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

export { songsSlice }; 