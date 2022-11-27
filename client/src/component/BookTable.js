import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updatReservation } from "../redux/reservationSlice/reservationSlice";
import "../styles/booktable.css";
const BookTable = ({ showfood ,ping , setPing }) => {
  const user = useSelector((state) => state.user?.user);
  const reservation = useSelector((state) => state.reservation?.reservation);

  const dispatch = useDispatch();
  const [getDate, setGetDate] = useState();
  const [newReservation, setNewReservation] = useState({});
  const handleDate = (e) =>
    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value,
    });
  
  // const handleChange = (event) =>
  //   setNewReservation({ ...newReservation, type: event.target.value });


  return (
    <>
      <div className="booktable">
        <div className="booktable__container">
          <div className="booktable__content">
            <h3>
              Book <span style={{ color: "#ffb606" }}>your</span> table
            </h3>
            <p>
              Beast kind form divide night above let moveth bearing darkness.
            </p>
            <input
              onChange={(e) => handleDate(e)}
              type="datetime-local"
              name="date"
              defaultValue="date"
            ></input>
            {reservation?.map((el) => <>
            
            </>)}
            <div className="book_btn">
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    updatReservation({
                      id: reservation?._id,
                      reservation: newReservation,
                    })
                  );
                  setPing(!ping);
                }}
              >
                book a table
              </button>
              {console.log(reservation, "te")}
            </div>
          </div>
          {showfood ? null : (
            <>
              
              <div className="choose__food_menu">
                <div className="menu__title__p">
                  <h3>Title</h3>
                  <h3>Price</h3>
                </div>

                {reservation?.map((el) => (
                  <>
                    {user?._id === el?.user_id ? (
                      <>
                        <div className="choose__food__menu__container">
                          {/* <div className="menu__name__price">
                      <h3>{el?.menu_name}</h3>
                      <h3 style={{ paddingRight: "20px" }}>{el?.menu_price}</h3>
                    </div> */}
                          <h5>
                            {el?.date
                              .split("T")
                              .map((el) => el)
                              .slice(0, 1)}
                            {/* {console.log(el.date?.indexOf(el.date[1]), "heee")} */}
                          </h5>

                          <h5>
                            {el?.date
                              .split("T")
                              .map((el) => el)
                              .slice(1, 2)
                              .toString()
                              .split(".")
                              .map((el) => el)
                              .slice(0, 1)
                              .filter((el, i) => el === el?.date)}
                            {/* {console.log(el.date, "helo")} */}
                          </h5>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookTable;
