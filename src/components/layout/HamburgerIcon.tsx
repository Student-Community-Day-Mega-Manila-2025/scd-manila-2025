import React from "react";

interface Props {
  open: boolean;
  onClick: () => void;
}

const HamburgerIcon: React.FC<Props> = ({ open, onClick }) => (
  <button
    className="flex h-10 w-10 flex-col items-center justify-center focus:outline-none"
    onClick={onClick}
    aria-label="Toggle navigation menu"
  >
    <span
      className={`mb-1.5 block h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
    />
    <span
      className={`mb-1.5 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
    />
    <span
      className={`block h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
    />
  </button>
);

export default HamburgerIcon;
