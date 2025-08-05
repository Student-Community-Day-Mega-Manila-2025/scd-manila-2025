"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Sticky from "react-stickynode";

// You can replace this with your actual event data fetched from an API
const programData = [
  {
    id: "track-1",
    trackName: "Morning Plenary",
    activities: [
      {
        time: "8:00 AM - 9:30 AM",
        title: "Registration and Check-in of Attendees",
      },
      {
        time: "9:30 AM - 10:00 AM",
        title: "Opening Remarks & Welcome Address",
      },
      { time: "10:00 AM - 10:30 AM", title: "Keynote: The Dawn of a New Era" },
      { time: "10:30 AM - 11:00 AM", title: "Networking Break" },
    ],
  },
  {
    id: "track-2",
    trackName: "Technical Track A",
    activities: [
      {
        time: "11:30 AM - 12:30 PM",
        title: "Deep Dive into Quantum Computing",
      },
      {
        time: "12:30 PM - 1:30 PM",
        title: "Architecting Scalable Microservices",
      },
      { time: "1:30 PM - 2:30 PM", title: "Lunch Break" },
      {
        time: "2:30 PM - 3:30 PM",
        title: "Advanced State Management Patterns",
      },
      { time: "3:30 PM - 4:30 PM", title: "Real-time Data with WebSockets" },
    ],
  },
  {
    id: "track-3",
    trackName: "Business & Strategy Track",
    activities: [
      {
        time: "11:30 AM - 12:30 PM",
        title: "Market Disruption and Innovation",
      },
      { time: "12:30 PM - 1:30 PM", title: "Leading High-Performance Teams" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch Break" },
      { time: "2:30 PM - 3:30 PM", title: "Data-Driven Decision Making" },
      {
        time: "3:30 PM - 4:30 PM",
        title: "Future-Proofing Your Business Model",
      },
    ],
  },
  {
    id: "track-4",
    trackName: "Closing Remarks",
    activities: [
      { time: "4:30 PM - 5:30 PM", title: "Panel Discussion: What's Next?" },
      { time: "5:30 PM - 6:00 PM", title: "Awards and Closing Ceremony" },
      { time: "6:00 PM - 7:00 PM", title: "Cocktail & Networking Hour" },
    ],
  },
];

const ProgramFlow = () => {
  const [activeTrack, setActiveTrack] = useState(programData[0]?.id || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const trackRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Handle dropdown selection
  const handleDropdownChange = (trackId: string) => {
    setActiveTrack(trackId);
    setIsDropdownOpen(false);
    // Scroll to the corresponding track
    const targetElement = trackRefs.current[trackId];
    if (targetElement && containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = 150; // Adjust this value to account for any fixed headers
      const elementPosition = targetElement.offsetTop + containerTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll-based active track detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const containerTop =
        containerRef.current.getBoundingClientRect().top + scrollPosition;
      const offset = 200;

      // Find which track section is currently in view
      for (let i = programData.length - 1; i >= 0; i--) {
        const trackElement = trackRefs.current[programData[i].id];
        if (trackElement) {
          const elementTop = trackElement.offsetTop + containerTop;
          if (scrollPosition + offset >= elementTop) {
            setActiveTrack(programData[i].id);
            break;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler);
    window.addEventListener("resize", throttledScrollHandler);

    // Initial call to set active track
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("resize", throttledScrollHandler);
    };
  }, []);

  const getActiveTrackName = () => {
    const activeTrackData = programData.find(
      (track) => track.id === activeTrack
    );
    return activeTrackData?.trackName || programData[0]?.trackName || "";
  };

  return (
    <section
      id="program-flow"
      className="relative overflow-hidden bg-[var(--background)] px-4 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">Mark Your Moments</h3>
          <h2 className="venue-title">Program Flow</h2>
        </div>

        {/* Mobile Dropdown - Only visible on small screens */}
        <div className="mb-6 block md:hidden">
          <Sticky
            top={110}
            bottomBoundary="#program-main-content"
            innerZ={20}
            activeClass="is-sticky"
            releasedClass="is-released"
            enableTransforms={true}
          >
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex w-full items-center justify-between rounded-3xl border border-white/20 bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] px-6 py-4 text-white shadow-lg"
              >
                <span className="text-lg font-semibold">
                  {getActiveTrackName()}
                </span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 left-0 z-30 mt-2 rounded-3xl border border-white/20 bg-[var(--background)] shadow-lg">
                  {programData.map((track) => (
                    <button
                      key={track.id}
                      onClick={() => handleDropdownChange(track.id)}
                      className={`w-full px-6 py-4 text-left text-white transition-colors hover:bg-white/10 ${
                        activeTrack === track.id ? "bg-white/20" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{track.trackName}</span>
                        <span className="text-sm opacity-70">
                          {track.activities.length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Sticky>
        </div>

        <div
          ref={containerRef}
          className="relative flex flex-col gap-8 md:flex-row"
        >
          {/* --- Left Sticky Sidebar - Hidden on mobile --- */}
          <div className="hidden w-full md:block md:w-80 lg:w-96">
            <Sticky
              top={110} // Distance from top when sticky (adjust based on your header height)
              bottomBoundary="#program-main-content"
              innerZ={10}
              activeClass="is-sticky"
              releasedClass="is-released"
              enableTransforms={true}
            >
              <aside className="w-full">
                <ul className="flex flex-col gap-[22px]">
                  {programData.map((track) => (
                    <div
                      key={track.id}
                      onClick={() => handleDropdownChange(track.id)}
                      className={`flex h-auto w-full cursor-pointer items-center justify-between rounded-3xl border border-white/20 bg-transparent px-[50px] py-[20px] transition-all duration-300 hover:border-white/40 ${
                        activeTrack === track.id
                          ? "bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] shadow-lg"
                          : "bg-transparent hover:bg-gradient-to-r hover:from-[rgba(1,213,165,0.50)] hover:via-[rgba(67,149,173,0.50)] hover:to-[rgba(199,223,230,0.50)] hover:shadow-lg"
                      }`}
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {track.trackName}
                      </h4>
                      <div className="text-lg font-bold text-white">
                        {track.activities.length}
                      </div>
                    </div>
                  ))}
                </ul>
              </aside>
            </Sticky>
          </div>

          {/* --- Right Content Area --- */}
          <main
            ref={mainContentRef}
            id="program-main-content"
            className="flex-1 md:ml-8 lg:ml-12"
          >
            {programData.map((track) => (
              <div
                key={track.id}
                ref={(el) => {
                  trackRefs.current[track.id] = el;
                }}
                className="mb-10 w-full scroll-mt-24 rounded-3xl border-1 border-white px-9 py-3"
              >
                <div className="flex items-center justify-between border-b border-white px-4 py-4">
                  <h4 className="text-xl font-bold text-white">
                    {track.trackName}
                  </h4>
                  <div className="cursor-pointer border-b-2 border-white text-lg font-medium text-white transition-opacity hover:opacity-80">
                    Open All
                  </div>
                </div>
                <div className="flex flex-col">
                  {track.activities.map((activity, index) => (
                    <div
                      key={`${activity.title}-${index}`}
                      className={`text-md flex items-center justify-between gap-4 py-6 font-bold text-white ${
                        index < track.activities.length - 1
                          ? "border-b border-white"
                          : ""
                      }`}
                    >
                      <div className="min-w-[170px] border-r border-white pr-4">
                        {activity.time}
                      </div>
                      <div className="flex-1 px-4">{activity.title}</div>
                      <div className="cursor-pointer transition-opacity hover:opacity-80">
                        <Image
                          src="/plus.svg"
                          alt="plus"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
