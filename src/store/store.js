import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { alert } from "./features/Alert";
import cart from "./features/Cart";
import content from "./features/Content";
import navbar from "./features/Navbar";
import order from "./features/Order";
import user from "./features/user";

export const store = configureStore({
  reducer: {
    navbar: navbar.reducer,
    cart: cart.reducer,
    content: content.reducer,
    user: user.reducer,
    order: order.reducer,
    alert: alert.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
