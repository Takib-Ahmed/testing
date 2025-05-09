import Featuredblur from "@/assets/Bgs/FAQS/FeaturedBlur";
import Recentbg from "@/assets/Bgs/works/Recentsbg";
import Linkicn from "@/assets/icons/Linkicn";
import React from "react";

export default function Featured() {
  const Featured = {
    title: "Featured Insights",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
  };
  const faqs = [
    {
      question: "How to Protect Your Identity While Traveling?",
      answer: "Use a VPN, avoid public Wi-Fi, and secure your devices.",
    },
    {
      question: "Should I use public Wi-Fi?",
      answer: "Avoid public Wi-Fi without a VPN to protect your data.",
    },
    {
      question: "How do I keep my documents safe?",
      answer: "Use a digital backup and store them securely.",
    },
    {
      question: "How can I secure my accounts?",
      answer: "Use strong passwords and enable two-factor authentication.",
    },
    {
      question: "Should I share personal details while traveling?",
      answer: "Limit sharing sensitive information in public places.",
    },
  ];
  return (
    <div className=" flex flex-col  justify-center  items-center ">
      <div className=" w-full   md:w-[812.0509033203125px]   h-[303.9018859863281px] relative text-center flex  justify-center items-center ">
        <Recentbg className="   inset-0 absolute  -z-10   w-full    md:w-auto" />
        <div className=" flex flex-col  justify-center items-center  mt-10">
          <h1 className=" text-[30px]  min-[590px]:text-[35px] sm:text-[40px] md:text-[45px]  lg:text-[48px]  font-[700]  ">
            {Featured.title}
          </h1>
          <p className="  text-[15px] md:text-[18px]  lg:text-[20px] font-[400]   lg:w-[372px]  ">
            {Featured.subtitle}
          </p>
        </div>
      </div>
      <div className="mx-auto  space-y-4 text-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" p-[24px]  bg-[#0A0A0A] flex justify-between  max-[450px]:w-[98%] mx-auto min-[450px]:w-[80vw] min-[1200px]:w-[1140px] items-center rounded-[8px] overflow-hidden h-[70px] sm:h-[80px]  md:h-[88px] relative "
          >
            <Featuredblur className="  w-[169px] absolute left-0   h-full" />

            <div className="flex items-center justify-center  gap-1 sm:gap-[6px]  ">
              <p className=" numbers  text-[18px] sm:text-[20px] md:text-[24px] font-[700] leading-[150%]">
                0{index + 1}
              </p>
              <p className=" text-xs sm:text-sm md:text-base lg:text-lg    font-[600]">
                {faq.question}
              </p>
            </div>
            <Linkicn
              className="
       w-[30px] sm:w-[35px]  md:w-[40px]  py-0.5 "
            />
            {/* <p className="text-gray-400">{faq.answer}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
