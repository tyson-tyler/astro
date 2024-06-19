import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center m-auto flex-col mb-36">
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        className="object-cover animate-pulse"
        alt="hello"
      />
      <span className="flex justify-center items-center font-bold mt-3 mb-3">
        PINGLAKSHA ASTROLOGY
      </span>
      <span className="flex justify-center items-center font-bold">
        ( ISO 9001 : 2015 CERTIFIED)
      </span>
    </div>
  );
};

export default Footer;
