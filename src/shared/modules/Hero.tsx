"use client";

import React from "react";
import Apex from "@/assets/partners/Apex";
import FixMyphone from "@/assets/partners/Fixmyphone";
import Verdant from "@/assets/partners/Verdant";
import Duet from "@/assets/partners/Duet";
import LindHolmes from "@/assets/partners/LindHolmes";
import Button from "../components/Button";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";


export default function Hero() {
  const HeroDetails = {
    title: `We Shape Your Ideas Into  Awesome Digital  Experience`,
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
    partners: [FixMyphone, Verdant, Duet, Apex, LindHolmes],
    link: "Book a call with us",
  };


  return (
    <div className="  h-[420px]  min-[375px]:h-[520px]  sm:h-[600px] overflow-hidden md:h-[670px] lg:h-[870px] relative ">
      <div className="Hero h-[870px] bg-white text-center flex items-end justify-center    relative ">
        {/* Introduction content */}
        <div className="title  w-full  min-[418px]:w-[90%] sm:w-[90%] md:w-[740px]  absolute top-32 min-[375px]:top-34.5   sm:top-48  flex flex-col items-center  ">
          <h1 className="  text-3xl  min-[400px]:text-[40px]  min-[590px]:text-[44px] sm:text-[54px]  md:text-[64px] herotext font-[700] leading-[120%] ">
            {HeroDetails.title}
          </h1>
          <p className=" text-[#D6E0E7] px-5 sm:px-0  mt-3 sm:mt-5 md:mt-8  text-xs min-[590px]:text-sm sm:text-base  lg:mt-10 ">
            {HeroDetails.subtitle}
          </p>
          <Button
            className={
            `  sm:w-[231px]  mt-4 sm:mt-5 md:mt-8   lg:mt-10   `
            }
          >
            {HeroDetails.link}
          </Button>
        </div>
      </div>
      
{/* Partners container  */}


<div className="flex flex-col justify-center w-full items-center">
  <div className="overflow-hidden min-[1300px]:w-[1140px] h-[80px] w-full mx-auto absolute bottom-0 lg:bottom-32 items-center">
    <Swiper
   spaceBetween={0}
    
      slidesPerView={3}
      loop={true}
      speed={10000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}

      className="w-full h-full max-[530px]:translate-x-[5vw] max-[768px]:translate-x-[5vw]"
      breakpoints={{
        320: {
          slidesPerView: 3,
        
        },
        600: {
          slidesPerView: 4,
         
        },
        768: {
          slidesPerView: 5,
         
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
                modules={[Pagination, Autoplay,Navigation]}
    >
      {HeroDetails.partners.map((partner, key) => {
        const Partner = partner;
        return (
          <SwiperSlide key={key} className="flex justify-center items-center">
            <Partner className="w-[80%]   h-20 sm:w-[6.6rem] md:w-[8rem] lg:w-[90%] min-[1300px]:w-[163px] min-[1300px]:h-[80px]" />
          </SwiperSlide>
        );
      })}
        {HeroDetails.partners.map((partner, key) => {
        const Partner = partner;
        return (
          <SwiperSlide key={key + "copy"} className="flex justify-center items-center">
            <Partner className=" h-20 w-[80%] sm:w-[6.6rem] md:w-[8rem] lg:w-[90%] min-[1300px]:w-[163px] min-[1300px]:h-[80px]" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
    </div>
    </div>
  );
}
