import { useRef, useState } from "react";

export default function VideoSection({ coverImage, videoUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
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
    <div className="video-container" onClick={handleVideoClick}>
      {!isPlaying && (
        <img src={coverImage} alt="Video Cover" className="cover-image" />
      )}
      <video ref={videoRef} className={`video ${isPlaying ? "playing" : ""}`} muted loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && <button className="play-button">▶</button>}
    </div>
  );
}
