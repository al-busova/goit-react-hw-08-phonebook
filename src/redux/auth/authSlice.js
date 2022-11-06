import { createSlice } from "@reduxjs/toolkit";
import { registration, logIn } from "./authOperations";
const authInitialState = {
    user: { name: null, email: null }, 
  token: null,
  isLoggedIn: false,
};
// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
         [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    },
}
);
export const authReducer = authSlice.reducer;