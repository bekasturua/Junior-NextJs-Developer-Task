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
  },
});

export const { addUsersIntoState } = userSlice.actions;

export default userSlice.reducer;
