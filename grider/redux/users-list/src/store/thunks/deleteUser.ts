import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../data";
import { User } from "../../models/user";

export const deleteUser = createAsyncThunk('users/delete', 
  async (user: User) => {
    const { id } = user;
    const res = await axios.delete(`${SERVER_URL}/users/${id}`);
    return user;
  }
)