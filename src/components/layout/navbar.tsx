"use client";
import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { FaChevronRight } from "react-icons/fa";
import RegisterNowButton from "../common/RegisterNowButton";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#event-info", label: "About Event" },
  { href: "#program-flow", label: "Program" },
  { href: "#sponsors-and-partners", label: "Sponsors" },
  { href: "#faqs", label: "FAQs" },
  { href: "#team", label: "Team" },
];

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  desktop?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  onClick,
  className = "",
  desktop = false,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={
      (desktop
        ? "py-2 text-base tracking-wide transition-colors duration-200 " +
          (!isActive ? "hover-white-shadow" : "")
        : "block flex w-full items-center justify-between rounded px-2 py-2 text-base transition-colors duration-200 ") +
      (isActive
        ? "font-bold text-[var(--foreground)]" +
          (desktop ? " underline decoration-[rgba(1,213,164,0.5)]" : "")
        : "font-normal text-white hover:text-white") +
      " " +
      className
    }
    aria-current={isActive ? "page" : undefined}
  >
    {desktop ? (
      label
    ) : (
      <>
        <span>{label}</span>
        <FaChevronRight
          className="ml-3 text-lg text-[var(--foreground)]"
          aria-hidden="true"
        />
      </>
    )}
  </a>
);

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNavClick = (id: string) => {
    setSelected(id);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(1,213,164,0.25)] bg-[var(--background)] px-8 py-4 font-sans shadow-md">
      <div className="relative mx-auto flex h-16 max-w-screen-xl items-center gap-4 sm:gap-8">
        <div className="z-10 mr-2 sm:hidden">
          <HamburgerIcon
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <a
          href="#hero"
          className="absolute left-1/2 flex -translate-x-1/2 items-center no-underline sm:static sm:left-auto sm:translate-x-0"
          aria-label="Go to home section"
        >
          <img
            src="/title-notilt 1.png"
            alt="Mega Manila 2025 Logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </a>
        <ul className="m-0 hidden list-none gap-8 p-0 sm:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = selected === id;
            return (
              <li key={link.href} className="group">
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={isActive}
                  onClick={() => handleNavClick(id)}
                  desktop
                />
              </li>
            );
          })}
        </ul>
        <div className="ml-auto hidden sm:flex">
          <RegisterNowButton href="#register" />
        </div>
        {menuOpen && (
          <div className="animate-fade-in fixed inset-0 top-25 z-50 h-[60vh] w-full overflow-y-auto bg-[var(--background)] sm:hidden">
            <ul className="flex flex-col items-start gap-2 p-4">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = selected === id;
                return (
                  <li key={link.href} className="w-full">
                    <NavLink
                      href={link.href}
                      label={link.label}
                      isActive={isActive}
                      onClick={() => handleNavClick(id)}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="mt-[50px] flex justify-center">
              <RegisterNowButton href="#register" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
