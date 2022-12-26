import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/Error404.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="errorpage position-relative">
      <div className="container-lg text-center text-light position-absolute top-50 start-50 translate-middle">
        <h1>404: Page not found</h1>
        <Button
          className="my-3"
          variant="contained"
          color="error"
          size="small"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Error404;
