import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Image src={logoImage} alt="Layers Logo" />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
