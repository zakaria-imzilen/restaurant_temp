import { configureStore } from "@reduxjs/toolkit";
import { navbar } from "./features/Navbar";

export const store = configureStore({
	reducer: {
		navbar: navbar.reducer,
	},
});
