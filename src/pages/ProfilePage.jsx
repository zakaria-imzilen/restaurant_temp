import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckingSign from "../components/CheckingSign";
import Navbar from "../components/Navbar";
import { auth } from "../config/fbconfig";
import "../css/Profile.css";
import { myOrders } from "../store/features/Order";
import { signIn } from "../store/features/user";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);

  const [checkNow, setCheckNow] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          signIn({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        dispatch(myOrders(user.uid));
        setCheckNow(true);
      } else {
        navigate(-2);
      }
    });
  }, []);

  //   const data = {
  //     name: "Zakaria",
  //     orders: [
  //       {
  //         id: 1,
  //         title: "Burger Cheese",
  //         qty: 2,
  //         price: 16,
  //         img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png",
  //       },
  //       {
  //         id: 2,
  //         title: "Burger Cheese",
  //         qty: 1,
  //         price: 8,
  //         img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png",
  //       },
  //       {
  //         id: 3,
  //         title: "Burger Cheese",
  //         qty: 4,
  //         price: 24,
  //         img: "https://m2.alothemes.com/pizzaro/media/catalog/product/cache/2a7987c13a346cdbe055af26c7fc6478/2/_/2_2.png",
  //       },
  //     ],
  //     info: {
  //       fullName: "Zakaria Imzilen",
  //       email: "zakaria@gmail.com",
  //       address: "AV MLY Youssef SLJ",
  //       city: "SLJ",
  //     },
  //   };

  return (
    <div className="profile_page container-fluid p-0" data-aos="fade-in">
      {checkNow && <CheckingSign />}

      <Navbar />
      <div className="container-fluid header-profile text-light d-flex justify-content-center align-content-center align-items-center">
        <div className="text-center">
          <h1>
            Welcome {user.signedIn && user.credentials.displayName}
            <br /> to your profile
          </h1>
        </div>
      </div>

      <div className="row justify-content-center align-content-center align-items-center gap-3 gap-lg-4 mx-auto container-lg">
        <div className="col-10 col-lg-5 shadow-none p-3 mb-5 bg-light rounded-1">
          <h5>Your Recent orders</h5>
          <ul className="my-3 list-group list-group-flush">
            {order.gettingMyOrders !== "pending" &&
              console.log(order.gettingMyOrders)}
            {user.signedIn &&
              typeof order.gettingMyOrders === "object" &&
              order.gettingMyOrders.map((order) => (
                <li
                  key={order.id}
                  className="list-group-item d-flex justify-content-around align-items-center"
                >
                  <img
                    src={order.order[0].img}
                    alt={order.order[0].title}
                    width={30}
                  />
                  <span>{order.order[0].title}</span>
                  <span className="text-secondary">
                    x{order.order[0].qty} = {order.order[0].price}$
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-10 info-content col-lg-5 shadow-none p-3 mb-5 text-bg-warning rounded-1">
          <h5>Your Infos</h5>
          <div className="my-3 px-3">
            <p className="my-1">
              Full Name: {user.signedIn && user.credentials.displayName}
            </p>
            <p className="my-1">
              Email: {user.signedIn && user.credentials.email}
            </p>
            {/* <p className="my-1">Address: {data.info.address}</p>
            <p className="my-1">City: {data.info.city}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
