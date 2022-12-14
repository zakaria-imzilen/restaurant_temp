import { createSlice } from "@reduxjs/toolkit";

export const navbar = createSlice({
	name: "navbar",
	initialState: {
		menu: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.menu = !state.menu;
		},
	},
});

export default navbar.reducer;
export const { toggleMenu } = navbar.actions;
