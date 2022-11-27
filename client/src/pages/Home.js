import React from 'react'
import BannerHome from '../component/BannerHome'
import Customer from '../component/Customer'
import FoodHome from '../component/FoodHome'
import ReservationHome from '../component/ReservationHome'
import SpecialHomeFood from '../component/SpecialHomeFood'
import Welcome from '../component/Welcome'

const Home = () => {
  return (
      <>
      <BannerHome /> 
      <Welcome />
      <FoodHome />
      <ReservationHome />  
      <SpecialHomeFood />
      <Customer/>
      </>
  )
}

export default Home