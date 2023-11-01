import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface SongState {
//   songs: string[];
// }

// const initialState: SongState = {
//  songs: []
// }

// export const songsSlice = createSlice({
//   name: 'songs',
//   initialState,
//   reducers: {
//     addSong(state, action){
//       state.songs.push(action.payload);
//     },
//     removeSong(state, action){
//       const filteredSong = state.songs.filter((song) => {
//         return song !== action.payload;
//       });
//       state.songs = filteredSong;
//     }
//   }
// });

const initialState: string[] = [];

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<string>){
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<string>){
      return state.filter((song) => song !== action.payload);
    }, 
    clearSongs(_){
      return [];
    }
  },
})