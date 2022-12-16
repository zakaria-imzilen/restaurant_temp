import Navbar from "../components/Navbar";
import "../css/Profile.css";

const ProfilePage = () => {
	return (
		<div className="profile_page container-fluid p-0" data-aos="fade-in">
			<Navbar />
			<div className="container-fluid header-profile text-light d-flex justify-content-center align-content-center align-items-center">
				<div className="text-center">
					<h1>
						Welcome Zakaria <br /> to your profile
					</h1>
				</div>
			</div>

			<div className="row justify-content-center align-content-center align-items-center gap-3 gap-lg-4 mx-auto container-lg">
				<div className="col-10 col-lg-5 shadow-none p-3 mb-5 bg-light rounded-1">
					<h5>Your Recent orders</h5>
					<ul className="my-3 list-group list-group-flush">
						<li className="list-group-item d-flex justify-content-around align-items-center">
							<img
								src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png"
								alt=""
								width={30}
							/>
							<span>Burger Cheese</span>
							<span className="text-secondary">x2 = 16$</span>
						</li>
						<li className="list-group-item d-flex justify-content-around align-items-center">
							<img
								src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png"
								alt=""
								width={30}
							/>
							<span>Burger Beef</span>
							<span className="text-secondary">x1 = 8$</span>
						</li>
						<li className="list-group-item d-flex justify-content-around align-items-center">
							<img
								src="https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png"
								alt=""
								width={30}
							/>
							<span>Burger Salade</span>
							<span className="text-secondary">x4 = 32$</span>
						</li>
					</ul>
				</div>
				<div className="col-10 info-content col-lg-5 shadow-none p-3 mb-5 text-bg-warning rounded-1">
					<h5>Your Infos</h5>
					<div className="my-3 px-3">
						<p className="my-1">Full Name: Zakaria Imz</p>
						<p className="my-1">Email: zakaria@gmail.com</p>
						<p className="my-1">Address: AV MLY Youssef SLJ</p>
						<p className="my-1">City: SLJ</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
