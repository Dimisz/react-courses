// export const addUser = createAsyncThunk('users/add', 
//   async () => {
//     const res = await axios.post(`${SERVER_URL}/users`, {name: faker.person.fullName() });
//     // console.log(res);
//     return res.data;
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../data";

// export const deleteUser(id: number) = createAsyncThunk('users/delete', async () => {
//   const res = await axios.delete(`${SERVER_URL}/users/${id}`);
//   console.log(res);
// }
// )