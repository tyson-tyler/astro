import React from "react";
import { CardWithForm } from "./card";
import Pag from "./pag";

const Hello = () => {
  return (
    <div className="relative justify-around items-center container rounded-full flex flex-col md:flex-row h-full w-full">
      <div className="flex-col flex">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full left-0 z-[1] object-cover rounded-full"
        >
          <source src="/12.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <CardWithForm />
      </div>
    </div>
  );
};

export default Hello;
