import PersonIcon from "@material-ui/icons/Person";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Badge, MenuItem, MenuList } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Paper from "@mui/material/Paper";
// import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/features/Navbar";

const Navbar = () => {
	const navbarRed = useSelector((state) => state.navbar);
	const dispatch = useDispatch();

	return (
		<nav className="container-fluid py-3 p-lg-4">
			<div className="container mx-auto row gap-5 gap-lg-0 justify-content-center align-items-center">
				<div className="col-12 col-lg-4 d-flex gap-3 justify-content-start text-center">
					<PersonIcon style={{ color: "white" }} />
					<span className="text-light d-none d-lg-block">About</span>
					<span className="text-light d-none d-lg-block">Cart</span>
					<span className="text-light d-none d-lg-block">Contact US</span>
				</div>
				<div className="col-12 col-lg-4 text-center">
					<img
						src="https://m2.alothemes.com/pizzaro/media/logo/stores/4/logo.png"
						alt=""
					/>
				</div>
				<div className="col-12 d-flex justify-content-end align-items-center gap-5 col-lg-4 text-center">
					<Badge badgeContent={4} color="error" overlap="rectangular">
						<LocalShippingIcon fontSize="large" style={{ color: "white" }} />
					</Badge>
					<MenuRoundedIcon
						className="d-lg-none pe-auto menu-toggler"
						fontSize="large"
						style={{ color: "white" }}
						onClick={() => dispatch(toggleMenu())}
					/>
					<span className="text-light">Sign In</span>
					{/* Menu (only in mobile screen */}
					<div
						style={{
							transform: !navbarRed.menu ? "scale(0)" : "scale(1)",
						}}
						className="menu-mobile bg-danger position-absolute top-0 start-0 d-flex align-content-center justify-content-center align-items-center"
						data-aos="zoom-in-up"
					>
						<Paper
							sx={{
								color: "white",
								borderRadius: "none",
								height: "max-content",
							}}
							className="bg-danger menu-mobile-content"
							style={{ boxShadow: "none" }}
						>
							{/* Close Menu btn */}
							<CancelIcon
								onClick={() => dispatch(toggleMenu())}
								className="position-absolute menu-toggler top-0 end-0 m-5 fs-1"
							/>
							<MenuList>
								<MenuItem>
									<ListItemText className="w-100 text-center">
										<Typography fontSize={46}>Cart</Typography>
									</ListItemText>
								</MenuItem>
								<MenuItem>
									<ListItemText className="w-100 text-center">
										<Typography fontSize={46}>About</Typography>
									</ListItemText>
								</MenuItem>
								<MenuItem>
									<ListItemText className="w-100 text-center">
										<Typography fontSize={46}>Contact</Typography>
									</ListItemText>
								</MenuItem>
							</MenuList>
						</Paper>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
