import {configureStore} from '@reduxjs/toolkit' 
import menuSlice from './menuSlice/menuSlice'
import reservationSlice from './reservationSlice/reservationSlice';
import  userSlice  from './userSlice/userSlice'
 
export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    reservation: reservationSlice,
  },
});