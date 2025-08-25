"use client";

import SectionPage from "@/components/layout/section-page";
import React, { useState } from "react";
import faqs from "@/data/faqs.json";

const FaqSection = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <SectionPage
      id="faqs"
      className="relative overflow-hidden bg-[var(--background)] py-12 sm:py-16 lg:px-4"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="faq-bg-moon">
          <img src="crescent-moon.png" alt="Crescent Moon" />
          <img src="2-clouds.png" alt="Clouds" className="clouds" />
          <div className="absolute top-[20%] right-0 h-[200px] w-[300px] rounded-full bg-[var(--Primary-Brand-50,#01D5A4)] opacity-50 blur-[80px]" />
        </div>
        <div className="absolute top-1/2 left-0 h-[200px] w-[200px] rounded-full bg-[var(--Primary-Brand-50,#01D5A4)] opacity-50 blur-[120px]" />
      </div>
      {/* --- FAQ CONTENTS --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 pb-2 text-left sm:mb-8">
          <h3 className="venue-subtitle">Need Help?</h3>
          <h2 className="venue-title">Frequently Asked Questions</h2>
        </div>
        <div className="flex w-full max-w-[749px] flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="flex flex-col gap-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group flex items-center justify-between gap-6 text-left transition-all duration-300 hover:text-[var(--Primary-Brand-50,#01D5A4)] hover:[text-shadow:_0_0_4px_#AEDCD1FF]"
                >
                  <span
                    className={`font-cinzel text-[16px] font-semibold tracking-[0.452px] transition-all duration-300 sm:text-[18px] lg:text-[20px] ${
                      isOpen
                        ? "text-[#efe753]"
                        : "text-primary-500 group-hover:text-[var(--Primary-Brand-50,#01D5A4)] group-hover:[text-shadow:_0_0_4px_#01D5A5]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex h-[22px] w-[22px] items-center justify-center">
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                        fill="none"
                        className="h-[22px] w-[22px] transition-all duration-300 group-hover:drop-shadow-[0_0_2px_#AEDCD1FF]"
                      >
                        <path d="M2 11H20" stroke="#efe753" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                        fill="none"
                        className="h-[22px] w-[22px] transition-all duration-300 group-hover:stroke-[var(--Primary-Brand-50,#01D5A4)] group-hover:drop-shadow-[0_0_2px_#AEDCD1FF]"
                      >
                        <path
                          d="M11 2V20M2 11H20"
                          stroke="var(--color-primary-500)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className="font-sans text-sm font-normal tracking-[0.08px] text-[color:var(--color-primary-500)] sm:text-base"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {faq.answer}
                  </p>
                </div>
                <div
                  className={`h-0 self-stretch border-b transition-colors duration-300 ${
                    isOpen ? "border-[#efe753]" : "border-primary-500"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionPage>
  );
};

export default FaqSection;
