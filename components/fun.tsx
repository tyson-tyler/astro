import { CheckCircle } from "lucide-react";
import React from "react";

const Fun = () => {
  return (
    <>
      <h1 className="w-full p-3 text-center head_text usespan mb-10">
        2-days Intuitive Tarot Reading Workshop Curriculum?
      </h1>

      <div className="flex md:flex-row container m-auto flex-col  justify-center items-center w-full">
        <div className="flex-1 flex-col border-solid border-2 border-purple-500 rounded-md p-10 mb-4 md:mb-0 lg:mx-5 mx-0">
          <h1 className="head_text1 mb-2 mt-2">Day 1: What are Tarot cards?</h1>
          <div className="flex gap-2  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Who can learn the art of tarot reading?
            </p>
          </div>

          <div className="flex gap-2  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Understanding how Tarot impacts daily decision making?
            </p>
          </div>
          <div className="flex gap-2  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Ways to connect and charge the Tarot deck?
            </p>
          </div>
          <div className="flex gap-2 items-center  mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Questions and answers sessions
            </p>
          </div>
          <div className="flex gap-2  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">Overview of the cards?</p>
          </div>
        </div>
        <div className="flex-1 flex-col border-solid border-2 border-purple-500 rounded-md p-10 lg:mx-5 mx-0">
          <h1 className="head_text1 mb-2 mt-2 ">
            Day 2: Dispelling common tarot myths?
          </h1>
          <div className="gap-2  mb-2  flex  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md  ">
              Daily Tarot Rituals for success
            </p>
          </div>
          <div className="gap-2  mb-2 flex  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Unlocking Tarot's Guidance potential
            </p>
          </div>
          <div className="gap-2  mb-2 flex  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">Q&A for Clarifications</p>
          </div>
          <div className="gap-2  mb-2  flex  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">
              Bonus session on special Tarot Insights
            </p>
          </div>
          <div className="gap-2  mb-2  flex  items-center mt-6">
            <CheckCircle className="w-7 h-7 mr-1 text-green-500" />
            <p className="text-sm  lg:text-md ">Unlocking career guidance</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fun;
