import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer = () => {
	return (
		<footer className="container-fluid py-5 text-light">
			<div className="row footer-content gap-5 gap-lg-0 justify-content-center align-items-center">
				<div className="col-12 col-lg-4 text-center">
					<img
						src="https://m2.alothemes.com/pizzaro/media/logo/stores/4/logo.png"
						alt="Logo"
					/>
					<div className="my-5 row gap-2 justify-content-center">
						<div className="col-5 text-start">
							<p className="my-0">Monday - Thursday</p>
							<p className="my-0">Friday - Saturday</p>
							<p className="my-0">Sunday</p>
						</div>
						<div className="col-5 text-end">
							<p className="my-0">11:00 - 21:00</p>
							<p className="my-0">11:30 - 22:00</p>
							<p className="my-0">12:00 - 20:00</p>
						</div>
					</div>
					<div className="row gap-1 justify-content-around">
						<h6 className="col-5">Follow us</h6>
						<div className="col-5">
							<FacebookIcon className="mx-1" />
							<InstagramIcon className="mx-1" />
							<TwitterIcon className="mx-1" />
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4 text-dark form py-4 px-5 px-lg-4 bg-light rounded-1">
					<h2>Contact Us</h2>
					<TextField
						className="w-100"
						id="name"
						label="name"
						variant="standard"
					/>
					<TextField
						className="w-100"
						id="email"
						label="email"
						variant="standard"
					/>
					<textarea
						className="form-control w-100 my-4"
						name="message"
						id="message"
						rows="3"
						placeholder="What's on your mind ?"
					></textarea>
					<Button className="w-100 rounded-5" color="error" variant="contained">
						SEND
					</Button>
				</div>
				<div className="col-12 contact-info-wrapper col-lg-4 row gap-2 justify-content-center">
					<div className="col-2 row flex-nowrap flex-column gap-3">
						<div className="col-1">
							<LocationOnIcon color="action" />
						</div>
						<div className="col-1">
							<LocalPhoneIcon color="action" />
						</div>
						<div className="col-1">
							<AlternateEmailIcon color="action" />
						</div>
					</div>
					<div className="col-9 row gap-3">
						<p className="row m-0">
							01-947 South Drive, Houston, TX 77057, United Kingdom
						</p>
						<p className="row m-0">+1 555 125 9455, +42 548 78 983</p>
						<p className="row m-0">suport@alothemes.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
