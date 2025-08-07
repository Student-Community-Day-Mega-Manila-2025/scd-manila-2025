import SectionPage from "@/components/layout/section-page";
import React from "react";

const EventInfo = () => {
  return (
    <SectionPage id="event-info" className="relative h-full w-full">
      <div className="mx-auto flex h-fit w-full max-w-7xl flex-col lg:grid lg:h-screen lg:max-h-[650px] lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex w-full items-center justify-center p-2 lg:h-full lg:max-w-[600px] lg:px-4 lg:py-8">
          <p className="text-lg">
            <span className="font-cinzel text-secondary-600 text-xl font-bold">
              AWS Cloud Clubs Philippines{" "}
            </span>
            is excited to host the first{" "}
            <span className="text-secondary-600">
              AWS Student Community Day Mega Manila{" "}
            </span>
            this September 2025. Join us to learn from the story and advocacy of
            the community, industry, and academe experts, and many more
            AWSomeness.
          </p>
        </div>
        <div className="absolute top-0 left-16 -z-10 hidden h-[240px] w-[240px] lg:block">
          <img
            src="/4-leaves.png"
            alt="Leaves"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] -z-10 hidden h-[240px] w-[240px] lg:block">
          <img
            src="/4-leaves.png"
            alt="Leaves"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <img
            src="/sue-with-tree-stump.png"
            alt="Suee"
            className="h-full max-h-[500px] w-full max-w-[350px] object-contain"
          />
          <div className="absolute -top-4 -left-4 -z-10 h-[240px] w-[240px] lg:hidden">
            <img
              src="/4-leaves.png"
              alt="Leaves"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute top-1/2 -right-8 -z-10 h-[240px] w-[240px] lg:hidden">
            <img
              src="/4-leaves.png"
              alt="Leaves"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 hidden h-full lg:block">
        <img
          src="/clouds.png"
          alt="Event Cloud"
          className="h-full max-h-[600px] w-full object-contain opacity-10"
        />
      </div>
    </SectionPage>
  );
};

export default EventInfo;
