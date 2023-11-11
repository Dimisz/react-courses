import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { User } from "../../models/user";
import { addUser } from "../thunks/addUser";
import { ResError } from "../../models/error";
import { deleteUser } from "../thunks/deleteUser";

interface UsersState {
  data: User[];
  isLoading: boolean;
  error: ResError | null; 
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
    // deleteUser
    builder.addCase(deleteUser.pending, (state) =>{
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(deleteUser.rejected, (state, action) =>{
      state.isLoading = false;
      state.error = { message: action.error.message || 'Error occurred deleting a user' };
    });
    // addUser
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = { message: action.error.message || 'Error occurred adding a user' };
      // console.log('rejected');
    });
    // fetchUsers
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