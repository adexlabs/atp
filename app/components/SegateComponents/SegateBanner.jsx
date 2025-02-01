import React from "react";

export default function NewBanner({
  title = "", // Default value to prevent errors
  caption,
  imageSrc, // New prop for the optional image
  buttonText,
  onButtonClick,
  bannerStyle,
  backgroundImage,
  highlightWordCount = 0, // Default value for highlightWordCount
  paragraph,
}) {
  const words = title ? title.split(" ") : [];

  // Ensure highlightWordCount does not exceed the number of words in the title
  const validHighlightWordCount = Math.max(0, Math.min(highlightWordCount, words.length));

  // Logic to handle title and highlighted words
  const titleWithoutLastWords =
    validHighlightWordCount === 0
      ? title // If no words are highlighted, show the full title
      : words.slice(0, -validHighlightWordCount).join(" ");

  const lastWords =
    validHighlightWordCount > 0 ? words.slice(-validHighlightWordCount).join(" ") : "";

  // Default styles for the banner
  const defaultBannerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", // Stack elements vertically
    height: "300px",
    backgroundColor: "#4CAF50",
    color: "white",
    textAlign: "center",
    padding: "20px",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    backgroundSize: "cover",
    backgroundPosition: "center",
    ...bannerStyle,
  };

  return (
    <div className="banner-container" style={defaultBannerStyle}>
      <div className="banner-content">
        {/* Render caption only if it exists */}
        {caption && (
          <div className="banner-caption" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {imageSrc && (
              <img src={imageSrc} alt="Banner Icon" className="banner-image" style={{ width: "24px", height: "24px" }} />
            )}
            <p>{caption}</p>
          </div>
        )}
        {title && (
          <h1 className="banner-title">
            {titleWithoutLastWords}
            {lastWords && <span style={{ color: "rgb(88, 120, 238)" }}> {lastWords}</span>}
          </h1>
        )}
        {paragraph && <p>{paragraph}</p>}
        {buttonText && (
          <button onClick={onButtonClick} className="banner-button">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
