import React, { useState } from "react";
import Login from "./Login";
import "../styles/auth.css";
import { useDispatch } from "react-redux";
import {  userRegister } from "../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={(e) => e.preventDefault()}>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="name"
              placeholder="User name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            />
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, last_name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <button
              onClick={() => {
                dispatch(userRegister(register));
                setTimeout(() => {
                  navigate("/profile");
                }, 1500);
              }}
              className="signup_button"
            >
              Sign up
            </button>
          </form>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Register;
