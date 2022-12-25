import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAlert } from "../store/features/Alert";
import { addToCart } from "../store/features/Cart";

const DishCardGrid = ({ dish, category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="dishCard hovered col-6 col-md-3 col-lg-2 text-center">
      <img
        onClick={() => navigate(`/product/${category}/${dish.title}`)}
        src={dish.imgs[0]}
        width={150}
        alt=""
        className="dishCardGridImg"
      />
      <h5 className="fs-6">{dish.title}</h5>
      <span className="text-secondary fs-6">${dish.price.toString()}</span>
      <div className="dishCardOnHover">
        <p>{dish.desc}</p>

        <Button
          onClick={() => {
            dispatch(addToCart({ ...dish, qty: 1, total: dish.price }));
            dispatch(addAlert(3));
          }}
          variant="contained"
          color="error"
          className="rounded-5"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default DishCardGrid;
