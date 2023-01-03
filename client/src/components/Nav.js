import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg"

function Nav() {
  return (
    <div className="Nav">
    <div className="right_nav">
      {/* <Link to="/Register" className="link">הירשם</Link> */}
      <Link to="/Login" className="link">התחבר</Link>
      </div>
      <div className="logo_nav">
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="left_nav">
      <Link to="/" className="link">עמוד הבית</Link>
      <Link to="/AllProduct" className="link">כל המוצרים</Link>
      </div>
    </div>
  );
}

export default Nav;
