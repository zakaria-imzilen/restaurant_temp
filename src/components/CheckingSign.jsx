import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckingSign = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.signedIn) {
      navigate("/sign");
    }
  }, [user]);

  return "";
};

export default CheckingSign;
