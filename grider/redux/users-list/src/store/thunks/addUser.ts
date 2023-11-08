import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "../../data";
import { User } from "../../models/user";

export const addUser = createAsyncThunk('users/add', 
  async () => {
    const res = await axios.post(`${SERVER_URL}/users`, {name: faker.person.fullName() });
    console.log(res);
    return res.data;
  }
);