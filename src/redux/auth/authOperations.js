import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const registration = createAsyncThunk(
  "auth/registration",
  async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
