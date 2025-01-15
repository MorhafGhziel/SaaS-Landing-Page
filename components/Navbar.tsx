import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";
import menuIcon from "@/public/burgerMenu.svg";
import CustomButton from "./CustomButton";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full px-4 p-2 md:pr-2 items-center">
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
            <Image
              src={menuIcon}
              alt="Butger Menu Icon"
              width={20}
              height={20}
              className="md:hidden"
            />
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
      </div>
    </section>
  );
};

export default Navbar;
