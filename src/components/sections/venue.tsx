"use client";

import SectionPage from "@/components/layout/section-page";
import React, { useState, useMemo } from "react";
import { FaRegClock, FaDirections } from "react-icons/fa";
import { IoLocationOutline, IoLink } from "react-icons/io5";

const MAP_SOURCES = {
  oneAyala:
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30891.84298517135!2d121.02045107577025!3d14.571681848296034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3397c95b0494f8cf%3A0x38bcb0d8f0bb8b77!2sOne%20Ayala%20(Ayala%20Malls)%2C%20Ayala%20Avenue%2C%20Makati%20City%2C%20Metro%20Manila!3m2!1d14.550449299999999!2d121.0278251!4m5!1s0x3397c9cdec00e801%3A0x90ebd52dbd050466!2s80%20Shaw%20Blvd%2C%20Mandaluyong%20City%2C%201552%20Metro%20Manila!3m2!1d14.592526399999999!2d121.0285593!5e0!3m2!1sen!2sph!4v1754241806282!5m2!1sen!2sph",
  marketMarket:
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15457.703907136813!2d121.04659348193898!3d14.56232217322356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3397c8f2ca652c83%3A0x62c8011c6abe662e!2sMarket*21%20Market*21%2C%20McKinley%20Parkway%2C%20Taguig%2C%20Metro%20Manila!3m2!1d14.5502545!2d121.0561214!4m5!1s0x3397c9cdec00e801%3A0x90ebd52dbd050466!2s80%20Shaw%20Blvd%2C%20Mandaluyong%20City%2C%201552%20Metro%20Manila!3m2!1d14.592526399999999!2d121.0285593!5e0!3m2!1sen!2sph!4v1754241863425!5m2!1sen!2sph",
  default:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2787320446159!2d121.02791556951611!3d14.592526399118313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9cdec00e801%3A0x90ebd52dbd050466!2sJos%C3%A9%20Rizal%20University!5e0!3m2!1sen!2sph!4v1754239318551!5m2!1sen!2sph",
} as const;

const VENUE_INFO = [
  {
    icon: FaRegClock,
    title: "When",
    details: ["September 17, 2025 | Wednesday", "9:00 AM to 6:00 PM"],
    hasLink: false,
    link: "",
  },
  {
    icon: IoLocationOutline,
    title: "Where",
    details: [
      "Jose Rizal University | 80 Shaw Blvd, Mandaluyong City, 1552 Metro Manila",
    ],
    hasLink: true,
    link: "https://maps.app.goo.gl/dqeNSAvj6cKMDQed7",
  },
] as const;

const DIRECTION_BUTTONS = [
  { key: "oneAyala", label: "From One Ayala" },
  { key: "marketMarket", label: "From Market Market" },
] as const;

