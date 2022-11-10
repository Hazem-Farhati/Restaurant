import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/userSlice/userSlice';

const Login = () => {
  const navigate = useNavigate()
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
  const dispatch=useDispatch()
  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <label for="chk" aria-hidden="true">
          Login
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button
          onClick={() => {
            dispatch(userLogin(login));
            setTimeout(() => {
              navigate("/profile");
            }, 1500);
          }}
          className="signup_button"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login