import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

interface UsersState {
  data: string[];
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
    builder.addCase(fetchUsers.pending, (state, action) => {
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