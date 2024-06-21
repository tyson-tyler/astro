import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./toogle";
import { SheetDemo } from "./sheet";
import { DialogDemo } from "@/components/model";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-[50] h-34 flex  items-center justify-between px-2 dark:bg-gray-900 dark:text-white shadow-md text-black">
      <div>
        <h1 className="text-bold m-4 text-xl font-bold">
          Kamakshi Tarot Academy
        </h1>
      </div>
      {/* <div>
        <ul className="justify-around mx-2 items-center hidden md:flex">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">WhatsApp</li>
          <li className="mx-2 cursor-pointer">Pricing</li>
          <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
      </div> */}
      <DialogDemo />
      <div className="md:hidden flex">
        <SheetDemo />
      </div>
    </div>
  );
};

export default Navbar;
