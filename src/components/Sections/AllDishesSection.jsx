const AllDishesSection = () => {
	return (
		<section className="py-4 px-5 allDishesSection position-sticky top-0 text-light container-fluid d-none d-md-block">
			<div className="container allDishesSection-content d-md-flex justify-content-center gap-lg-3">
				<div className="row gap-2 align-items-center justify-content-center text-center">
					<div className="col-12">
						<img
							src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/3.png"
							alt="Pizza"
						/>
					</div>
					<span className="col-12">Pizza</span>
				</div>
				<div className="row gap-2 align-items-center justify-content-center text-center">
					<div className="col-12">
						<img
							src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/4.png"
							alt="Burger"
						/>
					</div>
					<span className="col-12">Burger</span>
				</div>
				<div className="row gap-2 align-items-center justify-content-center text-center">
					<div className="col-12">
						<img
							src="https://m2.alothemes.com/pizzaro/media/magiccart/magicmenu/thumbnail/5.png"
							alt="Chicken"
						/>
					</div>
					<span className="col-12">Chicken</span>
				</div>
				<div className="row gap-2 align-items-center justify-content-center text-center">
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
