import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface CarouselItem {
  imageUrl: string;
  title?: string;
  description?: string;
}

interface AutoCarouselProps {
  items: CarouselItem[];
  interval?: number;
}

const AutoCarousel = ({ items, interval = 3000 }: AutoCarouselProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: interval,
        disableOnInteraction: false,
      }}
      speed={600}
      grabCursor={true}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.imageUrl}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoCarousel;
