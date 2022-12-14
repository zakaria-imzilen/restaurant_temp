import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

const ChickenBurger = () => {
	return (
		<div className="chickenBurger container-fluid py-5">
			<div className="py-5 chickenBurger-content container row gap-3 text-center justify-content-start">
				<div className="col-12">
					<div className="titles">
						<h5 className="fw-light fs-3">THE ORIGINAL</h5>
						<h1 className="mb-0">
							CHIKEN
							<br />
							<span className="fs-1">BURGER</span>
						</h1>
						<h4 className="text-danger">NATOQUE MAGISON</h4>
					</div>
				</div>
				<div className="col-12">
					<p>
						Donec aliquet tempor, rhoncus vulputate <br />
						metus interdu dignisir eleifend consect.
					</p>
				</div>
				<div className="col-12 row">
					<div className="col-12">
						<h5>
							5.00$ <s className="text-secondary">7.00$</s>
						</h5>
					</div>
					<div className="col-12">
						<p>
							<span className="text-danger">51</span>
							<span className="fw-bold">Days</span>
							<span className="text-danger">11</span>
							<span className="fw-bold">Hrs</span>
							<span className="text-danger">41</span>
							<span className="fw-bold">Min</span>
							<span className="text-danger">45</span>
							<span className="fw-bold">Sec</span>
						</p>
					</div>
				</div>
				<div className="col-12">
					<Button
						variant="contained"
						color="error"
						startIcon={<ShoppingCartIcon />}
					>
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChickenBurger;
