import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <>
      <div className="w-full rounded-lg overflow-hidden flex">
        <section className="w-full flex-center flex-col mt-6 mb-[30px]">
          <h1 className="head_text text-center  pt-[200px] dark:text-white text-black">
            <span className="dark:text-white text-center text-black">
              Traot
            </span>
            <br className="max-md:hidden" />
            <span className="usespan ml-2 text-center">
              Card Reading Workshop
            </span>
          </h1>
          {/* 
          <p className="desc text-center text-gray-600 mt-5 px-3">
            Join us in this thorough 2-days free online workshop to dive deep
            into the ageless knowledge of Tarot and learn the secrets of the
            cards.
          </p> */}
          {/* <div className="flex justify-center items-center mt-5 gap-3 mb-20">
            <Link href={"/"}>
              <Button className="p-5 justify-center flex" size={"lg"}>
                Try it Now
              </Button>
            </Link>
            <a href={"https://inter-main.vercel.app"}>
              <Button
                className="p-5 justify-center flex"
                size={"lg"}
                variant={"ghost"}
              >
                Community
              </Button>
            </a>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Banner;
