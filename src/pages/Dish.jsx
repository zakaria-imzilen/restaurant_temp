import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AllDishesSection from "../components/Sections/AllDishesSection";
import "../css/Dish.css";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

const Dish = () => {
	const loc = useLocation();
	const navigate = useNavigate();

	const [cartNum, setCartNum] = useState(1);

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

	const myData = data.filter((d) => d.id == loc.pathname.slice(9));

	useEffect(() => {
		if (myData.length === 0) {
			// NEED EDIT
			navigate("/category");
		}
	}, []);

	if (myData.length > 0) {
		return (
			<div className="dishpage p-0 container-fluid">
				<Navbar />
				<AllDishesSection />

				{/* Wrapper */}
				<div className="container-lg mx-lg-auto py-3 row justify-content-center align-items-center">
					{/* Carousel */}
					<article className="col-12 col-lg-6">
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-bs-ride="true"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/d500e214958dbc08ac65dad036025b47/1/1/11_4.jpg"
										className="d-block w-100"
										alt="..."
										width={200}
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/d500e214958dbc08ac65dad036025b47/7/_/7_11.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/d500e214958dbc08ac65dad036025b47/6/_/6_1_12.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<ChevronLeftRoundedIcon color="error" fontSize="large" />
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<ChevronRightRoundedIcon color="error" fontSize="large" />

								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</article>
					{/* Dish Content */}
					<article className="col-12 col-lg-6  py-4 py-lg-0 ps-5 ps-lg-0">
						<h2>{myData[0].title}</h2>
						<span className="text-bold">${myData[0].price}</span>
						<p style={{ fontSize: ".7rem", maxWidth: "21rem" }}>
							{myData[0].desc}
						</p>
						<div className="my-5 border-top border-secondary w-100"></div>
						<h6>Qty</h6>
						<div className="row w-100 justify-content-around">
							<div className="col-5 p-2 border-secondary border rounded-5 row justify-content-between align-items-center text-center">
								<div
									className="col"
									onClick={() => cartNum !== 1 && setCartNum(cartNum - 1)}
								>
									<RemoveRoundedIcon className="p-0 m-0" color="error" />
								</div>
								<div className="col">{cartNum}</div>
								<div
									className="col"
									onClick={() => cartNum < 6 && setCartNum(cartNum + 1)}
								>
									<AddRoundedIcon className="p-0 m-0" color="primary" />
								</div>
							</div>
							<Button
								startIcon={<ShoppingBasketRoundedIcon />}
								variant="contained"
								color="error"
								className="rounded-5 col-4"
							>
								Add to cart
							</Button>
						</div>
					</article>
				</div>

				<div className="heightBlanket d-none d-lg-block"></div>

				<Footer />
			</div>
		);
	}
};

export default Dish;
