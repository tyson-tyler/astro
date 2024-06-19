import React from "react";
import Card from "./of";
import { Button } from "./ui/button";
import { DialogDemo } from "./model";

const Red = () => {
  return (
    <>
      <h1 className="w-full p-3 mt-4 text-center head_text dark:text-white text-black mb-10">
        Do not miss out on these irresistible bonus offers! Worth ₹6,000/-
      </h1>

      <div>
        <div className="flex items-center justify-center flex-wrap mb-4 bg-gray-100 dark:bg-gray-950 dark:text-white text-black p-4">
          <Card
            icon="🌐"
            title="Amazing Feature"
            description="This is an amazing feature that you will absolutely love."
          />
          <Card
            icon="🔠"
            title="Super Fast"
            description="Our product is super fast and efficient, making your life easier."
          />
          <Card
            icon="🧠"
            title="High Quality"
            description="We provide high-quality services that meet your needs perfectly."
          />
          <Card
            icon="💰"
            title="High Quality"
            description="We provide high-quality services that meet your needs perfectly."
          />
        </div>
      </div>
      <div className="flex justify-center items-center animate-bounce">
        <DialogDemo />
      </div>
    </>
  );
};

export default Red;
