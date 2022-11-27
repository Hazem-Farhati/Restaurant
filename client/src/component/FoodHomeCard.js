import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/reservationSlice/reservationSlice";

const FoodHomeCard = ({ el, i, setShowfood ,ping , setPing }) => {
  const user = useSelector((state) => state?.user?.user);

  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("#ffb606");
  const [image, setImage] = useState({
    width: "450px",
    height: "270px",
  });

  return (
    <>
      <div
        key={i}
        style={{ backgroundColor }}
        onMouseEnter={() => setBackgroundColor("#ffb606")}
        onMouseLeave={() => setBackgroundColor("#f9f9ff")}
        className="foodhome__card__container"
      >
        <div
          className="foodhome__card__content"
          onMouseEnter={() => setColor("black")}
          onMouseLeave={() => setColor("#ffb606")}
        >
          <img style={{ image }} src={el?.image} alt="cardfood" />
          <div className="foodhome_card_title_price">
            {/* <img style={{ image }} src={el?.image} alt="cardfood" /> */}

            <h4>{el?.name}</h4>
            <span style={{ color }}>{el?.prix}</span>
          </div>
          <div className="foodhome_card_description">
            <p>{el?.description}</p>
            <div className="add__menu__reservation">
              <h1
                onClick={() => {
                  dispatch(
                    createReservation({
                      name: user?.name,
                      last_name: user?.last_name,
                      user_id: user?._id,
                      menu_name: el?.name,
                      menu_price: el?.prix,
                      // date: "new Date()",
                    })
                  );
                  setPing(!ping)
                 setShowfood(true)}}
              >
                +
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodHomeCard;
