import React, { useState } from 'react'
import "../styles/updatefeedback.css"
import { useDispatch, useSelector } from 'react-redux';
import { updatFeedback } from '../redux/feedbackSlice/feedbackSlice';

const UpdateFeedback = ({ showUpdate,setShowUpdate , el ,ping,setPing}) => {
    const [newFeedback, setNewFeedback] = useState({});
    
  const feedback = useSelector((state) => state.feedback?.feedback);
    const dispatch = useDispatch();
    const handleUpdate = (e) =>
      setNewFeedback({
        ...newFeedback,
        [e.target.name]: e.target.value,
      });
    return (
      <>
        <div className="update__all__fb">
          {showUpdate && (
            <div
              onClick={() => setShowUpdate(false)}
              className="update__close__feedback"
            >
              <h3>X</h3>
            </div>
          )}

          <div className="update__feedback">
            <div className="update__feedback__container">
              <div className="update__feedback__content">
                <div className="update__tile__content__fb">
                  {" "}
                  <div className="update__title__fb">
                    <h3>title</h3>
                    <input
                      name="title"
                      onChange={(e) => handleUpdate(e)}
                      defaultValue={el?.title}
                      type="text"
                      placeholder="title"
                    />
                  </div>
                  <div className="update__content__fb">
                    <h3>content</h3>
                    <textarea
                      name="content"
                      onChange={(e) => handleUpdate(e)}
                      type="text"
                      placeholder="content"
                      defaultValue={el?.content}
                    />
                  </div>
                  <div className="update__bnt">
                    <button
                      onClick={() => {
                        dispatch(
                          updatFeedback({
                            id: el._id,
                            feedback: newFeedback,
                          })
                        );
                        setPing(!ping);

                        setShowUpdate(false);
                      }}

                      //   disabled={!title || !content}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default UpdateFeedback