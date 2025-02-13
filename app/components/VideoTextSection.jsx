import { useRef, useEffect, useState } from "react";

export default function VideoTextSection({ videoUrl, coverImage }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (isMobile && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
      style={{ position: "relative", cursor: "pointer", width: "100%", maxWidth: "600px" }}
    >
      {/* Cover Image (Shows when video is paused) */}
      {!isPlaying && (
        <img
          src={coverImage}
          alt="Video Cover"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Play Button (Shows when video is paused) */}
      {!isPlaying && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            padding: "20px",
            zIndex: 2,
          }}
        >
          ▶️
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        style={{
          width: "100%",
          height: "auto",
          display: isPlaying ? "block" : "none", // Hide video when paused
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
