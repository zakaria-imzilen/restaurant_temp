import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/fbconfig";
import { addAlert } from "../store/features/Alert";
import { signIn } from "../store/features/user";

const CapturingUser = () => {
  const dispatch = useDispatch();

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
        dispatch(addAlert(0));
      }
    });
  }, []);

  return "";
};

export default CapturingUser;
