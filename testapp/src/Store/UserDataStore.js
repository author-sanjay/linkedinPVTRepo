import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userObject: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserObject: (state, action) => {
      state.userObject = action.payload;
    },
    setUserLogout: (state, action) => {
        state.userLogout = null;
    }
  },
});

export const { setUserObject, setUserLogout } = userSlice.actions;

export default userSlice.reducer
