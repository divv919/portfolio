"use client";
// import { gruzImage } from "@/data/GruzData/data";
// import { useSwitch } from "../Context/SwitchContext";
// import { rinkitImage } from "@/data/RinkitData/data";
// import Image from "next/image";
import { navLinks } from "@/data/Common/data";
import { InfoTipNav } from "../InfoTipNav";
// import { useState } from "react";

const Nav = () => {
  // const { isSwitchOn, toggleSwitch } = useSwitch()
  // const [isArrowVisible, setIsArrowVisible] = useState(true);

  // const handleArrowVisibility = () => {
  //   setIsArrowVisible(false);
  // };

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
      <div className="relative bg-mainBlack border border-zinc-700 px-3 py-2 rounded-xl flex items-center gap-3">
        <div className=" flex gap-4 items-center">
          {navLinks.map((nav) => (
            <InfoTipNav key={nav.id} text={nav.name}>
              <a target="_blank" className=" " href={nav.link}>
                {<nav.icon />}
              </a>
            </InfoTipNav>
          ))}
        </div>
        <div className="h-8  bg-zinc-500 "></div>
        {/* <div
          className="rounded-md md:hover:brightness-75 transition duration-200 cursor-pointer"
          onMouseEnter={handleArrowVisibility}
        >
          <Image
            src={ rinkitImage :}
            alt="Profile Picture"
            className="rounded-md"
            width={35}
            height={35}
            // title={isSwitchOn ? rinkitShortName : gruzName}
          />
        </div> */}
        {/* {isArrowVisible && (
          <div id="arrow" className="absolute -rotate-90 bottom-6 -right-9">
            <Image
              src="/assets/Images/gif/arrow.gif"
              alt="arrow"
              className="size-12 "
              width={100}
              height={100}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Nav;
