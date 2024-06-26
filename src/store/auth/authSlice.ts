// Store Slice
import { createSlice } from "@reduxjs/toolkit";

// Actions
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

// Check Errors
import { isString } from "../../util/Guards";


interface IAuthState {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
  accessToken: string | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUi: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    logOut: (state) => {
      (state.user = null), (state.accessToken = null);
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(actAuthRegister.pending, (state) => {
      (state.loading = "pending"), (state.error = null);
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Login
    builder.addCase(actAuthLogin.pending, (state) => {
      (state.loading = "pending"), (state.error = null);
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      (state.loading = "pending"),
        (state.accessToken = action.payload.accessToken);
      state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

// Exports Actions
export const { resetUi, logOut } = authSlice.actions;

export { actAuthRegister, actAuthLogin };
export default authSlice.reducer;
