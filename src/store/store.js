import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/Cart";
import navbar from "./features/Navbar";

export const store = configureStore({
	reducer: {
		navbar: navbar.reducer,
		cart: cart.reducer,
	},
});
