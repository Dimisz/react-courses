import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { SERVER_URL } from "../../data";

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get(`${SERVER_URL}/users`);
  
  // slow down to check loaders
  // await pause(5000);

  return response.data;
});

// testing loaders -> slow down connection
// const pause = (duration: number) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }