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
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Footer from "../components/Footer";
import DishCardList from "../components/DishCardList";
import DishCardGrid from "../components/DishCardGrid";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DishCategory = () => {
  // const data = [
  // 	{
  // 		id: 1,
  // 		title: "Another Sample Top",
  // 		desc: "Beef Patty, Bun, All-Natural Bacon, American Cheese, Swiss Cheese, Dippin' Sauce",
  // 		price: 2.3,
  // 		img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/9d3f9ef024f4ce26174bdb3b34be3e5d/1/0/10_6.jpg",
  // 	},

  const loc = useLocation();
  const navigate = useNavigate();
  const contentCategories = useSelector((state) => state.content);
  // const [categoryName, setCategoryName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const settingUp = async () => {
      switch (loc.pathname.slice(10)) {
        case "pizzas":
          const localDataP = await contentCategories.categories[1]
            .data()
            .data.sort((a, b) => (a.title > b.title ? 1 : -1));
          setData(localDataP);
          break;
        case "burgers":
          const localDataB = await contentCategories.categories[0]
            .data()
            .data.sort((a, b) => (a.title > b.title ? 1 : -1));
          setData(localDataB);
          break;

        default:
          navigate("/");
          break;
      }
    };

    if (contentCategories.categories.length > 0) {
      settingUp();
    }
  }, [loc, contentCategories]);

  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("up");
  const [view, setView] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      if (order === "up") {
        console.log("up");
        switch (sortBy) {
          case "price":
            setData(data.sort((a, b) => (a.price < b.price ? 1 : -1)));
            break;

          case "name":
            setData(data.sort((a, b) => (a.title > b.title ? 1 : -1)));
            break;
        }
      } else {
        console.log("down");
        switch (sortBy) {
          case "price":
            setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)));
            console.log("price changing", data);
            break;

          case "name":
            setData(data.sort((a, b) => (a.title < b.title ? 1 : -1)));
            console.log("name changing", data);
            break;
        }
      }
    }
  }, [sortBy, order]);

  return (
    <div className="container-fluid p-0 dishCategory-page">
      <Navbar />
      <AllDishesSection />

      {/* Filtering Sec */}
      <div className="filtering-section container-lg py-5">
        <h3 className="display-h3">
          {loc.pathname.slice(10).slice(0, 1).toUpperCase() +
            loc.pathname.slice(10).slice(1)}
        </h3>

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
            <span className="text-secondary fw-light">
              {data && data.length} Items
            </span>
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
          {view === 1 &&
            data.length > 0 &&
            data.map((dish) => (
              <DishCardList key={dish.title} category={data.id} dish={dish} />
            ))}
        </div>
        {/* /**** List view */}

        {/* Grid View */}
        <div className="gridView my-5 py-5 container-lg row justify-content-center gap-0 gap-md-2 gap-lg-3">
          {view === 0 &&
            data.length > 0 &&
            data.map((dish) => (
              <DishCardGrid
                key={dish.title}
                category={loc.pathname.slice(10)}
                dish={dish}
              />
            ))}
        </div>
        {/* *** Grid View */}
      </div>
      <div className="heightBlanket d-none d-lg-block"></div>
      <Footer />
    </div>
  );
};

export default DishCategory;
