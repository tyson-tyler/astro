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
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl font-bold mb-4">Limited Offer</h1>
        <p className="text-3xl flex justify-center items-center">
          {formatTime(time)}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
