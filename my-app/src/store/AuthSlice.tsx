import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios library

export interface User {
  username: string;
  password: string;
  roles: string;
}

export interface AuthState {
  users: User[];
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface forArgs {
  login: string;
  password: string;
}

const initialState: AuthState = {
  users: [],
  token: null,
  status: "idle",
  error: null,
};

export const registr = createAsyncThunk(
  "reg/user",
  async ({ login, password }: forArgs, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:9000/auth", {
        login,
        password,
      });

      return response.data;
    } catch (error) {
      // Handle the error or rethrow it to let Redux Toolkit handle it
      throw error;
    }
  }
);

export const signIn = createAsyncThunk(
  "log/user",
  async ({ login, password }: forArgs, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:9000/login", {
        login,
        password,
      });
      localStorage.setItem("token", response.data);
      return response.data;
    } catch (error) {
      // Handle the error or rethrow it to let Redux Toolkit handle it
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registr.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export default authSlice.reducer;
