import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import logo from "./images/logo.jpg"



function Nav({loggedUser,setLoggedUser}) {
  const navigate=useNavigate()
  
  const logoutUser= ()=>{
    const {data}=axios.post("http://localhost:5002/clothesForFree/logout")
    console.log(data);
    localStorage.removeItem("userLog")
    
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
      {loggedUser&&<Link to={`/ProductUser/${loggedUser}`} className="link">המוצרים שלי</Link>}
      </div>
      <div className="logo_nav">
       {/* <img className="logo" src={logo} alt="logo"></img> */}
      </div>
      <div className="left_nav">
      <Link to="/" className="link">עמוד הבית</Link>
      <Link to="/AllProduct" className="link">כל המוצרים</Link>
      </div>
    </div>
  );
}

export default Nav;
