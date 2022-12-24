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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import UnpublishedRoundedIcon from "@mui/icons-material/UnpublishedRounded";

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

      <div className="row justify-content-center align-content-center align-items-start gap-3 gap-lg-4 mx-auto container-lg">
        <div className="col-10 col-lg-7 col-xl-6 shadow-none p-3 mb-5 bg-light rounded-1">
          <h5>Your Recent orders</h5>
          <ul className="my-3 list-group list-group-flush">
            {user.signedIn &&
              typeof order.gettingMyOrders === "object" &&
              order.gettingMyOrders.map((orders) => (
                <li
                  key={orders.id}
                  className="m-0 py-3 list-group-item d-flex flex-column gap-2 justify-content-between align-items-end"
                >
                  {orders.order.map((order) => (
                    <article
                      key={`${order.title}${order.qty}`}
                      className="m-0 w-100 row justify-content-around align-items-center"
                    >
                      <img
                        className="col-2"
                        src={order.imgs[0]}
                        alt={order.title}
                        // width={30}
                      />
                      <span className="col-3">{order.title}</span>
                      <span
                        className="text-secondary col-3"
                        // style={{ fontSize: ".62rem" }}
                      >
                        ${order.price}x{order.qty}
                      </span>
                      {orders.status ? (
                        <CheckCircleRoundedIcon
                          color="success"
                          style={{ fontSize: "3.1rem" }}
                          className="col-2"
                        />
                      ) : (
                        <UnpublishedRoundedIcon
                          color="error"
                          style={{ fontSize: "3.1rem" }}
                          className="col-2"
                        />
                      )}
                    </article>
                  ))}
                  <span className="text-end text-secondary">
                    Total: ${orders.total.toFixed(2)}
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
