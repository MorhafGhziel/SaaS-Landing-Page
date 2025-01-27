"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";
import CustomButton from "./CustomButton";
import { navLinks } from "@/constants";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container max-w-5xl">
        <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3 px-4 p-2 md:pr-2 items-center">
            <div>
              <Image
                src={logoImage}
                alt="Layers Logo"
                className="h-9 md:h-auto w-auto"
              />
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {" "}
                    {link.label}{" "}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
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
                className="feather feather-menu md:hidden"
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
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
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
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                  <CustomButton variant="secondary">Log In</CustomButton>
                  <CustomButton variant="primary">Sign Up</CustomButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
