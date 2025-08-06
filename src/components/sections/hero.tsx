import SectionPage from "@/components/layout/section-page";
import React from "react";

const GradientCircle = ({ className }: { className: string }) => {
  return <div className={`-z-10 rounded-full ${className}`} />;
};

const Title = () => {
  return (
    <div className="hero-title z-50 flex h-[calc(100vh-97px)] w-full flex-col items-center justify-center transition-all">
      <p className="hero-title-subheading font-subheading text-secondary-600 font-bold">
        AWS Cloud Club
      </p>
      <div className="hero-title-heading font-heading bg-[linear-gradient(125deg,_#01D5A5_2.58%,_#99EEDB_59.86%,_#529DB3_93.48%)] bg-clip-text leading-none font-bold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-shadow-[4px_4px_0px_rgba(0,0,0,0.10)]">
        <p>Student Community Day</p>
      </div>
      <p className="hero-title-subheading font-subheading text-secondary-600 font-bold">
        Mega Manila 2025
      </p>
    </div>
  );
};

const EllipseBorder = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute -z-10 rounded-full border border-[#4395AD] ${className}`}
    />
  );
};

const RainbowStreak = ({ className }: { className: string }) => {
  return (
    <svg
      width="271"
      height="321"
      viewBox="0 0 271 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M412.906 -342.76C455.541 66.75 -5.40148 -228.336 3.28308 320.469"
        stroke="url(#paint0_linear_63_48)"
        strokeWidth="6.23053"
      />
      <defs>
        <linearGradient
          id="paint0_linear_63_48"
          x1="286.102"
          y1="345.767"
          x2="221.557"
          y2="-324.329"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0527799" stopColor="#02C397" stopOpacity="0" />
          <stop offset="1" stopColor="#02C397" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Clouds = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute -z-10 rounded-full bg-[url('/clouds.png')] bg-cover bg-center ${className}`}
    >
      <img
        src="/clouds.png"
        alt="Clouds"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

const FourPointedStar = ({ className }: { className: string }) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-pulse text-[#23FFAA] opacity-80 drop-shadow-[0_0_10px_rgba(35,255,170,0.5)] ${className}`}
      // className={`text-[#23FFAA] opacity-80 drop-shadow-[0_0_10px_rgba(35,255,170,0.5)] ${className}`}
    >
      <path
        d="M4.84341 12.3736C4.41224 12.2641 4.14513 11.8783 4.20724 11.4442C4.70092 7.56218 4.30727 6.90434 0.581453 5.52071C0.152927 5.35795 -0.0875571 4.92496 0.0295586 4.52276C0.148285 4.11499 0.58123 3.86493 1.04228 3.91596C5.00764 4.38858 5.60759 4.07295 7.38715 0.52333C7.58537 0.129722 8.01292 -0.0797097 8.4381 0.0282227C8.87527 0.139193 9.13637 0.523419 9.08623 0.960599C8.58222 4.834 8.97588 5.49181 12.6957 6.87395C13.1346 7.04533 13.3722 7.46563 13.252 7.87898C13.1349 8.28119 12.7139 8.53429 12.2408 8.48022C8.26626 8.01726 7.67392 8.32882 5.9063 11.8814C5.69451 12.2777 5.26261 12.4799 4.84341 12.3736Z"
        fill="url(#paint0_radial_63_54)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_63_54"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.89784 11.4469) rotate(-139.475) scale(9.67367 9.83398)"
        >
          <stop stopColor="#155234" />
          <stop offset="0.0001" stopColor="#02C397" />
          <stop offset="1" stopColor="#23FFAA" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const GlowingDot = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute -z-10 h-2 w-2 rounded-full bg-[#02C397] opacity-80 drop-shadow-[0_0_10px_rgba(35,255,170,0.5)] ${className}`}
    />
  );
};

const Hero = () => {
  return (
    <SectionPage id="hero" className="h-screen py-0!">
      <Clouds className="hero-clouds aspect-square opacity-40" />
      <GradientCircle className="absolute hidden bg-[#008B9C] opacity-50 blur-[280px] lg:top-12 lg:left-12 lg:block lg:h-[450px] lg:w-[450px] xl:top-16 xl:left-20 xl:h-[600px] xl:w-[600px]" />
      <EllipseBorder className="hero-ellipse" />
      <Title />

      <GradientCircle className="absolute top-12 right-24 -z-20 h-[300px] w-[180px] bg-[#79CEE7] opacity-70 blur-[120px]" />
      <RainbowStreak className="absolute top-8 right-24 -z-10 h-1/2 w-[20%] blur-[20px]" />

      <FourPointedStar className="twinkle absolute top-80 left-1/2 -z-10 h-8 w-8" />
      <FourPointedStar className="twinkle absolute top-96 right-1/5 -z-10 h-4 w-4" />
      <FourPointedStar className="twinkle absolute right-1/3 bottom-1/4 -z-10 h-6 w-6 opacity-40!" />
      <FourPointedStar className="twinkle absolute bottom-1/4 left-1/5 -z-10 h-4 w-4" />
      <FourPointedStar className="twinkle absolute bottom-1/5 left-24 -z-10 h-7 w-7 opacity-80!" />
      <FourPointedStar className="twinkle absolute bottom-32 left-32 -z-10 h-5 w-5 opacity-50!" />

      <GlowingDot className="absolute top-1/4 right-1/4 -z-10" />
      <GlowingDot className="absolute top-1/2 right-24 -z-10" />
    </SectionPage>
  );
};

export default Hero;
