import { createSlice } from "@reduxjs/toolkit";

export const alert = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    addAlert: ({ alerts }, { payload }) => {
      // alerts[items]: {id, text, color}
      // payload = id
      let text;
      let color;

      switch (payload) {
        case 0:
          // id = 0  ---> Logged successfuly
          text = "Logged successfuly ✅";
          color = "success";
          break;
        case 1:
          // id = 1  ---> Signed Out successfuly
          text = "Signed out";
          color = "action";
          break;
        case 2:
          // id = 2  ---> Order saved successfuly
          text =
            "Order is saved! We will contact you in the next 30 minutes to deliver your order 🚚";
          color = "success";
          break;
        case 3:
          // id = 3  ---> Added to Cart successfuly
          text = "Added to cart ✅";
          color = "success";
          break;
        case 4:
          // id = 4  ---> Totally removed from Cart
          text = "Removed from cart ❌";
          color = "error";
          break;
        case 5:
          // id = 5  ---> Mistake found on Contact us
          text = "Mistakes found on inputs";
          color = "error";
          break;
        case 6:
          // id = 6  ---> Message sent
          text = "Message sent successfuly";
          color = "success";
          break;
        case 7:
          // id = 7  ---> Message not sent
          text = "Message not sent. Try again !";
          color = "error";
          break;
      }

      alerts.push({ id: payload, text, color });
    },
    removeAlert: ({ alerts }) => {
      alerts.shift();
    },
  },
});

export const { addAlert, removeAlert } = alert.actions;
