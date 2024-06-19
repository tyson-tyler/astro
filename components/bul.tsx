import React from "react";
import { AccordionDemo } from "./Acc";
import { Button } from "./ui/button";
import { DialogDemo } from "./model";

const Bul = () => {
  return (
    <>
      <h1 className="w-full p-3 mt-4 text-center head_text   dark:text-white text-black mb-10">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center p-6">
        <AccordionDemo />
      </div>
      <div className="w-full flex justify-center items-center m-auto">
        <DialogDemo />
      </div>
    </>
  );
};

export default Bul;
