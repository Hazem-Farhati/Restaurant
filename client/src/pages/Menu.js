import React, { useState } from 'react'
import BookTable from '../component/BookTable';
import FoodHome from '../component/FoodHome';
import MenuBanner from '../component/MenuBanner';
import '../styles/menu.css'
const Menu = ({ping , setPing}) => {
    const [showfood, setShowfood] = useState(false);
const [allNames, setAllNames] = useState([]);

  return (
    <>
      <div className="all__menu">
        <MenuBanner />
        <FoodHome
        
          setShowfood={setShowfood}
          ping={ping}
          setPing={setPing}
        />
        <BookTable
          
          showfood={showfood}
          ping={ping}
          setPing={setPing}
        />
      </div>
    </>
  );
}

export default Menu