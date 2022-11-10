import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/userSlice/userSlice'

const Profile = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user = useSelector((state)=> state.user.user)
  return (
    <div>
      <h1>{user.name}</h1>
      <h4
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </h4>
    </div>
  );
}

export default Profile