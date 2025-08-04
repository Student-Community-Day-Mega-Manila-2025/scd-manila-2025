import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-t border-[var(--background)] bg-[var(--background)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      style={{ borderRadius: "50px 50px 0 0" }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-12">
          <div className="flex flex-col space-y-4 lg:flex-1 lg:space-y-6">
            <div className="flex flex-col space-y-3 lg:space-y-4">
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                <img
                  src="/title-notilt-1.png"
                  alt="Mega Manila 2025 Logo"
                  width={64}
                  height={64}
                  className="h-12 w-auto self-center object-contain sm:h-14 sm:self-start lg:h-16"
                />
                <p className="font-cinzel text-center text-[20px] leading-tight font-bold text-white sm:text-left sm:text-[24px] lg:text-[32px]">
                  AWS Student Community Day
                  <br />
                  Mega Manila 2025
                </p>
              </div>

              <p className="font-montserrat text-center text-[16px] text-white sm:text-left sm:text-[17px] lg:text-[19px]">
                Student Diversity is Cloud Accessibility
              </p>
            </div>

            <div className="mt-6 flex justify-center space-x-4 sm:mt-0 sm:justify-start sm:space-x-6">
              <a
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#01d5a4]"
                aria-label="TikTok"
              >
                <FaTiktok size={20} className="sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#01d5a4]"
                aria-label="Facebook"
              >
                <FaFacebook size={20} className="sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#01d5a4]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-6 sm:gap-8 lg:flex-1 lg:justify-end lg:gap-16">
            <div className="flex max-w-[140px] flex-1 flex-col space-y-3 sm:max-w-none lg:space-y-4">
              <p className="font-montserrat text-left text-[16px] font-bold text-white sm:text-[17px] lg:text-[18px]">
                About Us
              </p>
              <ul className="space-y-1.5 text-white lg:space-y-2">
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Description
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Venue Information
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Speakers
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Sponsors
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex max-w-[140px] flex-1 flex-col space-y-3 sm:max-w-none lg:space-y-4">
              <p className="font-montserrat text-left text-[16px] font-semibold text-white sm:text-[17px] lg:text-[18px]">
                General
              </p>
              <ul className="space-y-1.5 text-white lg:space-y-2">
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    FAQs
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Program Flow
                  </a>
                </li>
                <li className="text-left">
                  <a
                    href="#"
                    className="font-montserrat text-[12px] transition-colors duration-200 hover:text-[#01d5a4] sm:text-[15px] lg:text-[16px]"
                  >
                    Registration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 pb-4 sm:mt-10 sm:pt-7 sm:pb-6 lg:mt-12 lg:pt-8 lg:pb-8">
        <p className="font-inter px-4 text-center text-[14px] text-white sm:text-[15px] lg:text-[16px]">
          © 2025 AWS Cloud Club Philippines. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
