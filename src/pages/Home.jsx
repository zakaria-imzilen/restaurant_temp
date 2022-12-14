import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import AllDishesSection from "../components/Sections/AllDishesSection";
import ChickenBurger from "../components/Sections/ChickenBurger";
import "../css/Home.css";

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<Header />
			<AllDishesSection />
			<ChickenBurger />
			<Footer />
		</div>
	);
};

export default Home;
