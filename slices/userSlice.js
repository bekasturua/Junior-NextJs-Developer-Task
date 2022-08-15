import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsersIntoState: (state, action) => {
      for (let user of action.payload) {
        if (!state.users.find((u) => u.id === user.id)) {
          state.users.push(user);
        }
      }
    },
    deleteUserFromState: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    changeUsersInState: (state, action) => {
      state.users = action.payload;
    },
    addUserIntoState: (state, action) => {
      if (!state.users.find((u) => u.id === action.payload.id)) {
        state.users.push(action.payload);
      }
    },
  },
});

export const {
  addUsersIntoState,
  deleteUserFromState,
  changeUsersInState,
  addUserIntoState,
} = userSlice.actions;

export default userSlice.reducer;
