import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import AllDishesSection from "../components/Sections/AllDishesSection";

const Contact = () => {
  return (
    <div className="contact-page container-fluid">
      <Navbar />
      <AllDishesSection />

      <div className="container-lg my-5">
        <h3 className="text-dark">Contact US</h3>
        <TextField id="name" label="Name" variant="standard" />
        <TextField id="email" label="Email" variant="standard" />
        <TextField id="phoneNumber" label="Phone Number" variant="standard" />
        <TextField
          id="message"
          label="Your Message"
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
        />
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
};

export default Contact;
