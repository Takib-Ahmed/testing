import Blueblur from "@/assets/Bgs/Services/Blueblur";
import BlueStars from "@/assets/Bgs/Services/Bluestars";
import GreenBlur from "@/assets/Bgs/Services/Greenblur";
import Pinkblur from "@/assets/Bgs/Services/Pinkblur";
import Purpleblur from "@/assets/Bgs/Services/Purpleblur";
import Purplestars from "@/assets/Bgs/Services/Purplestars";
import Stairs from "@/assets/Bgs/Staris";
import AIOicn from "@/assets/icons/AIO";
import Crossbox from "@/assets/icons/Crossbox";
import Infinity from "@/assets/icons/Infinity";
import Layer from "@/assets/icons/Layers";
import Linkicn from "@/assets/icons/Linkicn";
import Link from "next/link";
import React from "react";

export default function Services() {
  const ServicesDetails = {
    intro: "We are a full-service studio creating transformative",
    emphasis1: "digital experiences and solutions.",
    middle: "specializing in",
    emphasis2: "websites and web applications.",
    services: [
      {
        icon: AIOicn,
        title: "All-In-One (AIO) Service",
        des: "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
        stars: BlueStars,
        bgblur: GreenBlur,
        translate: 49,
        bgOverlay: "#93FDD326",
      },
      {
        icon: Infinity,
        title: "Project-Based Development",
        des: "Ideal for agencies with ready designs, our service focuses on bringing...",
        stars: BlueStars,
        bgblur: Blueblur,
        translate: 113,
        bgOverlay: "#6BB3F326",
      },
      {
        icon: Layer,
        title: "Scalable Dev Partnership",
        des: "Our partnership is designed for businesses needing consistent development support...",
        stars: Purplestars,
        bgblur: Pinkblur,
        translate: 66,
        bgOverlay: "#E879F926",
      },
      {
        icon: Crossbox,
        title: "End-to-End Consulting",
        des: "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
        stars: Purplestars,
        bgblur: Purpleblur,
        translate: 0,
        bgOverlay: "#9773FA26",
      },
    ],
  };
  return (
    <div className=" Services  min-[1200px]:h-[728.1509399414062px] font-rethiksans flex-col flex justify-center   pt-10   items-center ">
      {/* Introcontainer */}
      <div className=" flex justify-center items-center  Introcontainer">
        <div className="  w-full  text-center  min-[1200px]:text-left  min-[1200px]:w-[1140px]  min-[1200px]:h-[180px]  ">
          {/* intro  */}
          <p className="text-[#FFFFFF] text-[20px]  min-[380px]:text-[25px]  min-[590px]:text-[30px] sm:text-[35px]  md:text-[38px]  min-[1200px]:text-[40px] leading-[150%]  font-[500]  ">
            <span className="text-[#6D6D6D]">{ServicesDetails.intro} </span>
            <span className="text-[#FFFFFF] font-semibold">
              {ServicesDetails.emphasis1}{" "}
            </span>
            <span className="text-[#6D6D6D]">{ServicesDetails.middle} </span>
            <span className="text-[#FFFFFF] font-semibold">
              {ServicesDetails.emphasis2}
            </span>
          </p>
        </div>
      </div>
      {/* card container  */}
      <div className=" Servicegrid grid  max-[500px]:grid-cols-1  max-[1200px]:grid-cols-2 !translate-y-0 min-[1200px]:flex min-[1200px]:flex-wrap justify-center p-5 py-10  min-[1200px]:p-4   gap-x-5 min-[1200px]:gap-0  text-white">
        {/* servicecards */}
        {ServicesDetails.services.map((service, key) => (
          <div
            key={key}
            className={` servicecard  w-fit rounded-[16px] overflow-hidden      `}
            style={{ transform: `translateY(${service.translate}px)` }}
          >
            <div
              className={` w-full     sm:w-[286px] h-[314px] rounded-[16px] Service relative   grid   border-[1.6px]  overflow-hidden   p-6  z-20 `}
              style={{ borderColor: service.bgOverlay }}
            >
              {/* coloredbg */}
              <div
                className="  absolute  inset-0  opacity-20 top-0   "
                style={{ background: service.bgOverlay }}
              ></div>
              {/* StairsBg */}
              <div className=" rounded-[16px]   absolute w-full -z-20 opacity-15   grid   inner-card   p-6 h-[95%] lg:h-[90%]"></div>
              {/* Icon */}
              <div className=" mb-5 sm:mb-6 md:mb-8  lg:mb-10 z-20">
                <service.icon className="  scale-80   sm:scale-100" />
              </div>
              {/* link  */}
              <Link
                className=" flex justify-between z-20 items-center sm:items-start mb-5"
                href={"#"}
              >
                <h3 className="  text-[20px] lg:text-[24px] font-semibold ">
                  {service.title}
                </h3>
                <Linkicn className=" w-[30px]  md:w-[35px] lg:w-[40px] lg:h-[40px] scale-125" />
              </Link>
              {/* contents */}

              <p className="text-sm  z-20">
                Our AIO solution tailors to your unique vision, crafting a
                website that truly reflects...
              </p>

              {/* blurs */}
              <service.bgblur className="absolute  right-0 lg:left-[123.55px]  sm:w-[188.75999450683594px] sm:h-[234.8719940185547px] top-[-33.91px]   " />
              <service.bgblur className=" absolute  left-0 lg:left-[-29.2px]  sm:w-[241.06111992906435] sm:h-[194.90907423034812]  bottom-0 scale-[-1]         " />
              {/* stars */}
              <service.stars className=" absolute right-0 translate-x-1/3 sm:translate-x-1/4   w-full " />
              <service.stars className=" absolute -translate-x-1/3  left-0 sm:-translate-x-1/3 bottom-5  w-full  " />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
