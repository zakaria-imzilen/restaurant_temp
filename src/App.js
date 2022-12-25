import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alerting from "./components/Alerting";
import CapturingUser from "./components/CapturingUser";
import Dish from "./pages/Dish";
import DishCategory from "./pages/DishCategory";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Sign from "./pages/Sign";
import { store } from "./store/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <CapturingUser />
          <Alerting />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/category/:name" element={<DishCategory />} />
            <Route path="/product/:category/:id" element={<Dish />} />
            <Route path="/sign" element={<Sign />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
