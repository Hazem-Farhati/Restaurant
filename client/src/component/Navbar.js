import React, { useState } from "react";
import "../styles/navbar.css";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [Toggle, setToggle] = useState(false);

  return (
    <>
      {Toggle ? (
        <>
          <BiAlignLeft
            className="nav__toggle"
            onClick={() => setToggle(false)}
          />
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
                <AiOutlineClose
                  className="nav__close"
                  onClick={() => setToggle(true)}
                />
                <li>
                  <h4>HOME</h4>
                  <h4>ABOUT</h4>
                  <h4>MENU</h4>
                  <h4>BLOG</h4>
                  <h4>CONTACT</h4>
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
