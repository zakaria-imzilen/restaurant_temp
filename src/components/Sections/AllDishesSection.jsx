import { useLocation, useNavigate } from "react-router-dom";

const AllDishesSection = () => {
	const navigate = useNavigate();
	const loc = useLocation();

	return (
    <section className="py-4 px-5 allDishesSection position-sticky top-0 text-light container-fluid d-md-block">
      <div
        className={`${
          loc.pathname.includes("category")
            ? "border-top border-light pt-3"
            : ""
        } container-lg allDishesSection-content d-md-flex justify-content-center gap-lg-3`}
      >
        <div
          onClick={() => navigate("/category/pizzas")}
          className="hovered row gap-2 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
            <img
              src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/3.png"
              alt="Pizza"
            />
          </div>
          <span className="col-12">Pizza</span>
        </div>
        <div
          onClick={() => navigate("/category/burgers")}
          className="hovered row gap-2 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
            <img
              src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/4.png"
              alt="Burger"
            />
          </div>
          <span className="col-12">Burger</span>
        </div>
        <div
          onClick={() => navigate("/category/chicken")}
          className="hovered row gap-2 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
            <img
              src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/5.png"
              alt="Chicken"
            />
          </div>
          <span className="col-12">Chicken</span>
        </div>
        <div
          onClick={() => navigate("/category/tacos")}
          className="hovered row gap-2 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
            <img
              src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/6.png"
              alt="Tacos"
            />
          </div>
          <span className="col-12">Tacos</span>
        </div>
      </div>
    </section>
  );
};

export default AllDishesSection;
