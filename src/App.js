import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
