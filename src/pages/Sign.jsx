import {
  EmailAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/fbconfig";
import { signIn } from "../store/features/user";

const Sign = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/profile",
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
    ],
  };

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
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center fs-4 mb-5">
        You can register/sign in your account the easiest way
      </h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth}
      ></StyledFirebaseAuth>
    </div>
  );
};

export default Sign;
