import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DishCard = ({ dish }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${dish.id}`)}
      className="dishCard hovered w-100 py-5 px-0 px-md-3 row align-content-center align-items-center border-bottom border-secondary justify-content-center"
    >
      <div className="dishImg col-12 col-md-4 text-center">
        <img src={dish.img} />
      </div>
      <div className="dishContent col-12 col-md-8">
        <h3>{dish.title}</h3>
        <p className="text-secondary" style={{ maxWidth: "24rem" }}>
          {dish.desc}
        </p>
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
  );
};

export default DishCard;
