import Navbar from "../components/Navbar";
import AllDishesSection from "../components/Sections/AllDishesSection";
import "../css/DishCategory.css";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

const DishCategory = () => {
	const data = [
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
	];

	const [sortBy, setSortBy] = useState("name");
	const [order, setOrder] = useState("up");
	const [view, setView] = useState(0);
	const [newData, setNewData] = useState(
		data.sort((a, b) => (a.title < b.title ? 1 : -1))
	);

	useEffect(() => {
		if (order === "up") {
			switch (sortBy) {
				case "price":
					setNewData(newData.sort((a, b) => (a.price < b.price ? 1 : -1)));
					break;

				case "name":
					setNewData(newData.sort((a, b) => (a.title > b.title ? 1 : -1)));
					break;
			}
		} else {
			switch (sortBy) {
				case "price":
					setNewData(newData.sort((a, b) => (a.price > b.price ? 1 : -1)));
					break;

				case "name":
					setNewData(newData.sort((a, b) => (a.title < b.title ? 1 : -1)));
					break;
			}
		}
	}, [sortBy, order]);

	return (
		<div className="container-fluid p-0 dishCategory-page">
			<Navbar />
			<AllDishesSection />

			{/* Filtering Sec */}
			<div className="filtering-section container-lg py-5">
				<h3 className="display-h3">Chicken</h3>

				<div className="my-4 w-100 row gap-4 gap-md-0 align-items-center justify-content-center">
					<div className="col-12 col-md-5 col-lg-7 d-flex align-items-center gap-2">
						<ViewModuleIcon
							onClick={() => setView(0)}
							className={`p-2 fs-1 ${
								view === 0
									? "bg-danger text-light"
									: "bg-light bg-gradient text-dark"
							} rounded-5`}
						/>
						<ViewListIcon
							onClick={() => setView(1)}
							className={`me-3 p-2 fs-1 ${
								view === 1
									? "bg-danger text-light"
									: "bg-light bg-gradient text-dark"
							} rounded-5`}
						/>
						<span className="text-secondary fw-light">{data.length} Items</span>
					</div>
					<div className="col-12 col-md-7 col-lg-5 row align-items-center">
						<FormControl className="col w-100">
							<InputLabel id="sortBy">Sort by</InputLabel>
							<Select
								labelId="sortBy"
								id="sortBy"
								value={sortBy}
								label="Sort By"
								onChange={({ target }) => setSortBy(target.value)}
							>
								<MenuItem value="name" selected>
									Product Name
								</MenuItem>
								<MenuItem value="price">Price</MenuItem>
							</Select>
						</FormControl>
						<ArrowDropUpIcon
							style={{ fontSize: "2rem" }}
							className={`p-0 m-0 ms-2 ${
								order === "up" ? "text-dark" : "text-secondary"
							}`}
							onClick={() => setOrder("up")}
						/>
						<ArrowDropDownIcon
							style={{ fontSize: "2rem" }}
							className={`p-0 m-0 text-secondary ${
								order === "down" ? "text-dark" : "text-secondary"
							}`}
							onClick={() => setOrder("down")}
						/>
					</div>
				</div>

				{/* Cards */}
				{/* List view */}
				<div className="listView container-lg d-flex flex-column justify-content-center align-content-center">
					{view == 1 &&
						newData.length > 0 &&
						newData.map((dish) => (
							<div
								key={dish.id}
								className="dishCard w-100 py-5 px-0 px-md-3 row align-content-center align-items-center border-bottom border-secondary justify-content-center"
							>
								<div className="dishImg col-12 col-md-4 text-center">
									<img src={dish.img} />
								</div>
								<div className="dishContent col-12 col-md-8">
									<h3>{dish.title}</h3>
									<p className="text-secondary" style={{ maxWidth: "24rem" }}>
										{dish.desc}
									</p>
									<Button variant="text">LEARN MORE</Button>
									<h3 className="mb-3">${dish.price}</h3>
									<Button
										startIcon={<ShoppingBasketOutlinedIcon />}
										className="rounded-5"
										variant="contained"
										color="error"
									>
										ADD TO CART
									</Button>
								</div>
							</div>
						))}
				</div>
				{/* /**** List view */}

				{/* Grid View */}
				<div className="gridView my-5 py-5 container-lg row justify-content-center gap-0 gap-md-2 gap-lg-3">
					{view == 0 &&
						newData.length > 0 &&
						newData.map((dish) => (
							<div
								key={dish.id}
								className="dishCard hovered col-6 col-md-3 col-lg-2 text-center"
							>
								<img src={dish.img} width={150} alt="" />
								<h5 className="fs-6">{dish.title}</h5>
								<span className="text-secondary fs-6">${dish.price}</span>
								<div className="dishCardOnHover">
									<p>{dish.desc}</p>

									<Button
										variant="contained"
										color="error"
										className="rounded-5"
									>
										Add To Cart
									</Button>
								</div>
							</div>
						))}
				</div>
				{/* *** Grid View */}
			</div>

			<Footer />
		</div>
	);
};

export default DishCategory;
