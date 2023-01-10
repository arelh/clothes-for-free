import React from "react";
// import { Link } from "react-router-dom";

import video from "../images/video.mp4";

function Homepage() {
  return (
    <div className="home_page">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
        <div className="content">
          <span className="material-symbols-outlined">laundry</span>
          <h1>welcome to <span className="name">clothes for free</span></h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
