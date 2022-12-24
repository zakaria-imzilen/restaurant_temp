import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/features/Cart";

const CartMenu = ({ dish }) => {
	const dispatch = useDispatch();

	return (
    <div className="cart-menu-item row justify-content-center align-items-center py-2 px-2 px-md-4">
      <div className="col-3">
        <img src={dish.imgs[0]} alt="" width={40} className="w-100 m-0" />
      </div>
      <div className="col-3 d-flex flex-column">
        <p className="m-0 text-dark">{dish.title}</p>
        <span className="m-0 text-secondary">x{dish.qty}</span>
      </div>
      <div className="col-2 d-flex justify-content-around flex-column">
        <IconButton
          aria-label="add"
          style={{ fontSize: ".8rem", padding: ".2rem" }}
          onClick={() => dispatch(addToCart({ ...dish, qty: 1 }))}
        >
          <AddIcon fontSize="inherit" color="primary" />
        </IconButton>
        <IconButton
          aria-label="add"
          style={{ fontSize: ".8rem", padding: ".2rem" }}
          onClick={() => dispatch(removeFromCart(dish.title))}
        >
          <RemoveIcon fontSize="inherit" color="error" />
        </IconButton>
      </div>
      <div className="col-4 text-end">
        <p className="m-0">{dish.price}$</p>
        <p className="m-0">Total: {dish.total}$</p>
      </div>
    </div>
  );
};

export default CartMenu;
