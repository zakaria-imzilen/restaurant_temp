import PersonIcon from "@material-ui/icons/Person";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Badge } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Navbar = () => {
  return (
    <nav className="container-fluid py-3 p-lg-4">
      <div className="container mx-auto row gap-5 gap-lg-0 justify-content-center align-items-center">
        <div className="col-12 col-lg-4 d-flex gap-3 justify-content-start text-center">
          <PersonIcon style={{ color: "white" }} />
          <span className="text-light d-none d-lg-block">About</span>
          <span className="text-light d-none d-lg-block">Contact US</span>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <img
            src="https://m2.alothemes.com/pizzaro/media/logo/stores/4/logo.png"
            alt=""
          />
        </div>
        <div className="col-12 d-flex justify-content-end align-items-center gap-5 col-lg-4 text-center">
          <Badge badgeContent={4} color="error">
            <LocalShippingIcon fontSize="large" style={{ color: "white" }} />
          </Badge>
          <MenuRoundedIcon
            className="d-lg-none"
            fontSize="large"
            style={{ color: "white" }}
          />
          <span className="text-light">Sign In</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
