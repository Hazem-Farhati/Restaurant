import logo from "./logo.svg";
import "./App.css";
import Register from "./component/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userCurrent } from "./redux/userSlice/userSlice";
import Profile from "./component/Profile";
import PrivateRoute from "./routes/PrivateRoutes";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Menu from "./pages/Menu";
import { getMenu } from "./redux/menuSlice/menuSlice";
import Contact from "./pages/Contact";
import { getReservation } from "./redux/reservationSlice/reservationSlice";
import Feedback from "./component/Feedback";
import { getFeedback } from "./redux/feedbackSlice/feedbackSlice";

function App() {
  const location = useLocation();
  const isAuth = localStorage.getItem("token");

  const [ping, setPing] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
      dispatch(getReservation());
      dispatch(getFeedback());
    }
    dispatch(getMenu());
  }, [dispatch, isAuth, ping]);
  return (
    <div className="App">
      <div className="header">
        {location.pathname.includes("/") ? <Navbar /> : null}
        <div className="main-cont">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route
              path="/menu"
              element={<Menu ping={ping} setPing={setPing} />}
            />
            <Route path="/contact" element={<Contact />} />{" "}
            <Route
              path="/feedback"
              element={<Feedback ping={ping} setPing={setPing} />}
            />{" "}
            <Route path="/contact" element={<Contact />} />{" "}
            <Route path="/login" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>{" "}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
