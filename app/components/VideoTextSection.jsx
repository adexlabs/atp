import { useRef, useEffect, useState } from "react";

export default function VideoTextSection () {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoClick = () => {
    if (isMobile && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <video ref={videoRef} muted loop>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


