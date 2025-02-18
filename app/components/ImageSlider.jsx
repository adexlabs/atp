import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="image-slider">
      <Swiper
        className="custom-swiper"
        spaceBetween={20}
        slidesPerView={1} // Mobile view
        breakpoints={{
          549: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={true} // Enable arrows
        pagination={{ clickable: true }} // Enable dots
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay enabled
        modules={[Navigation, Pagination, Autoplay]}
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
