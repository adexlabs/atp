import React from "react";

const VideoTextSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Top Text Section */}
      <h2 className="text-2xl font-bold text-center mb-4">Our Video Showcase</h2>

      {/* Bottom Video Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <video className="w-full md:w-1/2 rounded-lg shadow-lg" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="w-full md:w-1/2 rounded-lg shadow-lg" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoTextSection;
