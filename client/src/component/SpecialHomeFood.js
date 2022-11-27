import React from 'react'
import "../styles/specialHomeFood.css"
const SpecialHomeFood = () => {
  return (
    <>
      <div className="specialhomefood">
        <div className="specialhomefood__container">
          <div className="specitialhomefood__content">
            <div className="title">
              <h3>
                Our <span style={{ color: "#ffb606" }}>special</span> deshes
              </h3>
              <p>
                Beast kind form divide night above let moveth bearing darkness.
              </p>
            </div>
            <div className="all_special__home">
              <div className="first__special__home">
                <div className="number">
                  <h2>01.</h2>
                  <hr />
                </div>
                <h3>
                  <span style={{ color: "#ffb606" }}>Garlic</span> <br /> green
                  beans
                </h3>
                <p>
                  Be. Seed saying our signs beginning face give spirit own beast
                  darkness morning moveth green multiply she'd kind saying one
                  shall, two which darkness have day image god their night. his
                  subdue so you rule can.
                </p>
                <span
                  style={{
                    color: "#ffb606",
                    fontSize: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  $12.00
                </span>
                <div className="book__arrow">
                  {" "}
                  <h4>book a table</h4>
                  <i class="uil uil-arrow-right"></i>
                </div>

                <i className="fa fa-long-arrow-right"></i>
              </div>
              <img src="/images/deshes1.png.webp" alt="" />
            </div>
            <div className="all_special__home">
              <img className='img2' src="/images/deshes2.png.webp" alt="" />

              <div className="first__special__home">
                <div className="number">
                  <h2>02.</h2>
                  <hr />
                </div>
                <h3>
                  <span style={{ color: "#ffb606" }}>Lemon</span> <br />{" "}
                  rosemary chicken
                </h3>
                <p>
                  Be. Seed saying our signs beginning face give spirit own beast
                  darkness morning moveth green multiply she'd kind saying one
                  shall, two which darkness have day image god their night. his
                  subdue so you rule can.
                </p>
                <span
                  style={{
                    color: "#ffb606",
                    fontSize: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  $12.00
                </span>
                <div className="book__arrow">
                  {" "}
                  <h4>book a table</h4>
                  <i class="uil uil-arrow-right"></i>
                </div>

                <i className="fa fa-long-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialHomeFood