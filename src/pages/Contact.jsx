import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import AllDishesSection from "../components/Sections/AllDishesSection";
import { addAlert } from "../store/features/Alert";
import { sendMessageDB } from "../store/features/Contact";

const Contact = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const contact = useSelector((state) => state.contact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messRef = useRef(null);

  const submitSend = async () => {
    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.length < 4) {
      nameRef.current.classList.add("border", "border-danger");
    } else if (!emailRgx.test(email)) {
      emailRef.current.classList.add("border", "border-danger");
    } else if (mess.length < 6) {
      messRef.current.classList.add("border", "border-danger");
    } else {
      nameRef.current.classList.remove("border", "border-danger");
      emailRef.current.classList.remove("border", "border-danger");
      messRef.current.classList.remove("border", "border-danger");

      if (user.signedIn) {
        await dispatch(
          sendMessageDB({ name, email, mess, user: user.credentials.uid })
        );
      } else {
        await dispatch(sendMessageDB({ name, email, mess }));
      }
    }
  };

  // Alerting $hit
  useEffect(() => {
    if (contact.sent !== null) {
      if (contact.sent === true) {
        dispatch(addAlert(6));
        setName("");
        setEmail("");
        setMess("");
      } else if (contact.sent !== "pending") {
        dispatch(addAlert(7));
      }
    }
  }, [contact]);

  return (
    <div className="contact-page container-fluid">
      <Navbar />
      <AllDishesSection />

      <div className="container-lg mt-5 text-light">
        <h3>Contact US</h3>
        <div className="mt-4 container w-75 w-lg-50 d-flex flex-column gap-3 justify-content-center">
          <TextField
            color="warning"
            id="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={({ target }) => setName(target.value)}
            ref={nameRef}
          />
          <TextField
            color="warning"
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            ref={emailRef}
          />
          <TextField
            color="warning"
            id="message"
            label="Your Message"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            value={mess}
            onChange={({ target }) => setMess(target.value)}
            ref={messRef}
          />
          <Button
            onClick={submitSend}
            className="my-4"
            color="warning"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
