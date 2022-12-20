import React from "react";
import "../styles/foodHome.css";
import FoodHomeCard from "./FoodHomeCard";
import { useSelector } from "react-redux";

const FoodHome = ({ setShowfood, ping, setPing, allNames, setAllNames }) => {
  const menu = useSelector((state) => state?.menu?.menu);
  console.log(menu);
  return (
    <>
      <div className="foodhome">
        <div className="foodhome__container">
          <div className="foodhome__content">
            <div className="foodhome__text">
              <h3>
                <span className="foodhome__title__color">we serve</span> <br />{" "}
                <span className="foodhome__title_text">delicious food</span>
              </h3>
              <p>
                They're fill divide i their yielding our after have him fish on
                there for greater man moveth, moved Won't together isn't for fly
                divide mids fish firmament on net.
              </p>
            </div>
            <div className="foodhome__card">
              {menu?.map((el, i) => (
                <FoodHomeCard
                  setShowfood={setShowfood}
                  el={el}
                  key={i}
                  ping={ping}
                  setPing={setPing}
                  
                />
              ))}

              {/* <FoodHomeCard />
              <FoodHomeCard /> <FoodHomeCard />
              <FoodHomeCard />
              <FoodHomeCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodHome;
