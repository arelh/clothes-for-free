import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
    <div className="right_nav">
      <Link to="/Register" className="link">הירשם</Link>
      <Link to="/Login" className="link">התחבר</Link>
      </div>
      <Link to="/ProductUser" className="link">ProductUser</Link>
      <div className="left_nav">
      <Link to="/" className="link">עמוד הבית</Link>
      <Link to="/AllProduct" className="link">כל המוצרים</Link>
      </div>
    </div>
  );
}

export default Nav;
