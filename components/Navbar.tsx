import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo.svg";
import menuIcon from "@/public/burgerMenu.svg";

const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 border border-white/15 rounded-full">
          <div>
            <Image src={logoImage} alt="Layers Logo" />
          </div>
          <div>
            <Image
              src={menuIcon}
              alt="Butger Menu Icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
