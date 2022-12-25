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
      <div className="container-lg row gap-2 position-absolute top-0 start-50 translate-middle-x bg-transparent">
        {alerts.map((al) => (
          <Alert className="mx-auto col-12" severity={al.color}>
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
