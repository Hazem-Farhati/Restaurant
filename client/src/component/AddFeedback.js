import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../redux/feedbackSlice/feedbackSlice";
import "../styles/addfeedback.css";
const AddFeedback = ({ show, setShow }) => {
    
  const [title, setTitle] = useState('')
  const [content, setContent] = useState("");

  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  return (
    <div className="all__fb">
      {show && (
        <div onClick={() => setShow(false)} className="close__feedback">
          <h3>X</h3>
        </div>
      )}
      <div className="add__feedback">
        <div className="add__feedback__container">
          <div className="add__feedback__content">
            <div className="tile__content__fb">
              {" "}
              <div className="title__fb">
                <h3>title</h3>
                <input
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="content__fb">
                <h3>content</h3>
                <input
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="title"
                />
            
              </div>
              <div className="done__fb_btn">
                <button
                  onClick={() => {
                    dispatch(
                      createFeedback({
                        title,
                        content,
                        name: user?.name,
                        lastname: user?.lastname,
                        date: new Date(),
                        user_id: user?._id,
                      })
                    );
                    setShow(false);
                  }}
                  disabled={!title || !content}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
