import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DishCategory from "./pages/DishCategory";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import { store } from "./store/store";

function App() {
	return (
		<div className="app">
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/category" element={<DishCategory />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
