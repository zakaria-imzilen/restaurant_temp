import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/fbconfig";

// export const insertContent = createAsyncThunk("insertContent", async () => {
//   await setDoc(doc(db, "content", "burgers"), {
//     data: [
//       {
//         title: "Country Burger",
//         price: 8.9,
//         desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
//         imgs: [
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/d500e214958dbc08ac65dad036025b47/2/_/2_2.png",
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/d500e214958dbc08ac65dad036025b47/3/_/3_1_16.jpg",
//         ],
//       },
//       {
//         title: "Mushroom Burger",
//         price: 2.9,
//         desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
//         imgs: [
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/4/_/4_2.png",
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/5/_/5_1_16.jpg",
//         ],
//       },
//       {
//         title: "Cheese Butter Burger",
//         price: 9.9,
//         desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
//         imgs: [
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/7/_/7_17.jpg",
//           "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/8/_/8_14.jpg",
//         ],
//       },
//     ],
//   });
// });

export const getContent = createAsyncThunk("getContent", async () => {
  const queryName = query(collection(db, "content"));
  const snapShot = await getDocs(queryName);

  return snapShot.docs;
});

const content = createSlice({
  name: "content",
  initialState: {
    categories: [],
    dish: null,
  },
  reducers: {
    getDish: (state, { title, cat }) => {
      if (cat === "burgers") {
        state.dish = state.categories[0]
          .data()
          .data.filter((dish) => dish.title === title);
      } else if (cat === "pizzas") {
        state.dish = state.categories[1]
          .data()
          .data.filter((dish) => dish.title === title);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContent.fulfilled, ({ categories }, { payload }) => {
      categories.push(...payload);
    });
    builder.addCase(getContent.pending, ({ categories }) => {
      categories = "pending";
    });
    builder.addCase(getContent.rejected, ({ categories }) => {
      categories = false;
    });
  },
});

export default content;
export const { getDish } = content.actions;
