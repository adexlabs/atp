import React from "react";

export default function SegateBanner({
  title = "",
  caption,
  buttonText,
  onButtonClick,
  bannerStyle,
  backgroundImage,
  highlightWordCount = 0,
  paragraph,
  image,
  extraText,
  opacity = 1,
}) {
  const words = title ? title.split(" ") : [];

  // Ensure highlightWordCount does not exceed the number of words in the title
  const validHighlightWordCount = Math.max(0, Math.min(highlightWordCount, words.length));

  // Logic to handle title and highlighted words
  const titleWithoutLastWords =
    validHighlightWordCount === 0
      ? title
      : words.slice(0, -validHighlightWordCount).join(" ");

  const lastWords =
    validHighlightWordCount > 0 ? words.slice(-validHighlightWordCount).join(" ") : "";

  // Default styles for the banner
  const defaultBannerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "300px",
    backgroundColor: "#4CAF50",
    color: "white",
    textAlign: "center",
    padding: "20px",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: opacity, 
    ...bannerStyle,
  };

  return (
    <div className="banner-container" style={defaultBannerStyle}>
      <div className="banner-content">
        {/* Render image above the caption if it exists */}
        {image && (
          <div style={{ marginBottom: "8px" }}>
            <img src={image} alt="icon" style={{ width: "150px", objectFit: "contain" }} />
          </div>
        )}

        {/* Render caption only if it exists */}
        {caption && <p className="banner-caption">{caption}</p>}

        {/* Extra content */}
        {extraText && (
          <div className="extra-content" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {extraText && <p>{extraText}</p>}
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
