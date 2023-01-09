import React from 'react'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"

function About() {
  return (
    <div className="containerHP">
    <div className="description description1">
      <img className="img" src={img1} alt="img1"></img>
      <div className="text_img text_img1">
        <p className="title title1">
          אתה עוזר לאנשים שסביבך לחסוך הרבה כסף
        </p>
        <p className="desc_img desc_img1">
          ישנם אוכלוסיות רבות במדינת ישראל שנמצאים במצב כלכלי קשה מאוד, תרומה אחת קטנה שלך יכולה לעזור להם מאוד{" "}
        </p>
      </div>
    </div>

    <div className=" description description2">
      <img className="img" src={img2} alt="img2"></img>
      <div className="text_img text_img2">
        <p className="title title2">זה ידידותי לסביבה</p>
        <p className="desc_img desc_img2">
        אדם בארצות הברית זורק בממוצע כ-33 קילוגרמים  של בגדים בשנה{" "}
        </p>
      </div>
    </div>

    <div className=" description description3">
      <img className="img" src={img3} alt="img3"></img>
      <div className="text_img text_img3">
        <p className="title title3"> פנה מקום מהבית </p>
        <p className="desc_img desc_img3">
           לכולנו שוכבים בארון טונות של בגדים במצב מצויין שאחרים ישמחו לקבל  {" "}
        </p>
      </div>
    </div>

    <div className=" description description4">
      <img className="img" src={img4} alt="img4"></img>
      <div className="text_img text_img4">
        <p className="title title4">אתה תומך באחרים ברחבי המדינה</p>
        <p className="desc_img desc_img4">
          יש לא מעט ילדים במדינה שישמחו לקבל בגד חדש{" "}
        </p>
      </div>
    </div>
  </div>
   
  )
}

export default About