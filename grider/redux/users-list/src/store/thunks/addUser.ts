import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../data";

export const addUser = createAsyncThunk('users/add', 
  async () => {
    const res = await axios.post(`${SERVER_URL}/users`, {name: faker.person.fullName() });
    // console.log(res);
    return res.data;
  }
);