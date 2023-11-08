import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { User } from "../../models/user";
import { addUser } from "../thunks/addUser";

interface UsersState {
  data: User[];
  isLoading: boolean;
  error: { message: string; } | null; 
}

const initialState: UsersState = {
  data: [],
  isLoading: false,
  error: null
}

const usersSlice = createSlice({
  name: 'usersState',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addUser.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });

    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = { message: action.error.message  || 'Some error occurred while fetching users' };
    });
  }
});

export const usersReducer = usersSlice.reducer;