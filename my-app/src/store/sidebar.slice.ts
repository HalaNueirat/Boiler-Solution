import {createSlice} from "@reduxjs/toolkit";

type SidebarState = {open: boolean};

const initialState: SidebarState = {open: false};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    openSidebar: (state) => {
      state.open = true;
    },
    closeSidebar: (state) => {
      state.open = false;
    },
  },
});

export const {toggleSidebar, openSidebar, closeSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
