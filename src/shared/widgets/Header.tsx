import Logo from "@/assets/logo.svg";
import Menuicn from "@/assets/icons/Menuicn";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const Navdetails = {
    Logo,
    navlinks: ["Work", "About", "Blog", "Contract"],
    Menuicn,
  };
  return (
    <div className=" flex w-full justify-center    ">
      <div
        className=" bg-[#0A0A0A1A] z-50  backdrop-blur-[30px] flex gap-[8px] justify-between items-center  p-[16px] sm:p-[24px] z-10 
       w-[90%]
      min-[1200px]:w-[1140px]  h-[6%] min-[375px]:h-[60px] min-[555px]:h-[70px] sm:h-[90px] font-DMSans leading-[150%] border-[1px] border-[#FFFFFF1A]  rounded-[80px] fixed  top-[32px]"
      >
        <Link href='/'>
        <Image
          width={10000}
          height={10000}
          src={Navdetails.Logo}
          alt=""
          className=" z-50  w-5 min-[375px]:w-8 sm:w-10 md:w-[38.49px]  lg:h-[36px]  left-[-1px]  top-[2px]"
        /></Link>
        <ul className="flex items-center   h-[32px]  justify-between  w-[360px]">
          {Navdetails.navlinks.map((link, key) => (
            <li key={key}>
              <Link href="#" className=" text-[16px] hidden sm:block  ">
                {link}
              </Link>
            </li>
          ))}
          <li className=" sm:hidden  ">
            <Link href="#" className=" text-[16px]  ">
              <Navdetails.Menuicn className=" w-[24px] min-[375px]:w-[28px] sm:w-[32px]" />
            </Link>
          </li>
        </ul>
        <ul className=" flex-col  items-start  hidden      w-full  justify-start  gap-10    ">
          {Navdetails.navlinks.map((link, key) => (
            <li key={key}>
              <Link href="#" className=" text-[16px]  sm:block  ">
                {link}
              </Link>
            </li>
          ))}
   
        </ul>
      </div>
  
    </div>
  );
}
