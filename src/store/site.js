import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    darkStatus: true,
    sideBarStatus: true,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkStatus = !state.darkStatus;
    },
    setSideBarStatus: (state) => {
      state.sideBarStatus = !state.sideBarStatus;
    },
  },
});

export const { setDarkMode, setSideBarStatus } = site.actions;
export default site.reducer;
