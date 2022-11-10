import logo from './logo.svg';
import './App.css';
import Register from './component/Register';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userCurrent } from './redux/userSlice/userSlice';
import Profile from './component/Profile';
import PrivateRoute from './routes/PrivateRoutes';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  const isAuth =localStorage.getItem("token")
  const dispatch = useDispatch()
    useEffect(() => {
      if (isAuth) {
        dispatch(userCurrent());
      }
    
    }, [dispatch, isAuth]);
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>{" "}
        </Routes>
      </div>
    </div>
  );
}

export default App;
