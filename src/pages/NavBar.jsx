import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import lab from "../assests/motionlab.png";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Animations", href: "/animation" },
    { name: "About", href: "about" },
    // { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={lab}
            alt="AnimateKit logo"
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />

          <span className="text-lg font-black uppercase tracking-wide text-[#171b2b] sm:text-xl">
            AnimateKit
          </span>
        </Link>

        {/* Desktop design */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative py-5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#7757ff]"
                    : "text-[#555b70] hover:text-[#7757ff]"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#7757ff]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">

          <a
            href="https://github.com/rajul2911"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#24292f] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#24292f] hover:shadow-md"
          >
            <FaGithub className="text-[17px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/rajulgupta2911/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0A66C2] hover:shadow-md"
          >
            <FaLinkedinIn className="text-[16px]" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajulgupta2911@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#171b2b] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#171b2b] hover:shadow-md"
          >
            <MdEmail className="text-[18px]" />
          </a>
        </div>

          {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-[#171b2b] transition-colors hover:bg-gray-100 md:hidden"
        >
          {isOpen ? (
            <FaXmark className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>

          {/* Mobile design */}
      {isOpen && (
        <div className="border-t border-gray-200/70 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">

          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-gray-100 py-3 text-sm font-medium ${
                    isActive
                      ? "text-[#7757ff]"
                      : "text-[#555b70] hover:text-[#7757ff]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2">

            <a
              href="https://github.com/rajul2911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#24292f] text-white transition-all hover:bg-white hover:text-[#24292f] hover:shadow-md"
            >
              <FaGithub className="text-[17px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/rajulgupta2911/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2] text-white transition-all hover:bg-white hover:text-[#0A66C2] hover:shadow-md"
            >
              <FaLinkedinIn className="text-[16px]" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rajulgupta2911@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#171b2b] text-white transition-all hover:bg-white hover:text-[#171b2b] hover:shadow-md"
            >
              <MdEmail className="text-[18px]" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;