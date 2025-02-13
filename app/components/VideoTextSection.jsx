import React from "react";

export default function VideoTextSection () {
  return (
<>
      <h2 className="main-heading">What Customers are Saying</h2>
      <p className="sub-text">Watch Customer Videos</p>

      <h3 className="video-heading">Data Recovery Stories</h3>

      {/* Video Section */}
 
    <div className="video-section">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
        <source media="(min-width: 0px)" srcset="https://static.wixstatic.com/media/816406_1de65f61dcb44469938ee17439dff069f002.jpg/v1/fill/w_672,h_378,enc_auto/file.jpeg 1x, https://static.wixstatic.com/media/816406_1de65f61dcb44469938ee17439dff069f002.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg 2x, https://static.wixstatic.com/media/816406_1de65f61dcb44469938ee17439dff069f002.jpg/v1/fill/w_2016,h_1134,enc_auto/file.jpeg 3x"/>
          {/* <source src="video1.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
        <source media="(min-width: 0px)" srcset="https://static.wixstatic.com/media/816406_ac2ea541fdb64e36a69b4f5c3ba7d8b4f002.jpg/v1/fill/w_672,h_378,enc_auto/file.jpeg 1x, https://static.wixstatic.com/media/816406_ac2ea541fdb64e36a69b4f5c3ba7d8b4f002.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg 2x, https://static.wixstatic.com/media/816406_ac2ea541fdb64e36a69b4f5c3ba7d8b4f002.jpg/v1/fill/w_2016,h_1134,enc_auto/file.jpeg 3x"/>
          {/* <source src="video2.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    </>
  );
};


