"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";
import { navLinks } from "@/constants";
import CustomButton from "./CustomButton";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  // State to manage the mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling to section when a navigation link is clicked
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close the mobile menu first

    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay to allow menu closing animation
  };

  return (
    <>
      {/* Navbar section with fixed positioning and z-index for visibility */}
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          {/* Navbar container with styling for background blur and rounded borders */}
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 px-4 p-2 md:pr-2 items-center">
              {/* Logo Section */}
              <div>
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>
              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              {/* Mobile Menu Button & Authentication Buttons */}
              <div className="flex justify-end gap-4">
                {/* Mobile menu toggle button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>
                {/* Log In and Sign Up Buttons (visible on medium+ screens) */}
                <CustomButton
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </CustomButton>
                <CustomButton
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </CustomButton>
              </div>
            </div>
            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                    {/* Log In and Sign Up Buttons for Mobile */}
                    <CustomButton variant="secondary">Log In</CustomButton>
                    <CustomButton variant="primary">Sign Up</CustomButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
};

export default Navbar;
