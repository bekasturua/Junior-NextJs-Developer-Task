import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsersIntoState: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUsersIntoState } = userSlice.actions;

export default userSlice.reducer;
