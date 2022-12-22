import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.data.filter((dish) => dish.id === payload.id).length > 0) {
        state.data = [
          ...state.data.filter((dish) => dish.id !== payload.id),
          {
            ...payload,
            qty:
              state.data.filter((dish) => dish.id === payload.id)[0].qty +
              (payload.qty !== undefined ? payload.qty : 1),
            total:
              state.data.filter((dish) => dish.id === payload.id)[0].total +
              (payload.qty * payload.price).toFixed(2),
          },
        ];
        state.total += (payload.qty * payload.price).toFixed(2);
      } else {
        state.data.push({
          ...payload,
          qty: payload.qty !== undefined ? payload.qty : 1,
          total: (payload.price * (payload.qty || 1)).toFixed(2),
        });
        state.total += (payload.price * (payload.qty || 1)).toFixed(2);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.total -= state.data
        .filter((dish) => dish.id == payload)[0]
        .price.toFixed(2);

      if (state.data.filter((dish) => dish.id == payload)[0].qty == 1) {
        state.data = state.data.filter((dish) => dish.id != payload);
      } else {
        state.data = [
          ...state.data.filter((dish) => dish.id !== payload),
          {
            ...state.data.filter((dish) => dish.id == payload)[0],
            qty: state.data.filter((dish) => dish.id == payload)[0].qty - 1,
            total: (
              state.data.filter((dish) => dish.id == payload)[0].total -
              state.data.filter((dish) => dish.id == payload)[0].price
            ).toFixed(2),
          },
        ];
      }
    },
  },
});

export default cart;
export const { addToCart, removeFromCart } = cart.actions;
