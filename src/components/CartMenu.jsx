import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

const CartMenu = () => {
	return (
		<div className="cart-menu-item row justify-content-center align-items-center py-2 px-2 px-md-4">
			<div className="col-3">
				<img
					src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png"
					alt=""
					width={40}
					className="w-100 m-0"
				/>
			</div>
			<div className="col-3 d-flex flex-column">
				<p className="m-0 text-dark">Burger</p>
				<span className="m-0 text-secondary">x2</span>
			</div>
			<div className="col-2 d-flex justify-content-around flex-column">
				<IconButton
					aria-label="add"
					style={{ fontSize: ".8rem", padding: ".2rem" }}
				>
					<AddIcon fontSize="inherit" color="primary" />
				</IconButton>
				<IconButton
					aria-label="add"
					style={{ fontSize: ".8rem", padding: ".2rem" }}
				>
					<RemoveIcon fontSize="inherit" color="error" />
				</IconButton>
			</div>
			<div className="col-4 text-end">
				<p className="m-0">15$</p>
				<p className="m-0">Total: 30$</p>
			</div>
		</div>
	);
};

export default CartMenu;
