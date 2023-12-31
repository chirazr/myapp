import { useEffect } from "react";
import './Home.css'
import  Navbar from "../Navbar/Navbar"
import Navbaradmin from '../Dashboard-admin/Navbar-admin/Navbaradmin'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userCurrent } from "../../JS/userSlice/userSlice";


function Home  () {
   const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect (() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div className='form'>
      <Navbar />

      <h1>Welcome to the home </h1>
      {isAuth   ? (
          <Navbaradmin />
        ) : null}
      
      

      
    
    </div>
  )
}

export default Home
                                