"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds }: any) => {
  const [time, setTime] = useState(initialSeconds);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime: any) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds: any) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      days: days.toString().padStart(2, "0"),
      hours: hrs.toString().padStart(2, "0"),
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const timeLeft = formatTime(time);

  return (
    <div className="flex flex-col items-center justify-center mt-12 h-screen  dark:bg-black   bg-no-repeat bg-center bg-origin-border bg-gray-100 ">
      <div className="bg-white flex flex-col justify-center items-center h-[50vh] w-full dark:bg-gray-900 dark:text-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Limited Offer</h1>
        <div className="text-3xl flex space-x-4">
          <div className="text-center">
            <p>{timeLeft.days}</p>
            <span className="text-sm">Days</span>
          </div>
          <div className="text-center">
            <p>{timeLeft.hours}</p>
            <span className="text-sm">Hours</span>
          </div>
          <div className="text-center">
            <p>{timeLeft.minutes}</p>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="text-center">
            <p>{timeLeft.seconds}</p>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
