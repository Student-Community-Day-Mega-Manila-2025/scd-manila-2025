import React from "react";

const EventInfo = () => {
  return (
    <section
      id="event-info"
      className="relative grid h-[calc(100vh-97px)] w-full grid-cols-2 border border-blue-500"
    >
      <div className="flex h-full w-full max-w-[600px] items-center justify-center px-4 py-8">
        <p className="text-xl">
          <span className="font-cinzel text-secondary-600 text-3xl font-bold">
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
      <div className="relative flex h-full flex-col items-center justify-center border border-red-500">
        <div className="z-10 flex h-full w-full items-center justify-center">
          <img
            src="/suee.png"
            alt="Suee"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
        {/* <div className="h-fit w-fit">
            <img
              src={"/tree-stump.png"}
              alt="Tree Stump"
              className="h-full w-full object-contain"
            />
          </div> */}
      </div>
    </section>
  );
};

export default EventInfo;
