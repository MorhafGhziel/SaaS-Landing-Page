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
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
