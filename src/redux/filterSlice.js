import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    getContactsFilter(_, action) {
          return action.payload;
    },
  },
});

export const { getContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;