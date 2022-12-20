import "../styles/feedback.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import AddFeedback from "./AddFeedback";
import { useState } from "react";

import React from 'react'
import UpdateFeedback from "./UpdateFeedback";
import { deleteFeedback } from "../redux/feedbackSlice/feedbackSlice";

const FeedbackCard = ({ theme ,ping,setPing}) => {
    const feedback = useSelector((state) => state.feedback?.feedback);
      const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false)
  return (
    <div id={theme}>
      <section className="testimonial container section" id="feedback">
        <div className="section__title">
          <h2>My clients & instructors say</h2>
          {showUpdate ? null : (
            <>{show ? null : <h3 onClick={() => setShow(true)}>+</h3>}</>
          )}
        </div>
        {/* <span className="section__subtitle">Testimonial</span> */}

        <Swiper
          className="testimonial__container"
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
        >
          {feedback?.map((el, i) => {
            return (
              <>
                <SwiperSlide className="testimonial__card" key={i}>
                  <img
                    // src={el.image}
                    alt="testimonial_img"
                    className="testimonial_img"
                  />
                  <h3 className="testimonial__name">{el?.title}</h3>
                  <p className="testimonial__description">{el?.content}</p>
                  <div className="updatebtn__date">
                    <p className="testimonial__description__date">
                      {el?.date
                        .split("T")
                        .map((el) => el)
                        .slice(0, 1)}
                    </p>
                    <div className="delet_update_fb_icon">
                      <i
                        className="uil uil-pen"
                        onClick={() => setShowUpdate(true)}
                      ></i>
                      <i
                        onClick={() => {
                          dispatch(
                            deleteFeedback({
                              id: el._id,
                              deleteFeedback,
                              // feedbacks: feedback.filter((el) => el == user._id),
                            })
                          );
                          setPing(!ping);
                        }}
                        className="uil uil-trash-alt"
                      ></i>
                    </div>
                    <>
                      {" "}
                      {showUpdate && (
                        <div className="update__in__fb">
                          {" "}
                          <UpdateFeedback
                            showUpdate={showUpdate}
                            setShowUpdate={setShowUpdate}
                            el={el}
                            ping={ping}
                            setPing={setPing}
                          />
                        </div>
                      )}
                    </>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        {show && (
          <>
            <AddFeedback show={show} setShow={setShow} />{" "}
          </>
        )}
   
      </section>
    </div>
  );
};

export default FeedbackCard