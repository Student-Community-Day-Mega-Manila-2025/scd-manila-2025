"use client";

import SectionPage from "@/components/layout/section-page";
import React, { useState } from "react";
import faqs from "@/data/faqs.json";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <SectionPage
      id="faqs"
      className="relative overflow-hidden bg-[var(--background)] py-12 sm:py-16 lg:px-4"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">Need Help?</h3>
          <h2 className="venue-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="flex w-full max-w-[749px] flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex flex-col gap-3.5">
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group flex items-center justify-between gap-6 text-left transition-all duration-300 hover:text-[var(--Primary-Brand-50,#01D5A4)] hover:[text-shadow:_0_0_4px_#AEDCD1FF]"
                >
                  <span
                    className={`font-cinzel text-[18px] font-bold tracking-[0.452px] transition-all duration-300 sm:text-[20px] lg:text-[22.62px] ${
                      isOpen
                        ? "text-[#efe753]"
                        : "text-primary-500 group-hover:text-[var(--Primary-Brand-50,#01D5A4)] group-hover:[text-shadow:_0_0_4px_#01D5A5]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle Icon */}
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="2"
                      viewBox="0 0 22 2"
                      fill="none"
                      className="transition-all duration-300 group-hover:drop-shadow-[0_0_2px_#AEDCD1FF]"
                    >
                      <path
                        d="M22 1.00001L0 1.00001"
                        stroke="#efe753"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M11.1997 0.199707L11.1997 21.8003M22 11.0002L0.399414 11.0002"
                        stroke="var(--color-primary-500)"
                        strokeWidth="1.27063"
                        className="transition-all duration-300 group-hover:stroke-[var(--Primary-Brand-50,#01D5A4)] group-hover:drop-shadow-[0_0_1px_#AEDCD1FF]"
                      />
                    </svg>
                  )}
                </button>

                {/* Answer with animation */}
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

                {/* Divider */}
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
