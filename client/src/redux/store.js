import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from "./feedbackSlice/feedbackSlice";
import menuSlice from "./menuSlice/menuSlice";
import reservationDateSlice from "./reservationDateSlice.js/reservationDateSlice";
import reservationSlice from "./reservationSlice/reservationSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    reservation: reservationSlice,
    reservationDate: reservationDateSlice,

    feedback: feedbackSlice,
  },
});
