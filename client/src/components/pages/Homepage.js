import React from "react";
// import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"


function Homepage() {
  return (
    <div>
      <div className="containerHP">
        <div className="description description1">
          <img className="img" src={img1} alt="img1"></img>
          <div className="text_img text_img1">
            <p className="title title1">
              אתה עוזר לאנשים שסביבך לחסוך הרבה כסף
            </p>
            <p className="desc_img desc_img1">
              loremloremloremloremloremlorem{" "}
            </p>
          </div>
        </div>

        <div className=" description description2">
          <img className="img" src={img2} alt="img2"></img>
          <div className="text_img text_img2">
            <p className="title title2">זה ידידותי לסביבה</p>
            <p className="desc_img desc_img2">
              loremloremloremloremloremlorem{" "}
            </p>
          </div>
        </div>

        <div className=" description description3">
          <img className="img" src={img3} alt="img3"></img>
          <div className="text_img text_img3">
            <p className="title title3"> פנה מקום מהבית </p>
            <p className="desc_img desc_img3">
              loremloremloremloremloremlorem{" "}
            </p>
          </div>
        </div>

        <div className=" description description4">
          <img className="img" src={img4} alt="img4"></img>
          <div className="text_img text_img4">
            <p className="title title4">אתה תומך באחרים ברחבי המדינה</p>
            <p className="desc_img desc_img4">
              loremloremloremloremloremlorem{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
