import { useState, useRef } from "react";

export default function VideoGallery({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  return (
    <div
      className="video-gallery"
      style={{
        justifyContent: videos.length === 1 ? "center" : "space-between",
      }}
    >
      {videos.map((video, index) => (
        <div key={index} className="video-container">
          <div className="video-box" onClick={() => handleVideoClick(video.videoUrl)}>
            <img src={video.coverImage} alt="Video Cover" className="cover-image" />
            <button className="play-button">▶</button>
          </div>
          {/* First Paragraph */}
          {video.firstParagraph && <p className="video-paragraph">{video.firstParagraph}</p>}
          {/* Second Title */}
          {video.secondTitle && <h3 className="video-title">{video.secondTitle}</h3>}
        </div>
      ))}

      {/* Fullscreen Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <video ref={videoRef} controls autoPlay className="fullscreen-video" volume={volume}>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Volume Control */}
          <div className="volume-control">
            <label>🔊 Volume:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
