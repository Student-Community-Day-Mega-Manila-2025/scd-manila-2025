"use client";
import React from "react";
import SectionPage from "@/components/layout/section-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { programsTeam } from "@/data/programs-team";
import { multimediaTeam } from "@/data/multimedia-team";
import { operationsTeam } from "@/data/operations-team";
import { executivesTeam } from "@/data/executives-team";
import { websiteTeam } from "@/data/website-team";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const MeetTheTeamSection = () => {
  return (
    <SectionPage
      id="team"
      className="relative bg-[var(--background)] px-4 sm:py-16"
    >
      <div className="pointer-events-none absolute top-5 -right-30 z-20 hidden h-[450px] w-[250px] rounded-[40%_60%_30%_70%] bg-[#00ffc3f4] opacity-[60%] blur-[100px] lg:top-0 lg:-right-24 lg:block" />
      <div
        className="pointer-events-none absolute top-5 -right-30 z-10 hidden h-[650px] w-[600px] rounded-[40%_60%_30%_70%] opacity-95 blur-[70px] lg:top-0 lg:-right-70 lg:block"
        style={{
          background:
            "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
        }}
      />

      <div className="absolute top-100 -right-35 z-30 hidden h-[600px] w-[560px] lg:block">
        <Image src="/planet.png" alt="Planet" fill className="object-cover" />
      </div>
      <div
        className="pointer-events-none absolute top-100 -right-40 z-10 hidden h-[850px] w-[700px] rounded-[40%_60%_30%_70%] opacity-95 blur-[70px] lg:block"
        style={{
          background:
            "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
        }}
      />
      <div className="absolute top-190 right-20 z-30 hidden h-[200px] w-[400px] lg:block">
        <Image src="/Cloud-2.png" alt="Planet" fill className="object-cover" />
      </div>

      <div className="pointer-events-none absolute -right-30 bottom-25 z-20 hidden h-[550px] w-[250px] rounded-[40%_60%_30%_70%] bg-[#00ffc3f4] opacity-[60%] blur-[100px] lg:block" />
      <div
        className="pointer-events-none absolute -right-70 bottom-5 z-10 hidden h-[850px] w-[700px] rounded-[40%_60%_30%_70%] opacity-95 blur-[70px] lg:block"
        style={{
          background:
            "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-20 -bottom-25 z-20 hidden h-[400px] w-[400px] rounded-[40%_60%_30%_70%] opacity-95 blur-[70px] lg:block"
        style={{
          background:
            "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">People Behind the Scene</h3>
          <h2 className="venue-title">Meet the Team</h2>
        </div>

        <div className="space-y-6 md:space-y-16">
          <div className="relative sm:flex-row sm:items-center">
            <div
              className="absolute -top-5 -left-5 z-20 hidden h-[320px] w-1/2 items-center lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
              }}
            >
              <h3 className="font-cinzel mb-4 pl-12 text-left text-2xl font-extrabold text-white">
                WEBSITE
              </h3>
            </div>
            <h3 className="font-cinzel !text-left text-[16px] text-white lg:hidden">
              WEBSITE
            </h3>
            <div className="flex-1 overflow-hidden">
              <Slider {...settings}>
                {websiteTeam.map((member) => (
                  <div key={member.id} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative mb-4 flex h-[280px] w-[200px] items-center justify-center overflow-hidden rounded-xl border-2 border-[#01D5A4] bg-gray-300"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute -bottom-5 left-0 z-20 h-[120px] w-[120px]">
                          <Image
                            src="/clouds_front.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="z-20 h-full w-full opacity-50">
                          <Image
                            src="/clouds.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 z-20 flex w-fit flex-col justify-center px-2 text-left">
                          <p className="text-sm font-semibold text-[#EBE128]">
                            {member.role}
                          </p>
                          <h5 className="text-md font-bold text-white">
                            {member.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="relative sm:flex-row sm:items-center">
            <div
              className="absolute -top-5 -left-5 z-20 hidden h-[320px] w-1/2 items-center lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
              }}
            >
              <h3 className="font-cinzel mb-4 pl-12 text-left text-2xl font-extrabold text-white">
                PROGRAMS
              </h3>
            </div>
            <h3 className="font-cinzel !text-left text-[16px] text-white lg:hidden">
              PROGRAMS
            </h3>
            <div className="flex-1 overflow-hidden">
              <Slider {...settings}>
                {programsTeam.map((member) => (
                  <div key={member.id} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative mb-4 flex h-[280px] w-[200px] items-center justify-center overflow-hidden rounded-xl border-2 border-[#01D5A4] bg-gray-300"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute -bottom-5 left-0 z-20 h-[120px] w-[120px]">
                          <Image
                            src="/clouds_front.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="z-20 h-full w-full opacity-50">
                          <Image
                            src="/clouds.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 z-20 flex w-fit flex-col justify-center px-2 text-left">
                          <p className="text-sm font-semibold text-[#EBE128]">
                            {member.role}
                          </p>
                          <h5 className="text-md font-bold text-white">
                            {member.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="relative sm:flex-row sm:items-center">
            <div
              className="absolute -top-5 -left-5 z-20 hidden h-[320px] w-1/2 items-center lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
              }}
            >
              <h3 className="font-cinzel mb-4 pl-12 text-left text-2xl font-extrabold text-white">
                MULTIMEDIA
              </h3>
            </div>
            <h3 className="font-cinzel !text-left text-[16px] text-white lg:hidden">
              MULTIMEDIA
            </h3>
            <div className="flex-1 overflow-hidden">
              <Slider {...settings}>
                {multimediaTeam.map((member) => (
                  <div key={member.id} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative mb-4 flex h-[280px] w-[200px] items-center justify-center overflow-hidden rounded-xl border-2 border-[#01D5A4] bg-gray-300"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute -bottom-5 left-0 z-20 h-[120px] w-[120px]">
                          <Image
                            src="/clouds_front.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="z-20 h-full w-full opacity-50">
                          <Image
                            src="/clouds.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 z-20 flex w-fit flex-col justify-center px-2 text-left">
                          <p className="text-sm font-semibold text-[#EBE128]">
                            {member.role}
                          </p>
                          <h5 className="text-md font-bold text-white">
                            {member.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="relative sm:flex-row sm:items-center">
            <div
              className="absolute -top-5 -left-5 z-20 hidden h-[320px] w-1/2 items-center lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
              }}
            >
              <h3 className="font-cinzel mb-4 pl-12 text-left text-2xl font-extrabold text-white">
                OPERATIONS
              </h3>
            </div>
            <h3 className="font-cinzel !text-left text-[16px] text-white lg:hidden">
              OPERATIONS
            </h3>
            <div className="flex-1 overflow-hidden">
              <Slider {...settings}>
                {operationsTeam.map((member) => (
                  <div key={member.id} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative mb-4 flex h-[280px] w-[200px] items-center justify-center overflow-hidden rounded-xl border-2 border-[#01D5A4] bg-gray-300"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute -bottom-5 left-0 z-20 h-[120px] w-[120px]">
                          <Image
                            src="/clouds_front.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="z-20 h-full w-full opacity-50">
                          <Image
                            src="/clouds.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 z-20 flex w-fit flex-col justify-center px-2 text-left">
                          <p className="text-sm font-semibold text-[#EBE128]">
                            {member.role}
                          </p>
                          <h5 className="text-md font-bold text-white">
                            {member.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="relative sm:flex-row sm:items-center">
            <div
              className="absolute -top-5 -left-5 z-20 hidden h-[320px] w-1/2 items-center lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #071311 49.52%, rgba(7, 19, 17, 0.00) 100%)",
              }}
            >
              <h3 className="font-cinzel mb-4 pl-12 text-left text-2xl font-extrabold text-white">
                EXECUTIVES
              </h3>
            </div>
            <h3 className="font-cinzel !text-left text-[16px] text-white lg:hidden">
              EXECUTIVES
            </h3>
            <div className="flex-1 overflow-hidden">
              <Slider {...settings}>
                {executivesTeam.map((member) => (
                  <div key={member.id} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="relative mb-4 flex h-[280px] w-[200px] items-center justify-center overflow-hidden rounded-xl border-2 border-[#01D5A4] bg-gray-300"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute -bottom-5 left-0 z-20 h-[120px] w-[120px]">
                          <Image
                            src="/clouds_front.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="z-20 h-full w-full opacity-50">
                          <Image
                            src="/clouds.png"
                            alt="Clouds"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 z-20 flex w-fit flex-col justify-center px-2 text-left">
                          <p className="text-sm font-semibold text-[#EBE128]">
                            {member.role}
                          </p>
                          <h5 className="text-md font-bold text-white">
                            {member.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default MeetTheTeamSection;
