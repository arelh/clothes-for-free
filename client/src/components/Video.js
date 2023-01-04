import React from 'react'
import video from "./images/video.jpg"


function Video() {
    return (
        <div>
        <video controls>
          <source src={video} alt="video" type="video/jpg" />
          <source src={video}  type="video/webm" />
        </video>
        </div>
      );
}

export default Video