import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: null,
  userId: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.userValue = action.payload;
    },
    setLogoutUser: (state, action) => {
      state.userValue = null;
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
    },
  },
});

export const { getCurrentUser, setLogoutUser } = UserSlice.actions;

export default UserSlice.reducer;
