"use client";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BannerSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1 text-center lg:text-left">
            The Best learning institution
          </h1>
          {/* <h1 className="text-[48px] text-white text-center">
            Welcome to <br /> Surrendered Internation Institute
          </h1> */}
          <p className="text-white italic text-center lg:text-left mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            esse ducimus, impedit aliquid sapiente quos!
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
