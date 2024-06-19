import { DialogDemo } from "@/components/model";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Radio, Timer } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-around fixed h-20 bottom-0 z-[50] bg-slate-400">
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center">
          <Timer className="w-7 h-7 mr-3" />
          <span className="text-bold lg:text-lg text-sm hidden md:flex">
            2 Days Workshop
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Radio className="w-7 h-7 mr-3 ml-3" />
          <span className="text-bold lg:text-lg text-sm hidden md:flex">
            Live
          </span>
        </div>
        <div className="flex justify-center items-center">
          <CalendarIcon className="w-7 h-7 mr-3 ml-3" />
          <span className="text-semibold lg:text-lg text-sm hidden md:flex">
            100% Practical
          </span>
        </div>
        <div className="flex flex-col justify-center items-center ml-5">
          <DialogDemo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
