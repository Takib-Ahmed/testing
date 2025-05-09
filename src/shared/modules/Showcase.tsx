"use client";
import React from "react";
import Dashboard from "@/assets/images/services/Dashboard.png";
import Mobileview from "@/assets/images/services/Mobile View.png";
import Landing from "@/assets/images/services/Landing.png";
import Image from "next/image";
import Darkshade from "@/assets/Bgs/Showcase/DarkShade";
import WhiteShade from "@/assets/Bgs/Showcase/WhiteShade";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
export default function Showcase() {
  const Samples = [
    Landing,
    Dashboard,
    Mobileview,
    Landing,
    Dashboard,
    Mobileview,
  ];

  return (
    <div className=" h-[35vw]  sm:h-[250px] md:h-[300px] relative      mb-14 lg:h-[342px] bg-cover w-full flex justify-between items-center    bg-[#0A0A0A1A]  backdrop-blur-[30px] ">
      <Darkshade className="absolute  w-1/2 h-full  left-[-10%]  sm:w-auto sm:left-0 top-0 z-20" />
      <Darkshade className="absolute  w-1/2 h-full sm:w-auto  right-[-10%]  sm:right-0 top-0 scale-[-1] z-20" />

      <div className="  flex justify-center  items-center absolute   w-auto sm:w-[100vw] h-full">
        <WhiteShade className=" w-[90%]  md:w-auto  md:scale-110  " />
      </div>

      <div className="  w-full bg-transparent  ">
        <Swiper
          className=" mySwiper  w-full    justify-center items-center flex bg-transparent"
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          spaceBetween={100}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {},
            768: {},
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1556: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {Samples.map((service, key) => (
            <SwiperSlide className=" " key={key}>
              <div
                className="responsive-box relative  w-[105%]
            sm:w-[250px] sm:h-[180px] 
            md:w-[300px] md:h-[200px] 
            lg:w-[457px] lg:h-[306px] 
         
            flex items-center justify-center"
              >
                <Image
                  width={5000}
                  height={5000}
                  key={key}
                  className="z-10  w-full h-full   
"
                  src={service}
                  alt={`Service ${key}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
