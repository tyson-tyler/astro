import Image from "next/image";
import React from "react";

const Open = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  gap-7">
      <div className="flex justify-center items-center">
        <Image
          src={"/re.jpg"}
          width={100}
          height={100}
          alt="hello"
          className="border-dashed border-2 border-sky-500 p-4"
        />
      </div>
      <div>
        <h2 className="font-bold text-lg">PINGLAKSHA ASTROLOGY</h2>
        <h2 className="font-bold text-lg">( ISO 9001 : 2015 CERTIFIED)</h2>
      </div>
    </div>
  );
};

export default Open;
