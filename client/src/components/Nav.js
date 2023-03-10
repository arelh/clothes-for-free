import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import logo from "./images/logo.jpg"



function Nav({loggedUser,setLoggedUser}) {
  const navigate=useNavigate()
  
  // let user= JSON.parse(window.localStorage.getItem('user'));
  // console.log(user._id);
  // let id=user._id

  const logoutUser= ()=>{
    const {data}=axios.post("http://localhost:5002/clothesForFree/logout")
    console.log(data);
    localStorage.removeItem("userLog")
    // localStorage.removeItem("user")
    
    setLoggedUser(null)
    navigate("/")

  }
// console.log(loggedUser);
  return (
    <div className="Nav">
    <div className="right_nav">
      {loggedUser&&<button onClick={logoutUser}>התנתק</button>}
      {!loggedUser&&<Link to="/Register" className="link">הירשם</Link>}
      {!loggedUser&&<Link to="/Login" className="link">התחבר</Link>}
      {/* {loggedUser&&<Link to={`/ProductUser/${id}`} className="link">המוצרים שלי</Link>} */}
      </div>
      <div className="logo_nav">
      </div>
      <div className="left_nav">
      <Link to="/" className="link">עמוד הבית</Link>
      <Link to="/AllProduct" className="link">כל המוצרים</Link>
      {/* <Link to="/About" className="link">אודות</Link> */}
      </div>
    </div>
  );
}

export default Nav;
