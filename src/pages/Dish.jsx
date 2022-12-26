import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { addToCart } from "../store/features/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getDish } from "../store/features/Content";
import { addAlert } from "../store/features/Alert";

const Dish = () => {
  const params = useParams();
  const loc = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.content.categories);
  const dishData = useSelector((state) => state.content.dish);

  useEffect(() => {
    if (data.length > 0) {
      dispatch(getDish({ title: params.id, cat: params.category }));
    }
    // if (data.length > 0) {
    //   let num;
    //   switch (params.category) {
    //     case "burgers":
    //       num = 0;
    //       break;

    //     case "pizzas":
    //       num = 1;
    //   }

    //   setDishData(
    //     data[num]
    //       .data()
    //       .data.filter(
    //         (dish) => dish.title === decodeURI(loc.pathname.slice(17))
    //       )[0]
    //   );
    // } else {
    //   navigate(-1);
    // }
  }, [data]);

  const [cartNum, setCartNum] = useState(1);

  // const data = [
  // 	{
  // 		id: 1,
  // 		title: "Another Sample Top",
  // 		desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
  // 		price: 2.3,
  // 		img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
  // 	},
  // 	{
  // 		id: 2,
  // 		title: "The Net in",
  // 		desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
  // 		price: 1.3,
  // 		img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/9/_/9_7.jpg",
  // 	},
  // 	{
  // 		id: 3,
  // 		title: "Quisque neque",
  // 		desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
  // 		price: 3.5,
  // 		img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/1/11_1.png",
  // 	},
  // 	{
  // 		id: 4,
  // 		title: "Monada",
  // 		desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
  // 		price: 1.2,
  // 		img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
  // 	},
  // ];

  //   const myData = data.filter((d) => d.id === loc.pathname.slice(9));

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
                  src={dishData?.imgs[0]}
                  className="d-block w-100"
                  alt="..."
                  width={200}
                />
              </div>
              {dishData?.imgs.map((img) => (
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
              ))}
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
          <h2>{dishData?.title}</h2>
          <span className="text-bold">${dishData?.price}</span>
          <p style={{ fontSize: ".7rem", maxWidth: "21rem" }}>
            {dishData?.desc}
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
              onClick={() => {
                dispatch(addToCart({ ...data[0], qty: cartNum }));
                dishData(addAlert(3));
              }}
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
};

export default Dish;
