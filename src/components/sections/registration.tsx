"use client";
import React, { useState, useEffect } from "react";
import SectionPage from "../layout/section-page";

const Registration = () => {
  const [hoveredTicket, setHoveredTicket] = useState<string | null>(null);
  const [mobileHoveredTicket, setMobileHoveredTicket] = useState<string | null>(
    null
  );
  const [daysLeft, setDaysLeft] = useState<number>(0);

  const calculateDaysLeft = (): number => {
    const targetDate = new Date("2025-09-17T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      return days;
    }

    return 0;
  };

  useEffect(() => {
    setDaysLeft(calculateDaysLeft());

    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 3600000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SectionPage
      id="register"
      className="relative bg-[var(--background)] px-4 pt-12 sm:py-16"
    >
      <div className="pointer-events-none absolute top-5 -right-30 z-40 h-[350px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px] lg:-top-35 lg:-right-24" />
      <div className="absolute -top-20 -right-20 z-10 h-[270px] w-[230px] opacity-60 lg:-top-40 lg:-right-40 lg:h-[550px] lg:w-[450px]">
        <img
          src="/planet.png"
          alt="Planet"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-28 -left-24 z-40 hidden h-[400px] w-[300px] rounded-[40%_60%_30%_70%] bg-[#00FFC5B2] opacity-[40%] blur-[100px] lg:block" />
      <div className="absolute -bottom-25 -left-10 z-10 h-[170px] w-[130px] opacity-60 lg:-bottom-48 lg:-left-35 lg:h-[450px] lg:w-[350px]">
        <img
          src="/ringed_planet.png"
          alt="Planet"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="registration-subtitle w-[260px] !text-[16px] lg:w-[550px] lg:!text-[32px]">
            Join the Future of Innovation in Cloud Tech!
          </h3>
        </div>

        {/* Mobile View Tickets */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-[45px] md:hidden">
          {/* Regular Pass Mobile */}
          <div
            className="relative flex h-[110px] w-[340px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/clouds.png")' }}
            onMouseEnter={() => setMobileHoveredTicket("regular")}
            onMouseLeave={() => setMobileHoveredTicket(null)}
          >
            <img
              src="/right_cloud.png"
              alt="Left Cloud"
              width={160}
              height={80}
              className="absolute top-0 right-0"
            />
            <img
              src="/left_cloud.png"
              alt="Left Cloud"
              width={160}
              height={80}
              className="absolute top-0 left-0"
            />

            {/* Default State */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${mobileHoveredTicket === "regular" ? "opacity-0" : "opacity-100"}`}
            >
              <h4 className="ticket_mobile">
                Regular <br /> Pass
              </h4>
            </div>

            {/* Hover State */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${mobileHoveredTicket === "regular" ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex h-full w-full rounded-3xl bg-[#071311B2] px-1 py-2">
                <div className="my-2 flex w-[25%] items-center justify-center border-r border-[#285968] px-1">
                  <h3 className="ticket-title-description text-center !text-[12px]">
                    Regular Pass
                  </h3>
                </div>
                <div className="flex w-[75%] flex-col items-start gap-1 px-4 text-left">
                  <h3 className="ticket-title text-left !text-[14px]">
                    150 PHP
                  </h3>
                  <p className="text-xs text-[#99EEDB]">
                    Perfect for attendees joining the core experience
                  </p>
                  <div className="text-xs text-[#99EEDB]">
                    <p>
                      <span className="text-[#ebd228]">What You Get:</span>{" "}
                      Food, Swag Kit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Pass Mobile */}
          <div
            className="relative flex h-[110px] w-[340px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/clouds.png")' }}
            onMouseEnter={() => setMobileHoveredTicket("pro")}
            onMouseLeave={() => setMobileHoveredTicket(null)}
          >
            <img
              src="/right_cloud.png"
              alt="Left Cloud"
              width={160}
              height={80}
              className="absolute top-0 right-0"
            />
            <img
              src="/left_cloud.png"
              alt="Left Cloud"
              width={160}
              height={80}
              className="absolute top-0 left-0"
            />

            {/* Default State */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-1 transition-all duration-500 ease-in-out ${mobileHoveredTicket === "pro" ? "opacity-0" : "opacity-100"}`}
            >
              <h4 className="ticket_mobile">
                Pro <br /> Pass
              </h4>
              <div className="flex items-center justify-center rounded-lg bg-[#EBD228] px-4 py-1 text-black shadow-lg">
                <span className="all-inclusive-text !text-[7px]">
                  All Inclusive
                </span>
              </div>
            </div>

            {/* Hover State */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${mobileHoveredTicket === "pro" ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex h-full w-full rounded-3xl bg-[#071311B2] px-1 py-2">
                <div className="my-2 flex w-[25%] items-center justify-center border-r border-[#285968] px-1">
                  <h3 className="ticket-title-description text-center !text-[12px]">
                    Pro Pass
                  </h3>
                </div>
                <div className="flex w-[75%] flex-col items-start gap-1 px-4 text-left">
                  <h3 className="ticket-title text-left !text-[14px]">
                    250 PHP
                  </h3>
                  <p className="text-xs text-[#99EEDB]">
                    Ideal for attendees seeking more than the basics
                  </p>
                  <div className="text-xs text-[#99EEDB]">
                    <p>
                      <span className="text-[#ebd228]">What You Get:</span>{" "}
                      Food, Swag Kit, Workshop Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View Tickets*/}

        {/* Tickets */}
        <div className="mt-12 hidden w-full items-center justify-center gap-28 md:flex">
          <div
            className="relative flex h-[321px] w-[475px] items-center justify-center rounded-3xl border-[3px] border-[#00FFC6] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
            style={{ backgroundImage: 'url("/clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("regular")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                hoveredTicket === "regular" ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4 className="ticket-title text-center !text-[48px] !leading-[55px]">
                Regular <br /> Pass
              </h4>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                hoveredTicket === "regular" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description !text-[32px]">
                  Regular Pass
                </h3>
                <p className="ticket-description">
                  Perfect for attendees joining the core <br /> experience
                </p>
                <h3 className="ticket-title py-2 !text-[48px] !leading-[55px]">
                  150 PHP
                </h3>
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
            style={{ backgroundImage: 'url("/clouds.png")' }}
            onMouseEnter={() => setHoveredTicket("pro")}
            onMouseLeave={() => setHoveredTicket(null)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                hoveredTicket === "pro" ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4 className="ticket-title text-center !text-[48px] !leading-[55px]">
                Pro <br /> Pass
              </h4>
              <div className="absolute -right-2 bottom-14 mt-7 flex items-center justify-center rounded-lg bg-[#EBD228] px-7 py-1 text-black shadow-lg">
                <span className="all-inclusive-text !text-[12px]">
                  All Inclusive
                </span>
              </div>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                hoveredTicket === "pro" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full space-y-1 bg-[#071311B2] px-[32px] pt-[24px] pb-[10px]">
                <h3 className="ticket-title-description !text-[32px]">
                  Pro Pass
                </h3>
                <p className="ticket-description">
                  Ideal for attendees seeking more than <br /> the basics
                </p>
                <h3 className="ticket-title py-2 !text-[48px] !leading-[55px]">
                  250 PHP
                </h3>
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
        <div className="mt-16 flex w-full flex-col items-center justify-center gap-6 lg:mt-10">
          <a
            href="https://tinyurl.com/AWSSCD-RegistrationForm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="gradient-border w-[250px] lg:w-[450px]">
              <span className="text-[14px] font-bold lg:text-[25px]">
                Register Now
              </span>
            </button>
          </a>
          <div className="flex items-center justify-center">
            <h3 className="event-starts-in !text-[16px] lg:!text-[25px]">
              Event Starts in {daysLeft} Days
            </h3>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default Registration;
