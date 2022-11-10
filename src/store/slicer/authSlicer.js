import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthorization: false,
  user: null,
};

const AuthSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      localStorage.token = action.payload.token;
      state.token = action.payload.token;
      state.isAuthorization = true;
      state.user = action.payload.user;
    },
    logoutReducer: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthorization = false;
      state.user = null;
    },
  },
});

export default AuthSlicer.reducer;
export const { loginReducer, logoutReducer } = AuthSlicer.actions;
