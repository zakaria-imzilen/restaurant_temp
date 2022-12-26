import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../store/features/Alert";

const Alerting = () => {
  const alerts = useSelector((state) => state.alert.alerts);
  const dispatch = useDispatch();

  useEffect(() => {
    alerts.map((al) => {
      setTimeout(() => {
        dispatch(removeAlert(al.id));
      }, 4000);
    });
  }, [alerts.length]);

  if (alerts.length > 0) {
    return (
      <div
        style={{ backgroundColor: "transparent !important", zIndex: 40 }}
        className="container-lg row gap-2 position-sticky top-0 m-auto bg-opacity-0"
      >
        {alerts.map((al) => (
          <Alert key={al.id} className="mx-auto col-12" severity={al.color}>
            {al.text}
          </Alert>
        ))}
      </div>
    );
  } else {
    return "";
  }
};

export default Alerting;
