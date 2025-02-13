import React from "react";
import "./VideoTextSection.css"; // Normal CSS import kiya hai

const VideoTextSection = () => {
  return (
    <div className="video-section">
      <h2 className="main-heading">What Customers are Saying</h2>
      <p className="sub-text">Watch Customer Videos</p>

      <h3 className="video-heading">Data Recovery Stories</h3>

      {/* Video Section */}
      <div className="video-container">
        <video className="video-item" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video-item" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoTextSection;
