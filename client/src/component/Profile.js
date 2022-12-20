import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user = useSelector((state)=> state.user.user)
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
}

export default Profile