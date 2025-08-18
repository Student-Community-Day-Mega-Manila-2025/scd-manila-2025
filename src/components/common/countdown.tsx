"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-09-17T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(1, "0");
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-between gap-4 bg-[linear-gradient(100deg,_#018062_4.76%,_#005542_37.42%,_#1B3C45_72.12%,_#285968_105.37%)] px-0 py-6 shadow-[0_4px_20.1px_0_#071311_inset] lg:flex-row lg:px-8 xl:px-24">
      <div className="flex h-full flex-col items-start justify-center px-4 lg:px-0">
        <p className="text-secondary-600 font-cinzel text-xl font-bold">
          Look Forward To
        </p>
        {/* <p className="text-secondary-600 font-cinzel text-xl leading-none font-bold">
          AWS Cloud Club
        </p>
        <p className="text-secondary-600 font-cinzel text-xl leading-none font-bold">
          Student Community Day Mega Manila 2025
        </p> */}
        <p className="font-cinzel text-primary-900 text-lg font-bold">
          September 17, 2025 | Jose Rizal University
        </p>
      </div>
      <div className="grid h-full w-full grid-cols-3 grid-rows-1 sm:grid-cols-4 lg:w-auto">
        <div className="z-40 flex w-full flex-col items-center justify-center bg-[linear-gradient(90deg,_#1B3D47_0%,_#306A7B_38.94%,_#4395AD_100%)] p-4 text-white shadow-[0_0_6.7px_1px_rgba(0,0,0,0.25)]">
          <p className="font-cinzel text-xl leading-none font-bold md:text-2xl">
            {formatNumber(timeLeft.days)}
          </p>
          <p className="text-base leading-none sm:text-lg">days</p>
        </div>
        <div className="bg-accent-100 z-30 flex w-full flex-col items-center justify-center p-4 text-white shadow-[0_0_6.7px_1px_rgba(0,0,0,0.25)]">
          <p className="font-cinzel text-xl leading-none font-bold md:text-2xl">
            {formatNumber(timeLeft.hours)}
          </p>
          <p className="text-base leading-none sm:text-lg">hours</p>
        </div>
        <div className="bg-accent-100 z-20 flex w-full flex-col items-center justify-center p-4 text-white shadow-[0_0_6.7px_1px_rgba(0,0,0,0.25)]">
          <p className="font-cinzel text-xl leading-none font-bold md:text-2xl">
            {formatNumber(timeLeft.minutes)}
          </p>
          <p className="text-base leading-none sm:text-lg">minutes</p>
        </div>
        <div className="bg-accent-100 z-10 hidden w-full flex-col items-center justify-center p-4 text-white shadow-[0_0_6.7px_1px_rgba(0,0,0,0.25)] sm:flex">
          <p className="font-cinzel text-xl leading-none font-bold md:text-2xl">
            {formatNumber(timeLeft.seconds)}
          </p>
          <p className="text-base leading-none sm:text-lg">seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
