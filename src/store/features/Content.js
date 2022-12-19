import { createSlice } from "@reduxjs/toolkit";

const content = createSlice({
	name: "content",
	initialState: {
		categories: [
			{
				categoryName: "burgers",
				dishes: [
					{
						id: 1,
						title: "Another Sample Top",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 2.3,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
					},
					{
						id: 2,
						title: "The Net in",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 1.3,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/9/_/9_7.jpg",
					},
					{
						id: 3,
						title: "Quisque neque",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 3.5,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/1/11_1.png",
					},
				],
			},
			{
				categoryName: "pizzas",
				dishes: [
					{
						id: 1,
						title: "Another Sample Top",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 2.3,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
					},
					{
						id: 2,
						title: "The Net in",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 1.3,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/9/_/9_7.jpg",
					},
					{
						id: 3,
						title: "Quisque neque",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 3.5,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/1/11_1.png",
					},
					{
						id: 4,
						title: "Monada",
						desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
						price: 1.2,
						img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
					},
				],
			},
		],
	},
});

export default content;
