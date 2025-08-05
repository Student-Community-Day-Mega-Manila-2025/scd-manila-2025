"use client";
import React, { useState } from "react";
import Image from "next/image";

const Registration = () => {
  const [hoveredTicket, setHoveredTicket] = useState<string | null>(null);

  return (
    <section
      id="registration"
      className="relative bg-[var(--background)] px-4 py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute -top-35 -right-24 z-40 h-[350px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px]" />
      <Image
        src="/planet.png"
        alt="Planet"
        width={450}
        height={550}
        className="absolute -top-40 -right-40 z-10 opacity-60"
      />

      <div className="pointer-events-none absolute -bottom-28 -left-24 z-40 h-[400px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px]" />
      <Image
        src="/ringed_planet.png"
        alt="Planet"
        width={350}
        height={450}
        className="absolute -bottom-8 -left-35 z-10 opacity-60"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="registration-subtitle">
            Join the Future of Innovation <br /> in Cloud Tech
          </h3>
        </div>

        {/* Tickets */}
        <div className="mt-12 flex w-full items-center justify-center gap-28">
          {/* Regular Pass */}
          <div
            className="relative flex h-[321px] w-[475px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("regular")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            {/* Initial View */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                hoveredTicket === "regular" ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4 className="ticket-title text-center">
                Regular <br /> Pass
              </h4>
            </div>

            {/* Description View */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                hoveredTicket === "regular" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description">Regular Pass</h3>
                <p className="ticket-description">
                  Perfect for attendees joining the core <br /> experience
                </p>
                <h3 className="ticket-title py-2">150 PHP</h3>
                <div className="ticket-description">
                  <span>What You Get:</span>
                  <ul>
                    <li>Food</li>
                    <li>Swag Kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Pass */}
          <div
            className="relative flex h-[321px] w-[475px] items-center justify-center overflow-hidden rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("pro")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            {/* Initial View */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                hoveredTicket === "pro" ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4 className="ticket-title text-center">
                Pro <br /> Pass
              </h4>
              <div className="absolute -right-2 bottom-14 mt-7 flex items-center justify-center rounded-lg bg-[#EBD228] px-7 py-1 text-black shadow-lg">
                <span className="all-inclusive-text">All Inclusive</span>
              </div>
            </div>

            {/* Description View */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                hoveredTicket === "pro" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description">Pro Pass</h3>
                <p className="ticket-description">
                  Ideal for attendees seeking more than <br /> the basics
                </p>
                <h3 className="ticket-title py-2">250 PHP</h3>
                <div className="ticket-description">
                  <span>What You Get:</span>
                  <ul>
                    <li>Food</li>
                    <li>Swag Kit</li>
                    <li>Workshop Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-6">
          <button className="gradient-border w-[450px]">
            <span className="text-[25px] font-bold">Register Now</span>
          </button>
          <div className="flex items-center justify-center">
            <h3 className="event-starts-in">Event Starts in XX Days</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
