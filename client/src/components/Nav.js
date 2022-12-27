import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
    <div className="right_nav">
      <Link to="/Register" className="link">Register</Link>
      <Link to="/Login" className="link">Login</Link>
      </div>
      <div className="left_nav">
      <Link to="/" className="link">Homepage</Link>
      <Link to="/AllProduct" className="link">AllProduct</Link>
      </div>
    </div>
  );
}

export default Nav;
