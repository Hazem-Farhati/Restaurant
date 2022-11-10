import React from 'react'
import '../styles/bannerhome.css'
const BannerHome = () => {
  return (
    <>
      <div className="bannerHome">
        <div className="banner__container">
          <div className="banner__content">
            <h6>THE MOST INTERESTING FOOD IN THE WORLD</h6>
            <h1>
              Discover the <span className="banner__title__color">flavors</span>
            </h1>
            <h2>
              of <span className="banner__title__color"> {" "}Pansho</span>Food
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerHome