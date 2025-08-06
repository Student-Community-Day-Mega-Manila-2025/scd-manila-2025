"use client";
import React, { useState } from "react";
import Image from "next/image";

const Registration = () => {
  const [hoveredTicket, setHoveredTicket] = useState<string | null>(null);
  const [mobileHoveredTicket, setMobileHoveredTicket] = useState<string | null>(null);

  return (
    <section
      id="registration"
      className="relative bg-[var(--background)] px-4 py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute top-5 -right-30 lg:-top-35 lg:-right-24 z-40 h-[350px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px]" />
      <div className="absolute -right-20 -top-20 lg:-top-40 lg:-right-40 z-10 opacity-60 lg:w-[450px] lg:h-[550px] w-[230px] h-[270px]">
        <Image
          src="/planet.png"
          alt="Planet"
          fill
          className="object-cover"
        />
      </div>



      <div className="pointer-events-none hidden lg:block absolute -bottom-28 -left-24 z-40 h-[400px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px]" />
      <div className="absolute w-[130px] h-[170px] -bottom-20 -left-10 lg:-bottom-8 lg:-left-35 z-10 opacity-60 lg:w-[350px] lg:h-[450px]">
        <Image
          src="/ringed_planet.png"
          alt="Planet"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="registration-subtitle lg:!text-[32px] !text-[16px] w-[260px] lg:w-[550px]">
            Join the Future of Innovation in Cloud Tech!
          </h3>
        </div>

        {/* Mobile View Tickets */}
        <div className="mt-12 flex flex-col w-full items-center justify-center gap-[45px] md:hidden">
          {/* Regular Pass Mobile */}
          <div
            className="relative flex h-[110px] w-[340px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setMobileHoveredTicket("regular")}
            onMouseLeave={() => setMobileHoveredTicket(null)}
          >
            <Image src="/right_cloud.png" alt="Left Cloud" width={160} height={80} className="absolute right-0 top-0" />
            <Image src="/left_cloud.png" alt="Left Cloud" width={160} height={80} className="absolute left-0 top-0" />

            {/* Default State */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${mobileHoveredTicket === "regular" ? "opacity-0" : "opacity-100"}`}>
              <h4 className="ticket_mobile">
                Regular <br /> Pass
              </h4>
            </div>

            {/* Hover State */}
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${mobileHoveredTicket === "regular" ? "opacity-100" : "opacity-0"}`}>
              <div className="h-full w-full flex bg-[#071311B2] px-1 py-2 rounded-3xl">
                <div className="flex items-center justify-center px-1 my-2 border-r border-[#285968] w-[25%]">
                  <h3 className="ticket-title-description !text-[12px] text-center">Regular Pass</h3>
                </div>
                <div className="flex flex-col items-start px-4 text-left w-[75%] gap-1">
                  <h3 className="ticket-title !text-[14px] text-left">150 PHP</h3>
                  <p className="text-[#99EEDB] text-xs">
                    Perfect for attendees joining the core experience
                  </p>
                  <div className="text-[#99EEDB] text-xs">
                    <p><span className="text-[#ebd228]">What You Get:</span> Food, Swag Kit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Pass Mobile */}
          <div
            className="relative flex h-[110px] w-[340px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setMobileHoveredTicket("pro")}
            onMouseLeave={() => setMobileHoveredTicket(null)}
          >
            <Image src="/right_cloud.png" alt="Left Cloud" width={160} height={80} className="absolute right-0 top-0" />
            <Image src="/left_cloud.png" alt="Left Cloud" width={160} height={80} className="absolute left-0 top-0" />

            {/* Default State */}
            <div className={`absolute inset-0 flex flex-col gap-1 items-center justify-center transition-all duration-500 ease-in-out ${mobileHoveredTicket === "pro" ? "opacity-0" : "opacity-100"}`}>
              <h4 className="ticket_mobile">
                Pro <br /> Pass
              </h4>
              <div className="flex items-center justify-center rounded-lg bg-[#EBD228] px-4 py-1 text-black shadow-lg">
                <span className="all-inclusive-text !text-[7px]">All Inclusive</span>
              </div>
            </div>

            {/* Hover State */}
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${mobileHoveredTicket === "pro" ? "opacity-100" : "opacity-0"}`}>
              <div className="h-full w-full flex bg-[#071311B2] px-1 py-2 rounded-3xl">
                <div className="flex items-center justify-center px-1 my-2 border-r border-[#285968] w-[25%]">
                  <h3 className="ticket-title-description !text-[12px] text-center">Pro Pass</h3>
                </div>
                <div className="flex flex-col items-start px-4 text-left w-[75%] gap-1">
                  <h3 className="ticket-title !text-[14px] text-left">250 PHP</h3>
                  <p className="text-[#99EEDB] text-xs">
                    Ideal for attendees seeking more than the basics
                  </p>
                  <div className="text-[#99EEDB] text-xs">
                    <p><span className="text-[#ebd228]">What You Get:</span> Food, Swag Kit, Workshop Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Desktop View Tickets*/}

        {/* Tickets */}
        <div className="hidden md:flex mt-12 w-full items-center justify-center gap-28">
          <div
            className="relative flex h-[321px] w-[475px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("regular")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${hoveredTicket === "regular" ? "opacity-0" : "opacity-100"
                }`}
            >
              <h4 className="ticket-title text-center !text-[48px] !leading-[55px]">
                Regular <br /> Pass
              </h4>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${hoveredTicket === "regular" ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description !text-[32px]">Regular Pass</h3>
                <p className="ticket-description">
                  Perfect for attendees joining the core <br /> experience
                </p>
                <h3 className="ticket-title py-2 !text-[48px] !leading-[55px]">150 PHP</h3>
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

          <div
            className="relative flex h-[321px] w-[475px] items-center justify-center overflow-hidden rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/Clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("pro")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${hoveredTicket === "pro" ? "opacity-0" : "opacity-100"
                }`}
            >
              <h4 className="ticket-title text-center !text-[48px] !leading-[55px]">
                Pro <br /> Pass
              </h4>
              <div className="absolute -right-2 bottom-14 mt-7 flex items-center justify-center rounded-lg bg-[#EBD228] px-7 py-1 text-black shadow-lg">
                <span className="all-inclusive-text !text-[12px]">All Inclusive</span>
              </div>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${hoveredTicket === "pro" ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description !text-[32px]">Pro Pass</h3>
                <p className="ticket-description">
                  Ideal for attendees seeking more than <br /> the basics
                </p>
                <h3 className="ticket-title py-2 !text-[48px] !leading-[55px]">250 PHP</h3>
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
        <div className="lg:mt-10 mt-16 flex w-full flex-col items-center justify-center gap-6">
          <button className="gradient-border lg:w-[450px] w-[250px]">
            <span className="lg:text-[25px] text-[14px] font-bold">Register Now</span>
          </button>
          <div className="flex items-center justify-center">
            <h3 className="event-starts-in lg:!text-[25px] !text-[16px]">Event Starts in XX Days</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
