import React from 'react'
import "../styles/welcome.css"
const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome__container">
          <div className="welcome__content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/welcome-bg.png.webp" alt="" />
            </div>
            <div className="welcome__text">
              <h3>
                <span className="welcome__title__color">welcome</span> <br />{" "}
                <span className="welcome__title_text">to food fun </span>
              </h3>
              <p>
                Created god gathered don't you yielding herb you had. And isn't,
                god was saw. Dominion. Great sixth for in unto was. Open can't
                tree am waters brought. Divide after there. <br /> <br />{" "}
                Created god gathered don't you yielding herb you had. And isn't,
                god was saw. Dominion. Great sixth for in unto was. Open can't
                tree waters brought. Divide after there. Was. Created god
                gathered don't you yielding herb you had. And isn't god.
              </p>
              <div className='book_button' >
                <button>BOOK A TABLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome