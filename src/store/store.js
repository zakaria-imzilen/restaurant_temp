import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/Cart";
import content from "./features/Content";
import navbar from "./features/Navbar";

export const store = configureStore({
	reducer: {
		navbar: navbar.reducer,
		cart: cart.reducer,
		content: content.reducer,
	},
});
