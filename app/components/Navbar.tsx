import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./toogle";
import { SheetDemo } from "./sheet";
import { DialogDemo } from "@/components/model";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-[50] h-34 flex  items-center justify-between px-2 dark:bg-gray-900 dark:text-white shadow-md text-black">
      <div>
        <Image
          width={54}
          height={54}
          className="object-cover"
          alt="hello"
          src={"/logo.png"}
        />
      </div>
      <div>
        <ul className="justify-around mx-2 items-center hidden md:flex">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">WhatsApp</li>
          <li className="mx-2 cursor-pointer">Pricing</li>
          <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className=" justify-center items-center hidden md:flex ">
        <DialogDemo />
      </div>
      <div className="md:hidden flex">
        <SheetDemo />
      </div>
    </div>
  );
};

export default Navbar;
