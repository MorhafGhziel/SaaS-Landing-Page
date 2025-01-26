import React from "react";
import logoImage from "@/public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div>
            <Image src={logoImage} alt="Layers Logo" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
