import SectionPage from "@/components/layout/section-page";
import React from "react";

const EventInfo = () => {
  return (
    <SectionPage id="event-info" className="relative">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col lg:grid lg:h-[calc(100vh-97px)] lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex h-fit w-full items-center justify-center px-4 py-8 lg:h-full lg:max-w-[600px]">
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
        <div className="relative flex h-full w-full flex-col items-center justify-center border border-red-500">
          <img
            src="/suee.png"
            alt="Suee"
            className="h-full max-h-full w-full max-w-full object-contain"
          />
          <img
            src="/tree-stump.png"
            alt="Suee"
            className="h-full max-h-full w-full max-w-full object-contain"
          />
        </div>
      </div>
    </SectionPage>
  );
};

export default EventInfo;