const DirectionButton: React.FC<{
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ isSelected, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative flex h-12 flex-1 items-center justify-center rounded-3xl text-sm font-medium text-white transition-all duration-200 sm:h-16 sm:w-44 sm:flex-none sm:text-base ${
      isSelected
        ? ""
        : "border border-white/20 bg-transparent hover:border-white/40"
    }`}
    style={{
      background: isSelected
        ? "linear-gradient(100deg, #01D5A5 4.76%, #4395AD 37.42%, #8EBFCE 72.12%, #C7DFE6 105.37%)"
        : "transparent",
      fontFamily: "Inter",
    }}
  >
    <span className="relative z-10">{children}</span>
  </button>
);

const Venue = () => {
  const [selectedDirection, setSelectedDirection] = useState<string | null>(
    null
  );

  const handleDirectionToggle = (direction: string) => {
    setSelectedDirection((prev) => (prev === direction ? null : direction));
  };

  const iframeSrc = useMemo(() => {
    return (
      MAP_SOURCES[selectedDirection as keyof typeof MAP_SOURCES] ||
      MAP_SOURCES.default
    );
  }, [selectedDirection]);

  const mapTitle = useMemo(() => {
    if (selectedDirection === "oneAyala")
      return "Directions from One Ayala to José Rizal University";
    if (selectedDirection === "marketMarket")
      return "Directions from Market Market to José Rizal University";
    return "José Rizal University - Event Venue";
  }, [selectedDirection]);

  return (
    <SectionPage
      id="venue"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      <div className="pointer-events-none absolute top-1/4 right-0 h-[300px] w-[120px] -rotate-[42.5deg] rounded-[50%_30%_70%_40%] bg-[#02C397] opacity-20 blur-[80px] sm:h-[499px] sm:w-[197px] sm:blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[250px] w-[200px] rounded-[40%_60%_30%_70%] bg-[#02C397] opacity-15 blur-[100px] sm:h-[400px] sm:w-[300px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[300px] w-[150px] -rotate-[53.6deg] rounded-[60%_40%_30%_70%] bg-[rgba(0,255,197,0.5)] blur-[60px] sm:h-[457px] sm:w-[224px] sm:blur-[80px]" />
      <div className="pointer-events-none absolute top-0 right-1/3 h-[400px] w-[200px] rounded-[30%_70%_40%_60%] bg-[var(--background)] opacity-80 blur-[120px] sm:h-[688px] sm:w-[300px] sm:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">Know Where To Go</h3>
          <h2 className="venue-title">Venue Information</h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 text-white">
            {VENUE_INFO.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#01D5A5] via-[#8EBFCE] via-[#4395AD] to-[#C7DFE6] sm:h-[42px] sm:w-[42px]">
                      <IconComponent className="text-base text-white sm:text-lg" />
                    </div>
                    <p
                      className="text-lg font-bold sm:text-xl lg:text-[22px]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {info.title}
                    </p>
                  </div>
                  <div className="ml-[45px] space-y-1 sm:ml-[52px]">
                    {info.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 sm:items-center"
                      >
                        {/* Mobile view: Link inline with text */}
                        <div className="flex flex-wrap items-start gap-2 sm:hidden">
                          <p
                            className="text-base leading-relaxed font-normal sm:text-lg lg:text-[19px]"
                            style={{ fontFamily: "Inter" }}
                          >
                            {detail}
                          </p>
                          {info.hasLink && idx === 0 && (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-white transition-colors hover:text-gray-300"
                            >
                              <IoLink className="text-xl" />
                            </a>
                          )}
                        </div>

                        {/* Desktop view: Original layout */}
                        <div className="hidden w-full gap-2 sm:flex sm:items-center">
                          <p
                            className="text-base leading-relaxed font-normal sm:text-lg lg:text-[19px]"
                            style={{ fontFamily: "Inter" }}
                          >
                            {detail}
                          </p>
                          {info.hasLink && idx === 0 && (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 flex-shrink-0 text-white transition-colors hover:text-gray-300"
                            >
                              <IoLink className="text-2xl" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#01D5A5] via-[#8EBFCE] via-[#4395AD] to-[#C7DFE6] sm:h-[42px] sm:w-[42px]">
                  <FaDirections className="text-base text-white sm:text-lg" />
                </div>
                <p
                  className="text-lg font-bold sm:text-xl lg:text-[22px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Direction
                </p>
              </div>

              <div className="mt-4 flex flex-row justify-center gap-2 sm:gap-3 lg:ml-[52px] lg:justify-start">
                {DIRECTION_BUTTONS.map(({ key, label }) => (
                  <DirectionButton
                    key={key}
                    isSelected={selectedDirection === key}
                    onClick={() => handleDirectionToggle(key)}
                  >
                    {label}
                  </DirectionButton>
                ))}
              </div>
            </div>
          </div>

          <div className="h-64 w-full sm:h-80 lg:h-[450px]">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              className="rounded-[15px] border-0 sm:rounded-[30px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={mapTitle}
            />
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default Venue;
