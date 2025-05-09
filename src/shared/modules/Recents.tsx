import Recentbg from "@/assets/Bgs/works/Recentsbg";
import React from "react";
import AlcoholTracker from "@/assets/images/works/Alcohol Tracker.png";
import Rely from "@/assets/images/works/Rely.png";
import Toposware from "@/assets/images/works/Toposware.png";
import Finance from "@/assets/images/works/Markscoin.png";
import NexRv from "@/assets/images/works/NexRv.png";
import Image from "next/image";
import Recentblur from "@/assets/Bgs/works/RecentBlur";
import Recentblur2 from "@/assets/Bgs/works/RecentBlur2";
import Recentblur4 from "@/assets/Bgs/works/Recentsblur4";
import Recentsblur3 from "@/assets/Bgs/works/Recentblur3";
import Link from "next/link";
import Linkicn from "@/assets/icons/Linkicn";
import Workbottmbg from "@/assets/Bgs/works/worksBg";

export default function Recents() {
  const RecentWorkDetails = {
    title: "Our Most Recent Works",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
    works: [
      {
        coverImage: AlcoholTracker,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },

      {
        coverImage: Rely,
        name: "Rely",
        service: "All-In-One (AIO) Service",
      },
      {
        coverImage: Toposware,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },
      {
        coverImage: Finance,
        name: "Finance Website",
        service: "All-In-One (AIO) Service",
      },
      {
        coverImage: NexRv,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },
    ],
  };
  return (
    <div className=" flex flex-col  justify-center  items-center  mt-20">
      <div className=" w-full   md:w-[812.0509033203125px]   h-[303.9018859863281px] relative text-center flex  justify-center items-center ">
        <Recentbg className="   inset-0 absolute  -z-10   w-full    md:w-auto" />
        <div className=" flex flex-col  justify-center items-center  mt-10">
          <h1 className=" text-[30px]  min-[590px]:text-[35px] sm:text-[40px] md:text-[45px]  lg:text-[48px]  font-[700]  ">
            {RecentWorkDetails.title}
          </h1>
          <p className="  text-[15px] md:text-[18px]  lg:text-[20px] font-[400]   lg:w-[372px]  ">
            {RecentWorkDetails.subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-2  md:p-4   lg:mt-10 relative  w-full justify-center items-center   ">
        <Recentblur className=" z-[-1]  Recentsblur absolute  top-[-550px]  left-[-100px]  " />
        <Recentblur2 className="     z-[-1] Recentsblur absolute  top-[-550px]    right-[-100px]" />
        <Recentsblur3 className="     z-[-1] Recentsblur absolute   top-[550px]    left-[-100px]" />

        <Recentblur4 className="     z-[-1] Recentsblur absolute  top-[550px]     right-[-100px]" />

        {/* First Two in Flex */}
        <div className=" grid sm:grid-cols-2 gap-6     ">
          {RecentWorkDetails.works.slice(0, 2).map((work, index) => (
            <div key={index} className="flex-1 relative w-full h-full">
           
              <Image
                src={work.coverImage}
                alt={`Recent Work ${index + 1}`}
                width={500}
                height={550}
                className="w-[554px] rounded-[16px] object-cover  z-20 "
              />

              <div className="details flex justify-between  items-center   p-[24px]">
                <div className="grid gap-[8px]">
                  <h1 className="name text-[20px]  sm:text-[25px] md:text-[28px]  lg:text-[32px] leading-[120%] font-[700]  ">
                    {work.name}
                  </h1>

                  <p className="   text-[15px] sm:text-[20px]  md:text-[22px]   lg:text-[24px] leading-[120%] font-[400]  text-[#D1D1D1]  z-20">
                    {work.service}
                  </p>
                </div>
                <Link
                  href="#"
                  className=" bg-[#93D1FD1A] rounded-[56px] text-[15px] sm:text-[20px]  md:text-[22px]   lg:text-[24px]  leading-[75%] font-[500]  font-DMSans border-[#FFFFFF1A] w-[91px]  sm:w-[101px]   md:w-[121px]  lg:w-[151px] items-center   h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] border-[1px] backdrop-blur-[40px]  flex justify-center "
                >
                  Open
                  <Linkicn className=" w-[20px]  sm:w-[25px] md:w-[28px]  lg:w-[32px] " />
                </Link>
              </div>
              <Workbottmbg className=" absolute     sm:bottom-20 md:bottom-[20%] max-[1015px]:bottom-[5%] lg:bottom-[15%]  w-full " />
            </div>
          ))}
        </div>

        {/* Remaining in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {RecentWorkDetails.works.slice(2).map((work, index) => (
            <div
              key={index}
              className="rounded-[16px] w-fit h-fit overflow-hidden  relative "
            >
              <Workbottmbg className=" absolute   bottom-10  sm:bottom-18  left-[-1px]" />
              <Image
                src={work.coverImage}
                alt={`Recent Work ${index + 3}`}
                width={500}
                height={550}
                className="w-[365px] rounded-[10.54px] h-auto object-cover"
              />
              <div className="details flex justify-between  items-center    p-[24px]">
                <div className=" grid gap-[8px]">
                  <h1 className="name text-[10px] md:text-[15px] lg:text-[20px] leading-[120%]   ">
                    {work.name}
                  </h1>

                  <p className=" text-[14px] leading-[120%] font-[400]  text-[#D1D1D1]  z-20">
                    {work.service}
                  </p>
                </div>
                <Link
                  href="#"
                  className=" bg-[#93D1FD1A] rounded-[56px] text-[16px] leading-[75%] font-[500]  font-DMSans border-[#FFFFFF1A] w-[97.89px] items-center h-[35.81px] border-[1px] backdrop-blur-[40px]  flex justify-center "
                >
                  Open
                  <Linkicn className=" w-[20px] " />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
