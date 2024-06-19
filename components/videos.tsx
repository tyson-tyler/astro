import Image from "next/image";
import React from "react";

const Videos = () => {
  return (
    <>
      <h1 className="w-full p-3 text-center head_text2  dark:text-white text-black mt-6">
        What do our clients have to say About Us?
      </h1>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
        <video src="/bl.mp4" controls className="w-[300px] h-[500px]" />
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-12">
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
        <Image
          width={300}
          height={500}
          src={"/d.jpg"}
          alt="hello"
          className="rounded-md object-cover"
        />
      </div>
    </>
  );
};

export default Videos;
