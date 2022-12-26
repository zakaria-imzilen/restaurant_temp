import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/fbconfig";

export const sendMessageDB = createAsyncThunk(
  "sendMessageDB",
  async (thunkAPI) => {
    const { id } = await addDoc(collection(db, "messages"), thunkAPI);

    return id;
  }
);

const contact = createSlice({
  name: "contact",
  initialState: {
    sent: null,
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessageDB.pending, (state) => {
      state.sent = "pending";
    });
    builder.addCase(sendMessageDB.rejected, (state, { error }) => {
      state.sent = error.name + error.message;
    });
    builder.addCase(sendMessageDB.fulfilled, (state) => {
      state.sent = true;
    });
  },
});

export default contact;
