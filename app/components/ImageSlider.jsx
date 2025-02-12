import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="image-slider">
      {/* <h2 className="image-slider-title">Our Gallery</h2> */}
      <Swiper
        className="custom-swiper"
        spaceBetween={20}
        slidesPerView={2} // Mobile view
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={true} // Enable arrows
        pagination={{ clickable: true }} // Enable dots
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-slide">
              <img src={image.src} alt={image.alt || "Gallery Image"} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
