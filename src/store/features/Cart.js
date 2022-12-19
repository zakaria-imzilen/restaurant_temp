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
							parseFloat(payload.qty * payload.price),
					},
				];
				state.total += parseFloat(payload.qty * payload.price);
			} else {
				state.data.push({
					...payload,
					qty: payload.qty !== undefined ? payload.qty : 1,
					total: payload.price * (payload.qty || 1),
				});
				state.total += payload.price * (payload.qty || 1);
			}
		},
		removeFromCart: (state, { payload }) => {
			if (state.data.filter((dish) => dish.id === payload)[0].qty === 1) {
				state.data = state.data.filter((dish) => dish.id !== payload);
			} else {
				state.data = [
					...state.data.filter((dish) => dish.id !== payload),
					{
						...state.data.filter((dish) => dish.id === payload)[0],
						qty: state.data.filter((dish) => dish.id === payload)[0].qty - 1,
						total:
							state.data.filter((dish) => dish.id === payload)[0].total -
							state.data.filter((dish) => dish.id === payload)[0].price,
					},
				];
			}
			state.total -= state.data.filter((dish) => dish.id === payload)[0].price;
		},
	},
});

export default cart;
export const { addToCart, removeFromCart } = cart.actions;
