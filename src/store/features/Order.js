import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/fbconfig";

export const ordering = createAsyncThunk("ordering", async (orderDetails) => {
  const res = await addDoc(collection(db, "orders"), orderDetails);
  return res;
});

export const myOrders = createAsyncThunk("myOrders", async (uid) => {
  const queryName = query(collection(db, "orders"), where("uid", "==", uid));
  const snapShot = await getDocs(queryName);
  const data = [];

  snapShot.docs.map((doc) => data.push({ ...doc.data(), id: doc.id }));
  return data;
});

const order = createSlice({
  name: "order",
  initialState: {
    details: null,
    gettingMyOrders: null,
  },
  extraReducers: (builder) => {
    // My ORDERS
    builder.addCase(myOrders.pending, (state) => {
      state.gettingMyOrders = "pending";
    });
    builder.addCase(myOrders.rejected, (state, { payload }) => {
      state.gettingMyOrders = payload;
    });
    builder.addCase(myOrders.fulfilled, (state, { payload }) => {
      state.gettingMyOrders = payload;
    });
  },
});

export default order;
