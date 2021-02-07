import { IUser } from "./appType.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./appType";

const initialState: IAppState = {};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    /**
     * Set of actions to login user to app
     * @param state slice state
     * @param _ action with login params
     */
    loginRequest: (
      state,
      _: PayloadAction<{
        email: string;
        password: string;
      }>
    ) => {
      state.loginStatus = "pending";
      state.loginError = undefined;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.loginStatus = "success";
      state.user = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.loginStatus = "error";
      state.loginError = action.payload;
    },
    loginReset: (state) => {
      state.loginStatus = undefined;
      state.loginError = undefined;
    },
  },
});

export default appReducer;
