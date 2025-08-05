"use client";

import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <div
        className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] p-[1px]"
        onClick={toggleDropdown}
      >
        <div className="text-md relative w-full rounded-xl bg-[var(--background)] px-6 py-3 font-medium text-white shadow-lg">
          <div className="flex items-center justify-between">
            <span className="truncate">
              {selectedOption ? (
                <>
                  {selectedOption.label}
                  {selectedOption.count && ` (${selectedOption.count})`}
                </>
              ) : (
                placeholder
              )}
            </span>
            <svg
              className={`h-5 w-5 text-white transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 rounded-3xl bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] p-[1px] shadow-lg">
          <div className="max-h-60 overflow-y-auto rounded-3xl bg-[var(--background)] py-2">
            {options.map((option) => (
              <div
                key={option.value}
                className={`cursor-pointer px-6 py-3 text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-[rgba(1,213,165,0.20)] hover:via-[rgba(67,149,173,0.20)] hover:to-[rgba(199,223,230,0.20)] ${
                  value === option.value
                    ? "bg-gradient-to-r from-[rgba(1,213,165,0.30)] via-[rgba(67,149,173,0.30)] to-[rgba(199,223,230,0.30)]"
                    : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate">{option.label}</span>
                  {option.count && (
                    <span className="ml-2 text-sm opacity-80">
                      ({option.count})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
