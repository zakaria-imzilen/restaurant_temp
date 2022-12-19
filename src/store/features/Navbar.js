import { createSlice } from "@reduxjs/toolkit";

const navbar = createSlice({
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

export default navbar;
export const { toggleMenu } = navbar.actions;
