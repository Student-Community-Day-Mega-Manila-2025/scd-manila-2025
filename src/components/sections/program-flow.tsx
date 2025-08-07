"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Sticky from "react-stickynode";
import programData from "@/data/program-flow.json";
import CustomDropdown from "@/components/common/CustomDropdown";
import SectionPage from "@/components/layout/section-page";

const ProgramFlow = () => {
  const [activeTrack, setActiveTrack] = useState(programData[0]?.id);
  const trackRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Handle dropdown selection
  const handleDropdownChange = (trackId: string) => {
    setActiveTrack(trackId);
    // Scroll to the corresponding track
    const targetElement = trackRefs.current[trackId];
    if (targetElement && containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = 150;
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
    <SectionPage
      id="program-flow"
      className="relative overflow-hidden bg-[var(--background)] py-12 sm:py-16 lg:px-4"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">Mark Your Moments</h3>
          <h2 className="venue-title">Program Flow</h2>
        </div>

        {/* Mobile Dropdown - Only visible on small screens */}
        <div className="mb-6 block md:hidden">
          <Sticky
            top={100}
            bottomBoundary="#program-main-content"
            innerZ={20}
            activeClass="is-sticky"
            releasedClass="is-released"
            enableTransforms={true}
          >
            <CustomDropdown
              options={programData.map((track) => ({
                value: track.id,
                label: track.trackName,
                count: track.activities.length,
              }))}
              value={activeTrack}
              onChange={handleDropdownChange}
              placeholder="Select a track"
            />
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
                      className={`flex h-auto max-h-16 w-full cursor-pointer items-center justify-between overflow-hidden rounded-3xl border border-white/20 bg-transparent px-[50px] py-[20px] transition-all duration-300 hover:border-white/40 ${
                        activeTrack === track.id
                          ? "bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] shadow-lg"
                          : "bg-transparent hover:bg-gradient-to-r hover:from-[rgba(1,213,165,0.50)] hover:via-[rgba(67,149,173,0.50)] hover:to-[rgba(199,223,230,0.50)] hover:shadow-lg"
                      }`}
                    >
                      <h4 className="text-md flex-1 truncate font-medium text-white">
                        {track.trackName}
                      </h4>
                      <div className="text-md ml-2 flex-shrink-0 font-medium text-white">
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
                className="mb-6 w-full scroll-mt-24 rounded-3xl border-1 border-white px-4 py-3 lg:mb-10 lg:px-9"
              >
                <div className="flex items-center justify-between gap-4 border-b border-white px-2 py-4 lg:gap-0 lg:px-4">
                  <h4 className="text-sm font-bold text-white lg:text-xl">
                    {track.trackName}
                  </h4>
                  <div className="min-w-fit cursor-pointer border-b-2 border-white text-sm font-medium text-white transition-opacity hover:opacity-80 lg:text-lg">
                    Open All
                  </div>
                </div>
                <div className="flex flex-col">
                  {track.activities.map((activity, index) => (
                    <div
                      key={`${activity.title}-${index}`}
                      className={`lg:text-md flex items-center justify-between gap-4 py-3 text-xs font-normal text-white lg:py-6 lg:font-bold ${
                        index < track.activities.length - 1
                          ? "border-b border-white"
                          : ""
                      }`}
                    >
                      <div className="flex max-w-[170px] min-w-[120px] items-center border-r border-white lg:pr-4">
                        {activity.time}
                      </div>
                      <div className="flex-1 lg:px-4">{activity.title}</div>
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
    </SectionPage>
  );
};

export default ProgramFlow;
