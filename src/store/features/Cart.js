import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const itemFound = state.data.filter(
        (dish) => dish.title === payload.title
      );
      // Second,.. time
      if (itemFound.length > 0) {
        state.data = [
          ...state.data.filter((dish) => dish.title !== payload.title),
          {
            ...payload,
            qty:
              itemFound[0].qty + (payload.qty !== undefined ? payload.qty : 1),
            total: parseFloat(
              itemFound[0].total + parseFloat(payload.qty * itemFound[0].price)
            ),
          },
        ];
        state.total += parseFloat(
          parseFloat((payload.qty * itemFound[0].price).toFixed(2))
        );
      } else {
        // First time
        state.data.push({
          ...payload,
          total: parseFloat(payload.price * (payload.qty || 1)),
        });
        state.total += parseFloat(payload.price * (payload.qty || 1));
      }
    },
    removeFromCart: (state, { payload }) => {
      // item is here
      const itemFound = state.data.filter((dish) => dish.title === payload);

      state.total -= parseFloat(itemFound[0].price);

      // Remove the whole item
      if (itemFound[0].qty === 1) {
        state.data = state.data.filter((dish) => dish.title !== payload);
      } else {
        // Decrease qty
        state.data = [
          ...state.data.filter((dish) => dish.title !== payload),
          {
            ...itemFound[0],
            qty: itemFound[0].qty - 1,
            total: parseFloat(itemFound[0].total - itemFound[0].price),
          },
        ];
      }
    },
    resetCart: (state) => {
      state.data = [];
      state.total = 0;
    },
  },
});

export default cart;
export const { addToCart, removeFromCart, resetCart } = cart.actions;
