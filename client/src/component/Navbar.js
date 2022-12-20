import React, { useState } from "react";
import "../styles/navbar.css";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const [Toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const [profile, setProfile] = useState(false);
  return (
    <>
      {Toggle ? (
        <>
          {/* <BiAlignLeft
            className="nav__toggle"
            onClick={() => setToggle(false)}
          /> */}
        </>
      ) : (
        <>
          {" "}
          <div className="navbar">
            <div className="navbar__container">
              <div className="navbar__content">
                <div className="logo">
                  <img src="/images/logo.png" alt="" />
                  <h1>PanFood</h1>
                </div>
                {/* <AiOutlineClose
                  className="nav__close"
                  onClick={() => setToggle(true)}
                /> */}
                <li>
                  <Link to="/">
                    {" "}
                    <h4>HOME</h4>
                  </Link>
                  <h4>ABOUT</h4>
                  <Link to="/menu">
                    {" "}
                    <h4>MENU</h4>
                  </Link>

                  <Link to="/feedback">
                    {" "}
                    <h4>FEEDBACK</h4>
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <h4>CONTACT</h4>
                  </Link>
                  {isAuth ? (
                    <>
                      <div className="profile__navbar">
                        <i
                          onMouseEnter={() => setProfile(true)}
                          class="uil uil-user-circle nav__profile__logo "
                        ></i>
                        {profile && (
                          <>
                            <div
                              onMouseLeave={() => setProfile(false)}
                              className="profile__navbar__content"
                            >
                              <Link to="/profile">
                                <h5>Profile</h5>
                              </Link>
                              <h6
                                onClick={() => {
                                  dispatch(logout());
                                  navigate("/login");
                                  setToggle(true);
                                }}
                              >
                                Disconnect
                              </h6>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="profile__navbar">
                        <i
                          onMouseEnter={() => setProfile(true)}
                          class="uil uil-user-circle nav__profile__logo "
                        ></i>
                        {profile && (
                          <>
                            <div
                              onMouseLeave={() => setProfile(false)}
                              className="profile__navbar__content__offline"
                            >
                              <Link to="/login">
                                <h5>Login</h5>
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </li>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ----------- phone navbar ----------------- */}
      {show ? (
        <>
          <BiAlignLeft className="nav__toggle" onClick={() => setShow(!show)} />
        </>
      ) : (
        <>
          {" "}
          <div className="navbar__phone">
            <div className="navbar__container__phone">
              <div className="navbar__content__phone">
                <div className="logo">
                  <img src="/images/logo.png" alt="" />
                  <h1>PanFood</h1>
                </div>
                <AiOutlineClose
                  className="nav__close"
                  onClick={() => setShow(true)}
                />
                <li>
                  <Link to="/">
                    {" "}
                    <h4 onClick={() => setShow(true)}>HOME</h4>
                  </Link>
                  <h4 onClick={() => setShow(true)}>ABOUT</h4>
                  <Link to="/menu">
                    {" "}
                    <h4 onClick={() => setShow(true)}>MENU</h4>
                  </Link>

                  <Link to="/feedback">
                    {" "}
                    <h4 onClick={() => setShow(true)}>FEEDBACK</h4>
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <h4 onClick={() => setShow(true)}>CONTACT</h4>
                  </Link>
                  {isAuth ? (
                    <>
                      <div className="profile__navbar">
                        <i
                          onMouseEnter={() => setProfile(true)}
                          class="uil uil-user-circle nav__profile__logo "
                        ></i>
                        {profile && (
                          <>
                            <div
                              onMouseLeave={() => setProfile(false)}
                              className="profile__navbar__content"
                            >
                              <Link to="/profile">
                                <h5 onClick={() => setShow(true)}>Profile</h5>
                              </Link>
                              <h6
                                onClick={() => {
                                  dispatch(logout());
                                  navigate("/login");
                                  setToggle(true);
                                  setShow(true);
                                }}
                              >
                                Disconnect
                              </h6>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="profile__navbar">
                        <i
                          onMouseEnter={() => setProfile(true)}
                          class="uil uil-user-circle nav__profile__logo "
                        ></i>
                        {profile && (
                          <>
                            <div
                              onMouseLeave={() => setProfile(false)}
                              className="profile__navbar__content__offline"
                            >
                              <Link to="/login">
                                <h5>Login</h5>
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </li>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
