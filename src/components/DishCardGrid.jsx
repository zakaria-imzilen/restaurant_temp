import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DishCardGrid = ({ dish }) => {
	const navigate = useNavigate();
	console.log(dish);

	return (
		<div
			onClick={() => navigate(`/product/${dish.id}`)}
			className="dishCard hovered col-6 col-md-3 col-lg-2 text-center"
		>
			<img src={dish.img} width={150} alt="" />
			<h5 className="fs-6">{dish.title}</h5>
			<span className="text-secondary fs-6">${dish.price.toString()}</span>
			<div className="dishCardOnHover">
				<p>{dish.desc}</p>

				<Button variant="contained" color="error" className="rounded-5">
					Add To Cart
				</Button>
			</div>
		</div>
	);
};

export default DishCardGrid;
