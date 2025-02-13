import React from "react";

export default function VideoTextSection () {
  return (
    <div className="video-section">
      <h2 className="main-heading">What Customers are Saying</h2>
      <p className="sub-text">Watch Customer Videos</p>

      <h3 className="video-heading">Data Recovery Stories</h3>

      {/* Video Section */}
 
    <div className="video-section">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
          <source src="video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
          <source src="video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    </div>
  );
};


