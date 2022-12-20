import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, MenuItem, MenuList } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Dialog, ListItemText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/features/Navbar";
import { useEffect, useState } from "react";
import CartMenu from "./CartMenu";
import { Cancel } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/fbconfig";
import { signingOut } from "../store/features/user";
import { ordering } from "../store/features/Order";

const Navbar = () => {
  const navbarRed = useSelector((state) => state.navbar);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartDishes = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const loc = useLocation();

  const [cartMenu, setCartMenu] = useState(false);

  useEffect(() => {
    if (cartDishes.data.length === 0) {
      setCartMenu(false);
    }
  }, [cartDishes]);

  return (
    <nav className="container-fluid py-3 p-lg-4">
      <div className="container mx-auto row gap-5 gap-lg-0 justify-content-center align-items-center">
        <div className="col-12 col-lg-4 d-flex gap-3 justify-content-start text-center">
          {!loc.pathname.includes("profile") && user.signedIn && (
            <PersonIcon
              style={{ color: "white" }}
              onClick={() => navigate("/profile")}
            />
          )}
          <span
            className="hovered text-light d-none d-lg-block"
            onClick={() => navigate("/about")}
          >
            About
          </span>
          <span
            className="hovered text-light d-none d-lg-block"
            onClick={() => navigate("/contact")}
          >
            Contact US
          </span>
        </div>
        <div
          className="col-12 col-lg-4 text-center"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://m2.alothemes.com/pizzaro/media/logo/stores/4/logo.png"
            alt=""
          />
        </div>
        <div className="col-12 d-flex justify-content-end align-items-center gap-5 col-lg-4 text-center">
          <Badge
            badgeContent={cartDishes?.data.length}
            color="error"
            overlap="rectangular"
            className="orderIcon position-relative"
            onClick={() => setCartMenu(true)}
          >
            <ShoppingCartIcon fontSize="large" style={{ color: "white" }} />
          </Badge>
          {user.signedIn && (
            <span
              className="hovered rounded-2 text-bg-danger p-2 d-none d-lg-block"
              onClick={() => {
                dispatch(signingOut());
                signOut(auth);
              }}
            >
              Sign out
            </span>
          )}

          <Dialog onClose={() => setCartMenu(false)} open={cartMenu}>
            <div
              className="py-4 cart-menu rounded-2 container col bg-light position-relative"
              style={{ zIndex: 12 }}
            >
              {/* Dishes */}
              {cartDishes?.data.map((dish) => {
                return <CartMenu key={dish.id} dish={dish} />;
              })}

              {/* Total */}
              <div className="text-end my-3">Total: ${cartDishes?.total}</div>

              {user.signedIn ? (
                <Button
                  onClick={() => {
                    dispatch(
                      ordering({
                        order: cart.data,
                        total: cart.total,
                        uid: user.credentials.uid,
                        timestamp: new Date().getDate(),
                      })
                    );
                    navigate("/profile");
                  }}
                  className="rounded-5"
                  variant="contained"
                  color="error"
                >
                  Process to ordering
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/sign")}
                  className="rounded-2"
                  variant="outlined"
                  color="error"
                >
                  Sign in first
                </Button>
              )}
              <Cancel
                className="position-absolute top-0 end-0 mt-2 me-2"
                style={{ zIndex: 13 }}
                color="error"
                onClick={() => setCartMenu(false)}
              />
            </div>
          </Dialog>
          <MenuRoundedIcon
            className="d-lg-none pe-auto menu-toggler"
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => dispatch(toggleMenu())}
          />
          {/* Menu (only in mobile screen */}
          <div
            style={{
              transform: !navbarRed.menu ? "scale(0)" : "scale(1)",
            }}
            className="menu-mobile bg-danger position-absolute top-0 start-0 d-flex align-content-center justify-content-center align-items-center"
            data-aos="zoom-in-up"
          >
            <Paper
              sx={{
                color: "white",
                borderRadius: "none",
                height: "max-content",
              }}
              className="bg-danger menu-mobile-content"
              style={{ boxShadow: "none" }}
            >
              {/* Close Menu btn */}
              <CancelIcon
                onClick={() => dispatch(toggleMenu())}
                className="position-absolute menu-toggler top-0 end-0 m-5 fs-1"
              />
              <MenuList>
                <MenuItem>
                  <ListItemText className="w-100 text-center">
                    {!user.signedIn && (
                      <Typography
                        fontSize={46}
                        onClick={() => navigate("/sign")}
                      >
                        Sign in/up
                      </Typography>
                    )}
                  </ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText className="w-100 text-center">
                    <Typography
                      fontSize={46}
                      onClick={() => navigate("/about")}
                    >
                      About
                    </Typography>
                  </ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText className="w-100 text-center">
                    <Typography
                      fontSize={46}
                      onClick={() => navigate("/contact")}
                    >
                      Contact
                    </Typography>
                  </ListItemText>
                </MenuItem>
                {user.signedIn && (
                  <MenuItem>
                    <ListItemText className="w-100 text-center">
                      <Typography
                        fontSize={35}
                        onClick={() => {
                          dispatch(signingOut());
                          signOut(auth);
                        }}
                      >
                        Sign out
                      </Typography>
                    </ListItemText>
                  </MenuItem>
                )}
              </MenuList>
            </Paper>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
