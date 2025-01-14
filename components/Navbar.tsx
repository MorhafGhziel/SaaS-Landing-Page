import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";
import menuIcon from "@/public/burgerMenu.svg";

const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
          <div>
            <Image src={logoImage} alt="Layers Logo" className="h-9 w-auto" />
          </div>
          <div>
            <Image
              src={menuIcon}
              alt="Butger Menu Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
