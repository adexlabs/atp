import React from "react";
import img1 from '~/assets/logo-after.png';
import img2 from '~/assets/logo-canon.png';
import img3 from '~/assets/logo-seagate.png';
import img4 from '~/assets/logo-starr.png';

export default function LogoSlider() {
  // Correctly define the images array as a list of image paths
  const images = [img1, img2, img3, img4];

  return (
    <div className="custom container">
      {/* Heading Section */}
      <div className="heading">
        <h2 className="custom-title">trusted by top professionals:</h2>
      </div>

      {/* Slider Section */}
      <div className="slider">
        <div className="slide-track">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling */}
          {images.map((image, index) => (
            <div className="slide" key={index + images.length}>
              <img src={image} alt={`Slide duplicate ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
